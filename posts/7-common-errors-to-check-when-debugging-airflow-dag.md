---
title: 7 Common Errors to Check when Debugging Airflow DAGs
slug: 7-common-errors-to-check-when-debugging-airflow-dag
description: Tasks not running? DAG stuck? Logs nowhere to be found? We’ve been there. Here’s a list of common snags and some corresponding fixes to consider when you’re debugging your Airflow deployment.
heroImagePath: ../assets/1533578390-theairflowuipreview.png
authors:
  - Paola Peraza Calderon
  - Ben Gregory
date: 2019-04-03T00:00:00.000Z
---

Apache Airflow has become the premier open-source task scheduler for just about any kind of job, from machine learning model training to common ETL orchestration. It's an incredibly flexible tool that, we can say from experience, powers mission critical projects for five person startups and Fortune 50 teams alike.

With that said, the very tool that many regard as a powerful "blank canvas" can quickly become a double edged sword if you're just getting started. And, unfortunately, there isn't a particularly vast wealth of resources and best practices a step or two above basic Apache Airflow fundamentals.

In an effort to fill that gap as much as possible, we've collected some of the most common issues we see nearly every user face - no matter how experienced and large their team. Whether you're new to Airflow or an old hand, check out this list of common snags and some corresponding fixes to consider.

---

## 1. Your DAG isn't running at the time you expect it to.

You wrote a new DAG that needs to run every hour and you're ready to turn it on. You set an hourly interval beginning today at 2pm, setting a reminder to check back in a couple of hours. You hop on at 3:30pm to find that while your DAG did in fact run, your logs indicate that there is only one recorded execution date for 2pm. Huh - what happened to the 3pm run?

Before you jump into fixer upper mode (you wouldn't be the first), rest assured that this is very much expected behavior. The functionality of Airflow's scheduler is a bit counterintuitive (and subject to some controversy in the Airflow community), but you'll get the hang of it. Two things:

**1. By design, an Airflow DAG will execute at the _completion_ of its schedule_interval**

That means one `schedule_interval` [AFTER the start date](https://airflow.apache.org/scheduler.html). An hourly DAG, for example, will execute its 2pm run when the clock strikes 3pm. The reasoning here is that Airflow can't ensure that all data corresponding to the 2pm interval is present until the _end_ of that hourly interval.

This is a peculiar aspect to Airflow, but an important one to remember - especially if you're using [default variables and macros](https://airflow.apache.org/macros).


**2. Time in Airflow is in UTC by default**

This shouldn't come as a surprise given that the rest of your databases and APIs most likely also adhere to this format, but it's worth clarifying.

You should _not_ expect your DAG executions to correspond to your local timezone. If you're based in US Pacific Time, a DAG run of 19:00 will correspond to 12:00 local time.

As of the 1.10 release, Airflow actually is [timezone aware](https://github.com/apache/airflow/pull/2781), but we'd still recommend keeping your DAGs written with the expectation of UTC timestamps for consistency.

## 2. One of your DAGs isn't running

If workflows on your deployment are generally running smoothly but you find that one specific DAG isn't scheduling tasks or running at all, it might have something to do with how you set it to schedule.

#### Make sure you don't have `datetime.now()` as your start_date

It's intuitive to think that if you tell your DAG to start "now" that it'll execute "now." BUT, that doesn't take into account how Airflow itself actually reads `datetime.now()`.

For a DAG to be executed, the `start_date` _must be_ a time in the past, otherwise Airflow will assume that it's not yet ready to execute. When Airflow evaluates your DAG file, it interprets `datetime.now()` as the current timestamp (i.e. NOT a time in the past) and decides that it's not ready to run. Since this will happen every time Airflow heartbeats (evaluates your DAG) every 5-10 seconds, it'll never run.

To properly trigger your DAG to run, make sure to insert a fixed time in the past (e.g. datetime(2019,1,1)) and set [catchup=False](https://github.com/apache/airflow/blob/v1-9-stable/airflow/models.py#L2865) (unless you're looking to run a backfill).

**Note:** You can manually trigger a DAG run via Airflow's UI directly on your dashboard (it looks like a "Play" button). A manual trigger executes immediately and will _not_ interrupt regular scheduling, though it will be limited by any concurrency configurations you have at the DAG, deployment level or task level. When you look at corresponding logs, the `run_id` will show `manual__` instead of `scheduled__`.

## 3. You're seeing a 503 Error on your deployment

If you hop into your Airflow deployment only to realize that your instance is entirely inaccessible via your web browser, it very likely has something to do with your Webserver. 

If you've already refreshed the page once or twice and continue to see a 503 error, read below for some Webserver related guidelines.

#### Your Webserver might be crashing

A 503 error is generally indicative of an issue with your deployment's Webserver, the core Airflow component responsible for rendering task state and task execution logs in the Airflow interface. If it's underpowered or otherwise experiencing an issue for any reason, you can generally expect it to affect UI loading time or web browser accessibility.

In our experience, a 503 specifically often indicates that your Webserver is crashing (at Astronomer, you might hear this referenced as a `CrashLoopBackOff` state). If you push up a deploy and your Webserver for any reason takes longer than a few seconds to start, it might hit a timeout period (10 secs by default) that "crashes" it before it has time to spin up. That triggers a retry, which crashes again, and so on and so forth.

If your deployment finds itself in this state, it might be that your Webserver is hitting a memory limit when loading your DAGs (even while your Workers and Scheduler continue to execute tasks as expected).

**A few things to note:**

**1. Have you tried upping your Webserver resources?**

Airflow 1.10 is a bit greedier than Airflow 1.9 with regards to CPU (memory usage), so we've seen a recent uptick in users reporting 503s. Often, a quick bump in resources allocated to your Webserver does the trick.

If you're using Astronomer, we generally recommend keeping the Webserver at a minimum of 5 AU ([Astronomer Units](https://www.astronomer.io/docs/pricing/)). Even if you're not running anything particularly heavy, keeping your Webserver below 5 will more likely than not return some funky behavior all around.

**2. What about increasing the Webserver Timeout period?**

If upping the Webserver resources doesn't seem to be having an effect (don't go crazy with it either), you might want to try increasing `web_server_master_timeout` or `web_server_worker_timeout`.

Raising those values will tell your Airflow Webserver to wait a bit longer to load before it hits you with a 503 (a timeout). You might still experience slow loading times if your deployment is in fact underpowered, but you'll likely avoid hitting a 503.

**3. Are you making requests outside of an operator?**

If you're making API calls, JSON requests or database requests _outside_ of an operator at a high frequency, your Webserver is much more likely to timeout.

When Airflow interprets a file to look for any valid DAGs, it first runs all code at the top level (i.e. outside of operators) immediately. Even if the operator itself only gets executed at execution time, everything called *outside* of an operator is called every heartbeat, which can be quite taxing.

We'd recommend taking the logic you have currently running outside of an operator and moving it inside of a Python Operator if possible.

## 4. Sensor tasks are failing intermittently

This leads us to a general best practice we've come to adopt.

#### Be careful when using Sensors

If you're using Airflow 1.10.1 or a prior version, sensors run continuously and occupy a task slot in perpetuity until they find what they're looking for, so they have a tendency to cause concurrency issues. Unless you truly never have more than a few tasks running concurrently, we generally recommend avoiding them unless you know it won't take too long for them to exit. 

For example, if a worker can only run X number of tasks simultaneously and you have three sensors running, then you'll only be able to run X-3 tasks at any given point. Keep in mind that if you're running a sensor at all times, that limits how and when a scheduler restart can occur (or else it will fail the sensor).

Depending on your use case, we'd suggest considering the following:

**1. Create a DAG that runs at a more frequent interval**

Possibly what the poke is set at - and skips downstream tasks if no file is found.

** 2. Trigger a [Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction-function.html)**

**Note:** Airflow v1.10.2's new sensor [`mode=reschedule`](https://github.com/apache/airflow/blob/1.10.2/airflow/sensors/base_sensor_operator.py#L46-L56) feature addresses this issue. If you have more sensors than worker slots, the sensor will now get thrown into a new `up_for_reschedule` state, thus unblocking a worker slot.

### 5. Tasks are executing, but they're getting bottlenecked

If everything looks like it's running as expected but you're finding that your tasks are getting bottlenecked, we'd recommend taking a closer look at two things:

Your Env Vars & Concurrency Related Configs + your Worker and Scheduler Resources.


#### 1. Check your Env Vars & Concurrency Related Configs

What exactly these values should be set at (and what could be causing a potential bottleneck) is specific to your setup - e.g. are you running many DAGs at once or one DAG with hundreds of concurrent tasks? With that said, fine-tuning them can certainly help address performance issues. Here's a breakdown of what you can look for:

** 1. Parallelism** ([parallelism](https://github.com/apache/airflow/blob/v1-10-stable/airflow/config_templates/default_airflow.cfg#L113))

   *  This determines how many task instances can be actively running in parallel _across_ DAGs given the resources available at any given time at the deployment level. Think of this as "maximum active tasks anywhere."
   *   `ENV AIRFLOW__CORE__PARALLELISM=18`


** 2. DAG Concurrency** ([dag_concurrency](https://github.com/apache/airflow/blob/v1-10-stable/airflow/config_templates/default_airflow.cfg#L116))

   *  This determines how many task instances your scheduler is able to schedule at once per DAG. Think of this as "maximum tasks that can be scheduled at once, per DAG."
   *   `ENV AIRFLOW__CORE__DAG_CONCURRENCY=16`


** 3. Non-Pooled Task Slot Count** ([Non_pooled_task_slot_count](https://github.com/apache/airflow/blob/v1-10-stable/airflow/config_templates/default_airflow.cfg#L123))

   *   When not using pools, tasks are run in the "default pool", whose size is guided by this config element.
   *   `ENV AIRFLOW__CORE__NON_POOLED_TASK_SLOT_COUNT=256`


** 4. Max Active Runs per DAG** ([max_active_runs_per_dag](https://github.com/apache/airflow/blob/v1-10-stable/airflow/config_templates/default_airflow.cfg#L126))

   *   This one's self-explanatory, but it determines the maximum number of active DAG runs per DAG.
   *   `ENV AIRFLOW__CORE__MAX_ACTIVE_RUNS 3`


** 5. Worker Concurrency** ([worker_concurrency](https://github.com/apache/airflow/blob/v1-10-stable/airflow/config_templates/default_airflow.cfg#L361))

   *   This determines how many tasks each _worker_ can run at any given time. The CeleryExecutor for example, will by default run a max of 16 tasks concurrently. Think of it as "How many tasks each of my workers can take on at any given time." 
   *   It's important to note that this number will naturally be limited by dag_concurrency. If you have 1 worker and want it to match your deployment's capacity, worker_concurrency = parallelism.
   *  `ENV AIRFLOW__CELERY__WORKER_CONCURRENCY=9`


** 6. Concurrency** ([concurrency](https://github.com/apache/airflow/blob/v1-9-stable/airflow/models.py#L2848))

   *   Not to be confused with the above settings. "Concurrency" here is set on the individual DAG level, and determines the number of tasks allowed to run concurrently _within_ a single DAG. This may also need to be tuned, but it will not work if defined as part of an `airflow.cfg` file.

**Pro-tip:** If you consider setting DAG or deployment level concurrency configs to a low number to protect against API rate limits, we'd recommend instead using ["pools"](https://airflow.apache.org/concepts.html?highlight=pool) - they'll allow you to limit parallelism at the task level and won't limit scheduling or execution outside of the tasks that need it.

#### 2. Try Scaling up your Scheduler or adding a Worker

If tasks are getting bottlenecked and your concurrency configurations all look alright, it might just be that your Scheduler is underpowered or that your deployment could use another worker. If you're using Astronomer, we generally recommend 5 AU as the default minimum for the Scheduler and 10 AU for your Celery workers if you have them.

Whether or not you beef up your current resources or add an extra worker is very much dependent on your use case, but we generally recommend the following:

   *  If you're running a relatively high number of light tasks across DAGs and at a relatively high frequency, you're likely better off having 2 or 3 "light" workers to spread out the work

   * If you're running fewer but heavier tasks at a lower frequency, you're likely better off with a single but "heavier" worker that can more efficiently execute those tasks

For more info on the differences between Executors, check out our [Airflow Executors: Explained](https://www.astronomer.io/guides/airflow-executors-explained/) Guide.

## 6. You're Missing Logs

This one comes up quite a bit too. Generally speaking, logs fail to show up because of a process that died on one of your workers.

You might see something like the following:

```
Failed to fetch log file from worker. Invalid URL 'http://:8793/log/staging_to_presentation_pipeline_v5/redshift_to_s3_Order_Payment_17461/2019-01-11T00:00:00+00:00/1.log': No host supplied
```

A few things to try:

**1. Rerun (delete) the task, if possible, to see if logs show up**

This will clear/reset tasks and prompt them to run again

**2. Change the [`log_fetch_timeout_sec`](https://github.com/apache/airflow/blob/v1-10-stable/airflow/config_templates/default_airflow.cfg#L304) to something more than 5 seconds (default)**

This is the amount of time (in seconds) that the Webserver will wait for an initial handshake while fetching logs from other workers.

**3. Give your workers a little more power.**

If you're using Astronomer, you can do this in the `Configure` tab of the Astronomer UI.

**4. Are you looking for a log from over 15 days ago?**

If you're using Astronomer, the log retention period is an environment variable we have hard-coded on our platform. For now, you won't have access to logs over 15 days old.

**5. You can exec into one of your Celery workers to look for the log files there**

This functionality is for Enterprise-only customers or folks using Kubernetes.

Once you're [set up with Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/), you can run: `kubectl exec -it {worker_name} bash`

Log files should be in `~/logs`. From there, they'll be split up by DAG/TASK/RUN.

### 7. Tasks are slow to schedule and/or have stopped being scheduled altogether

   If your tasks are slower than usual to get scheduled, you'll want to check how often you've set your scheduler to restart. Airflow has an unfortunately well-known problem by which the scheduler's performance degrades over time and requires a quick restart to ensure optimal performance.

   The frequency of restarts is defined in your airflow.cfg as `"run_duration"`. A `run_duration` of -1 indicates that you never want your Scheduler to restart, whereas a `run_duration` of 3600 will restart your scheduler every hour. Check out [this forum post](https://forum.astronomer.io/t/how-can-i-schedule-automatic-scheduler-restarts/61) for more info. We generally restart our own schedulers about once a day, but the frequency at which you might is very much dependent on your particular use case. 

   If you're using Astronomer, you can restart your scheduler by either:

1. Inserting `AIRFLOW__SCHEDULER__RUN_DURATION={num_seconds_between_restarts} `as an Environment Variable in the Configure page of the Astronomer UI to set a recurring restart OR

2. Running `astro airflow deploy` via your CLI to immediately restart everything (if you're running Celery, there is a [Worker Termination Grace Period](https://forum.astronomer.io/t/what-is-the-worker-termination-grace-period-on-astronomers-ui/141) you can leverage here to minimize existing immediate task disruption)
**Was this helpful?**

This list is based on our experience helping Astronomer customers with core Airflow issues, but we want to hear from you. Don't hesitate to reach out to us at humans@astronomer.io if we missed something that you think would be valuable to include.

If you have follow up questions or are looking for Airflow support from our team, reach out to us [here](https://www.astronomer.io/contact/?from=/).