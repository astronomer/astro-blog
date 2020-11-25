---
title: Profiling the Airflow Scheduler
slug: profiling-the-airflow-scheduler
description: 'Ash explains how he''s been benchmarking and profiling the Airflow scheduler using py-spy and Flame Graphs. '
heroImagePath: ../assets/1575580690-flamegraphicsa.jpg
authors:
  - Ash Berlin-Taylor
date: 2019-12-05T00:00:00.000Z
---

<style>
table {
  font-family: Sofia Light, 'Open Sans', Helvetica, Arial, sans-serif;
	font-size: 1.55rem;
  line-height: 1.5em;
	margin-bottom: 1.55em;
}
th, td {
  border: 1px solid #e5e4e1;
  padding: 0.5em;
}
th {
  text-align: center;
  font-weight: bold;
}
td {
  background-color: #f3f3f3;
}
</style>

A good chunk of my role at Astronomer is working on making Airflow better for everyone – working directly on the open-source project, reviewing and merging PRs, preparing releases, and lately working on the roadmap for Airflow 2.0. (In many ways getting paid to work on open-source is my ideal job, but that is the subject of another blog post).

One of the big items on the [roadmap for Airflow 2.0][roadmap] is to “Improve Scheduler performance and reliability”. I’ve certainly seen cases where the scheduler just takes longer than it should to run tasks to completion. 

[roadmap]: https://cwiki.apache.org/confluence/display/AIRFLOW/Airflow+2.0

### Measure Twice, Cut Once

When it comes to performance testing and profiling, I think it is crucial to get reliable  before-and-after measurements in order to determine whether or not a change helps. Although there is a lot of variation in the timing numbers, “wall-clock” timing numbers are useful for a rough comparison. All tests were performed with revision [e7b790ded] (latest as of Mon Oct 21 08:03:49 2019 +0000).

[e7b790ded]: https://github.com/apache/airflow/tree/e7b790ded87de716b7802ade4aa37c1e3501c2d0

So our first step is to measure the current performance. I’m using this [example_dag] for testing, but to remove any executor variance (and not to mention the actual execution time of the task itself) I started by using the `NullExecutor` from the test suite.

[example_dag]: https://github.com/astronomer/airflow-example-dags/blob/5a9a8d7e84303ae7bfb3b76eae1a83e5dc7783ef/dags/example-dag.py

My driver script looks something like this:

```python
import airflow
from airflow.models import DagBag
from airflow.jobs.scheduler_job import SchedulerJob
from tests.executors.test_executor import TestExecutor

dagbag = airflow.models.DagBag()
dag = dagbag.get_dag("example_dag")
create_dagruns(dag)

# Disallow the scheduler to create new dag_runs - we've already created all the ones we want it to process
conf.set('scheduler', 'use_job_schedule', 'False')
# Turn on unit test mode so that we don't do any sleep() in the scheduler loop
conf.set('core', 'unit_test_mode', 'True')

scheduler_job = SchedulerJob(dag_ids=[], do_pickle=False, num_runs=1, executor=TestExecutor())
scheduler_job.run()
```

(I simplified it a bit here, and  I added code to create a specific number of DagRuns and  stop the scheduler once they are complete.)

### How to Profile Python

Python has a built in profiler (`cProfile`) but it's difficult to decipher its output to get a useful indication of the code that’s causing the slowdown. It will also slow down your code as "the profilers introduce overhead for Python code". However I'm a huge fan of the [py-spy] project, as it is quite frankly magic.

[py-spy]: https://github.com/benfred/py-spy

You can use `py-spy` to get a snapshot of the _current_ call stack, or get a top-like view of where the process is spending its time, all without a single change to the code, stop in the running process, or any noticeable difference in performance. This is the sort of thing that “shouldn’t work” and it’s amazing. 

(It works by reading the memory of another process and understanding the way _all_ of the versions of python interpreter create stack frames. I'm glad I don’t have to support that!)

The other more useful mode in py-spy allows us to create a “flame graph” of calls. For example:

[![Example flamegraph](https://raw.githubusercontent.com/benfred/py-spy/1842a68ac588ae8e44af226d2451c3cb65a902a8/images/flamegraph.svg?sanitize=true)](https://raw.githubusercontent.com/benfred/py-spy/1842a68ac588ae8e44af226d2451c3cb65a902a8/images/flamegraph.svg?sanitize=true)

**Note:** All of the flame graphs in this post can be clicked on for a bigger, interactive version.

#### How to Read Flame Graphs


According to his website, flame graphs were invented by [Brendan Gregg in December 2011](http://www.brendangregg.com/flamegraphs.html) in his work profiling MySQL.

(The style that py-spy creates is  sometimes called an “icicle” graph as the bars hang down from the top.)

When I read the flame graphs from py-spy, I make sure to keep in mind:

- The top of the chart is the bottom of the call stack (i.e. the entrypoint of the profiled program is at the top of the graph).
- The colours don’t mean anything, they are just chosen to vary from cell-to-cell and look sort of like a flame.
- Wider boxes indicate more time spent at that line or in functions called from that line.
- Deeper bars indicate more functions called inside (i.e. more work).
- All durations are relative, so you can’t compare one flame graph to another in absolute terms.
- `sleep()` or other I/O related operations that are waiting at the OS will not show up by default! They can be enabled by adding the `--idle` argument to py-spy.

There are two broad ways we can use these to find performance bottlenecks: either by looking for plateaus, which are big flat spots where we spend a lot of time in one place, or by looking for spikes where we do a lot of “work”. 

### Baseline

So the first step is to get a rough base-line indication of performance. I ran this command:

```sh
sudo py-spy record -o flame-baseline.html --idle -- \
  python ./profiled-scheduler.py
```

This runs the Scheduler until exactly 20 DagRuns of the example DAG have been completed. The total run time (as reported by the zsh `time` built-in) is **1m43.05s**, and the flame graph looks like this:

[![Flamegraph of baseline perofmance](https://astronomer.imgix.net/website/img/blog/2591/1573845186-flame-airflow-master-baseline.svg)](https://astronomer.imgix.net/website/img/blog/2591/1573845186-flame-airflow-master-baseline.svg)

There’s a lot going on here, but one interesting aspect is the giant icicle on the left, which is the python module importer. More on that in a second.

The other noticeable thing from this profile is 14.46% of time spent on this statement: `is_unit_test = conf.getboolean('core', 'unit_test_mode')`. Although it looks crazy, it only appears so high because we are running in unit test mode, so it doesn’t  end up sleeping. However, if we profile without unit test mode then 95% of the time is spent sleeping (line 1429 and 1441 in `SchedulerJob._execute_helper`).

#### Excluding Module Loading Time

Since the scheduler is a long running process, the time it takes to do the initial module import is not very relevant. And although it only accounts for less than 2% of the time, removing it makes the graph easier to look at, so my next step was to start the profiling _after_ the import was complete. Just as py-spy can launch a process and profile it, it can also attach to a running process and profile that:

```sh
py-spy record -o flame-no-import.html --pid PID_OF_PROCESS
```

Finding the right pid to attach to, and getting it attached quickly enough is tricky and error-prone, so I automated it in my driver script:

```python
import os

import airflow
from airflow.models import DagBag
from airflow.jobs.scheduler_job import SchedulerJob
from tests.executors.test_executor import TestExecutor

dagbag = airflow.models.DagBag()
dag = dagbag.get_dag("example_dag")
create_dagruns(dag)

# Disallow the scheduler to create new dag_runs - we've already created all the ones we want it to process
conf.set('scheduler', 'use_job_schedule', 'False')
# Turn on unit test mode so that we don't do any sleep() in the scheduler loop
conf.set('core', 'unit_test_mode', 'True')

scheduler_job = SchedulerJob(dag_ids=[], do_pickle=False, num_runs=1, executor=TestExecutor())

if 'PYSPY' in os.environ:
    pid = str(os.getpid())
    filename = 'flame-' + pid + '.html'
    os.spawnlp(os.P_NOWAIT, 'sudo', 'sudo', 'py-spy', 'record', '--idle', '-o', filename, '-p', pid)

scheduler_job.run()
```

This gives us a much more useful flame graph:

[![Flamegraph of baseline perofmance excluding module importing](https://astronomer.imgix.net/website/img/blog/2591/1573845210-flame-airflow-master-baseline-one-run-no-import.svg)](https://astronomer.imgix.net/website/img/blog/2591/1573845210-flame-airflow-master-baseline-one-run-no-import.svg)


There are no “obvious” candidates for slow spots - “plateaus” where the code is spending a lot of time - and when we profile outside of unit test mode, most of the time is spent sleeping.

So what next?

We now have to dig into how the scheduler does its job – turning files on a disk into running tasks. Most of the time now appears to be DB related, or polling the DagFileProcessorManager to harvest parsed DAGs — for a number of releases in the 1.10 series (since .2 I think), the scheduler has made use of a process pool to handle most of the work in parsing the DAG files in parallel. Without going into too much detail of the scheduler’s exact operation, the next thing to profile is the `SchedulerJob.process_file` - this is where the actual parsing takes place.

(If there is a demand for a post about the gritty internals of the scheduler I’ll write it in the future).

### Profiling File Processing

```python
import os

import airflow
from airflow.models import DagBag
from airflow.jobs.scheduler_job import SchedulerJob
from tests.executors.test_executor import TestExecutor

dagbag = airflow.models.DagBag()
dag = dagbag.get_dag("example_dag")
create_dagruns(dag)

# Disallow the scheduler to create new dag_runs - we've already created all the ones we want it to process
conf.set('scheduler', 'use_job_schedule', 'False')
# Turn on unit test mode so that we don't do any sleep() in the scheduler loop
conf.set('core', 'unit_test_mode', 'True')

scheduler_job = SchedulerJob(dag_ids=[], do_pickle=False, num_runs=1, executor=TestExecutor())

if 'PYSPY' in os.environ:
    pid = str(os.getpid())
    filename = 'flame-' + pid + '.html'
    os.spawnlp(os.P_NOWAIT, 'sudo', 'sudo', 'py-spy', 'record', '--idle', '-o', filename, '-p', pid)

scheduler_job.process_file(dag.fileloc)
```

This is looking more promising and interesting:
[![Flamegraph of SchedulerJob.process_file](https://astronomer.imgix.net/website/img/blog/2591/1573845245-flame-airflow-schedulerjob-processfile.svg)](https://astronomer.imgix.net/website/img/blog/2591/1573845245-flame-airflow-schedulerjob-processfile.svg)

It isn’t immediately obvious just from looking, but by using the interactive search function, something pops out. If I highlight the search term “compiler,” it becomes much clearer:

[![Flamegraph of SchedulerJob.process_file with 23% of time speant in "compiler"](https://astronomer.imgix.net/website/img/blog/2591/1573845258-flame-airflow-schedulerjob-processfile-hlcompiler.jpg)](https://astronomer.imgix.net/website/img/blog/2591/1573845245-flame-airflow-schedulerjob-processfile.svg?compiler)

All of that time is spent building SQL strings, not running the queries and not sending network requires.

**26.9% of the time is spent building SQL strings!**

The worst offender here (which is the big concentrated blob of purple on the right third) is [`TriggerRuleDep._get_dep_statuses()`][_get_dep_statuses]

[_get_dep_statuses]: https://github.com/apache/airflow/blob/fc4aa041b0f944d3b1f1b2d045a0518827f054a2/airflow/ti_deps/deps/trigger_rule_dep.py#L55-L78

### SQL in the Oven

Luckily for us SQLAlchemy, the ORM that Airflow uses, has an advanced feature called "[Baked Queries][baked-queries]":

The rationale for this system is to greatly reduce Python interpreter overhead for everything that occurs _before the SQL is emitted_. The caching of the "baked" system does not in any way reduce SQL calls or cache the "return results" from the database.

[baked-queries]: https://docs.sqlalchemy.org/en/13/orm/extensions/baked.html

This sounds exactly like the case we have found here. The syntax to make this change is a little bit unusual, but thankfully it is all “contained” within the existing DB access functions.

Let’s try it out on `TriggerRuleDep._get_dep_statuses` and the other “hot-path” queries:

Concurrent DagRuns | Tasks | Before            | After             | Speedup
------------------- | ----- | ----------------- | ----------------- | -------
2                   | 12    | 0.146s (±0.0163s) | 0.074s (±0.0037s) | x1.97
10                  | 12    | 1.11s (±0.0171s)  | 0.266s (±0.0229s) | x4.17
40                  | 12    | 4.28s (±0.101s)   | 0.852s (±0.0113s) | x5.02
40                  | 40    | 6.72s (±0.067s)   | 2.659s (±0.0283s) | x2.53

Let’s split the difference and call that a 2x speed up. Not too bad!

Looking at the table above we see that pre-baking queries has a bigger impact on `process_file()` when the DAGs are larger or when there are more active DagRuns. This makes sense as it means that the query is re-used in the same process more often.

So this change should mean that the scheduler will run tasks about 2-5x quicker, right?

Let’s find out. Running the “full” SchedulerJob benchmark using our TestExecutor (which remember, doesn’t actually run the tasks) gives a noticeable improvement:

Concurrent DagRuns | Tasks | Before              | After              | Speedup
------------------- | ----- | ------------------- | ------------------ | -------
40                  | 12    | 38.367s (±4.6792s)  | 14.213s (±1.7560s) | x2.70
40                  | 40    | 62.988s (±1.4969s)  | 44.868s (±1.8820s) | x1.40

A 1.4x speed up sounds pretty significant.

Let's try actually running the tasks by switching from the TestExecutor to the LocalExecutor:

Concurrent DagRuns | Tasks | Before              | After              | Speedup
------------------- | ----- | ------------------- | ------------------ | -------
1                   | 12    | 137.117s (±4.584s)  | 134.616s (±5.091s) | x1.01
3                   | 12    | 364.149s (±12.176s) | 355.574s (±9.045s) | x1.02

There is basically no change as the small difference that exists is within the timing variance. So what gives?

Remember earlier when I said “the time it takes to do the initial module import is not very relevant”? Well for the Scheduler this is true, but for running short tasks, this time starts to dominate. 

### Enter the Executor

Once the scheduler has determined  that a task should be run, the (slightly simplified) execution flow is as follows:

1. It sends the DAG ID, task ID, execution date and try number to the executor
1. When the executor picks it up off the queue, it:

     1. Runs the “task supervisor” as a sub-process (`airflow run ...`), which updates the task heartbeat regularly.
     1. Asks the TaskRunner to execute the actual task instance, which creates _another_ sub-process (`airflow run --raw ...`, a grand-child process of the scheduler).

This is the same for both the Local Executor and Celery Executor. Step 2.2) is slightly different for the KubeExecutor, but 2.2) is the same everywhere. Importantly, this is done by calling `subprocess.check_call()`, not by an `os.fork()`. That means that the new process has to load a new copy of python, load all the Airflow modules and core dependencies, and parse the config. Only then can it get on with what it wanted to do. And it has to do this twice (once for the task supervisor and once for the task).

The primary reason Airflow did that was to ensure that DAGs are never parsed in a long-running process (i.e. the scheduler). However on Unix-like machines `os.fork()` is an (almost) instant operation thanks to copy-on-write, meaning we can start a sub process with all the modules and config already loaded, potentially saving a lot of start up time. All while keeping the same isolation behaviour.

How much of a difference does this make? Well let's try replacing it with an `os.fork()`:

```diff
diff --git airflow/executors/local_executor.py airflow/executors/local_executor.py
index 66af4941b..a6c71c077 100644
--- airflow/executors/local_executor.py
+++ airflow/executors/local_executor.py
@@ -81,12 +85,21 @@ class LocalWorker(multiprocessing.Process, LoggingMixin):
         if key is None:
             return
         self.log.info("%s running %s", self.__class__.__name__, command)
-        try:
-            subprocess.check_call(command, close_fds=True)
-            state = State.SUCCESS
-        except subprocess.CalledProcessError as e:
-            state = State.FAILED
-            self.log.error("Failed to execute task %s.", str(e))
+
+        pid = os.fork()
+        if pid:
+            process = psutil.Process(pid)
+            self.log.info("Started process %d to watch task", pid)
+            returncode = process.wait()
+            state = State.FAILED if returncode else State.SUCCESS
+        else:
+            from airflow.bin.cli import CLIFactory
+            parser = CLIFactory.get_parser()
+            args = parser.parse_args(command[1:])
+            setproctitle("airflow task watcher {0.dag_id} {0.task_id} {0.execution_date}".format(args))
+            args.func(args)
+            os._exit(0)
+
         self.result_queue.put((key, state))

     def run(self):
diff --git airflow/task/task_runner/standard_task_runner.py airflow/task/task_runner/standard_task_runner.py
index c79d496ac..d17b2c8d2 100644
--- airflow/task/task_runner/standard_task_runner.py
+++ airflow/task/task_runner/standard_task_runner.py
@@ -29,12 +32,33 @@ class StandardTaskRunner(BaseTaskRunner):
     """
     def __init__(self, local_task_job):
         super().__init__(local_task_job)
+        self._rc = None

     def start(self):
-        self.process = self.run_command()
+        pid = os.fork()
+        if pid:
+            self.log.info("Started process %d to run task", pid)
+            self.process = psutil.Process(pid)
+            return
+        else:
+            from airflow.bin.cli import CLIFactory
+            parser = CLIFactory.get_parser()
+            args = parser.parse_args(self._command[1:])
+            setproctitle("airflow task runner {0.dag_id} {0.task_id} {0.execution_date}".format(args))
+            args.func(args)
+            os._exit(0)

-    def return_code(self):
-        return self.process.poll()
+    def return_code(self, timeout=0):
+        # We call this multiple times, but we can only wait on the process once.
+        if self._rc is not None:
+            return self._rc
+        try:
+            self._rc = self.process.wait(timeout=timeout)
+            self.process = None
+        except psutil.TimeoutExpired:
+            pass
+        self.log.debug("RC %r", self._rc)
+        return self._rc

     def terminate(self):
         if self.process and psutil.pid_exists(self.process.pid):
```

And what difference does that make?


Concurrent DagRuns | Tasks | Before            | Baked queries    | `os.fork()`        | Speedup
------------------- | ----- | ----------------- | ---------------- | ------------------ | -------
1                   | 12    | 137.12s (±4.58s)  | 134.62s (±5.09s) | 14.354s (±10.063s) | x9.55

An almost unbelievable 9x increase in speed!

I’ll be opening a PR for this, just as soon as I work out all the bugs in it :) Right now about one run in four of my tests fails with:

```
RuntimeError: reentrant call inside <_io.BufferedWriter name='<stdout>'>
```

Let's just hope the performance increase isn't because of a bug!

[Ash](https://www.linkedin.com/in/ashberlin/?originalSubdomain=uk) is an Airflow Team Lead at Astronomer and Project Management Committee member of Apache Airflow. Find him on Twitter [@AshBerlin](https://twitter.com/AshBerlin).

Astronomer is hiring! If you’re looking for a remote first culture and love Airflow+Kubernetes, contact us at [humans@astronomer.io](humans@astronomer.io).
