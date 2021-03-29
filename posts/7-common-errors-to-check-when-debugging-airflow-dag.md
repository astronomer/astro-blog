---
title: 7 Common Errors to Check when Debugging Airflow DAGs
slug: 7-common-errors-to-check-when-debugging-airflow-dag
description: Tasks not running? DAG stuck? Logs nowhere to be found? We’ve been there. Here’s a list of common snags and some corresponding fixes to consider when you’re debugging your Airflow Deployment.
heroImagePath: ../assets/1573246544-screen-shot-2019-11-08-at-3-55-29-pm.jpg
authors:
  - Paola Peraza Calderon
  - Ben Gregory
date: 2019-04-03T00:00:00.000Z
---

Apache Airflow is the industry standard for workflow orchestration, handling use cases that range from machine learning model training to traditional ETL at scale. It's an incredibly flexible tool that powers mission critical projects for startups and Fortune 50 teams alike.

Airflow's breadth and extensibility, however, can make it challenging to adopt - especially for those looking for guidance beyond day one operations. In an effort to provide best practices and expand on existing resources, our team at Astronomer has collected some of the most common issues we see Airflow users face.

Whether you're new to Airfow or an experienced user, check out this list of common errors and some corresponding fixes to consider.

> **Note:** [Airflow 2.0](https://www.astronomer.io/blog/introducing-airflow-2-0) was released in December of 2020 and addresses a significant number of pain points commmonly reported by users running previous versions. We strongly encourage all teams to upgrade to Airflow 2.0+ as soon as they're able.
>
> For quick guidelines on how to run Airflow 2.0 locally, refer to [Get Started with Airflow 2.0](https://www.astronomer.io/guides/get-started-airflow-2). For detailed instructions on the migration process, refer to [Upgrading to Airflow 2.0+](https://airflow.apache.org/docs/apache-airflow/stable/upgrading-to-2.html) from the Apache Airflow Project and [Upgrade to Airflow 2.0 on Astronomer](https://www.astronomer.io/docs/cloud/stable/customize-airflow/upgrade-to-airflow-2) if you're running on our platform. If you'd like help establishing a migration path, [reach out to us](https://www.astronomer.io/get-astronomer).

---

## 1. Your DAG isn't running at the time you expect it to.

You wrote a new DAG that needs to run every hour and you're ready to turn it on. You set an hourly interval beginning today at 2pm, setting a reminder to check back in a couple of hours. You hop on at 3:30pm to find that while your DAG did in fact run, your logs indicate that there is only one recorded execution date for 2pm. Huh - what happened to the 3pm run?

Before you jump into debugging mode (you wouldn't be the first), rest assured that this is expected behavior. The functionality of the Airflow Scheduler can be counterintuitive, but you'll get the hang of it.

Two things:
- By design, an Airflow DAG will execute at the _completion_ of its `schedule_interval`.
- Airflow operates in UTC by default.

### Airflow's Schedule Interval

As stated above, an Airflow DAG will execute at the completion of its `schedule_interval`, which means one `schedule_interval` [AFTER the start date](https://airflow.apache.org/scheduler.html). An hourly DAG, for example, will execute its 2:00 PM run when the clock strikes 3:00 PM. Why? Airflow can't ensure that all data corresponding to the 2:00 PM interval is present until the end of that hourly interval.

This quirk is specific to Apache Airflow, and it's important to remember — especially if you're using [default variables and macros](https://airflow.apache.org/docs/apache-airflow/stable/macros-ref.html).

> **Note:** [A proposal](https://cwiki.apache.org/confluence/display/AIRFLOW/AIP-39+Richer+scheduler_interval) to improve scheduling logic and terminology is currently being evaluated in the Airflow community.

### Airflow Time Zones

Airflow stores datetime information in UTC internally and in the database. This behavior is shared by many databases and APIs, but it's worth clarifying.

You should _not_ expect your DAG executions to correspond to your local timezone. If you're based in US Pacific Time, a DAG run of 19:00 will correspond to 12:00 local time.

In recent releases, the community has added more time zone-aware features to the Airflow UI. For more information, refer to [Airflow documentation](https://airflow.apache.org/docs/apache-airflow/2.0.1/timezone.html).

## 2. One of your DAGs isn't running.

If workflows on your Deployment are generally running smoothly but you find that one specific DAG isn't scheduling tasks or running at all, it might have something to do with how you set it to schedule.

### Make sure you don't have `datetime.now()` as your start_date.

It's intuitive to think that if you tell your DAG to start "now" that it'll execute immediately. But that's not how Airflow reads `datetime.now()`.

For a DAG to be executed, the `start_date` _must be_ a time in the past, otherwise Airflow will assume that it's not yet ready to execute. When Airflow evaluates your DAG file, it interprets `datetime.now()` as the current timestamp (i.e. NOT a time in the past) and decides that it's not ready to run.

To properly trigger your DAG to run, make sure to insert a fixed time in the past and set [catchup=False](https://github.com/apache/airflow/blob/v1-9-stable/airflow/models.py#L2865) if you don't want to perform a backfill.

> **Note:** You can manually trigger a DAG run via Airflow's UI directly on your dashboard (it looks like a "Play" button). A manual trigger executes immediately and will _not_ interrupt regular scheduling, though it will be limited by any concurrency configurations you have at the DAG, deployment level or task level. When you look at corresponding logs, the `run_id` will show `manual__` instead of `scheduled__`.

## 3. You're seeing a 503 Error on your Deployment.

If your Airflow Deployment is entirely inaccessible via web browser, you likely have a Webserver issue. 

If you've already refreshed the page once or twice and continue to see a 503 error, read below for some Webserver-related guidelines.

### Your Webserver might be crashing.

A 503 error might indicate an issue with your Deployment's Webserver, which is the core Airflow component responsible for rendering task state and task execution logs in the Airflow UI. If it's underpowered or otherwise experiencing an issue, you can expect it to affect UI loading time or web browser accessibility.

In our experience, a 503 often indicates that your Webserver is crashing (at Astronomer, you might hear this referenced as a `CrashLoopBackOff` state). If you push up a deploy and your Webserver for any reason takes longer than a few seconds to start, it might hit a timeout period (10 secs by default) that "crashes" it before it has time to spin up. That triggers a retry, which crashes again, and so on and so forth.

If your Deployment is in this state, your Webserver might be hitting a memory limit when loading your DAGs even as your Scheduler and Worker(s) continue to schedule and execute tasks.

### Increase Webserver resources.

Airflow 1.10 is a bit greedier than Airflow 1.9 with regards to CPU (memory usage), so we've seen a recent uptick in users reporting 503s. Often, a quick bump in resources allocated to your Webserver does the trick.

If you're using Astronomer, we generally recommend keeping the Webserver at a minimum of 5 AU ([Astronomer Units](https://www.astronomer.io/docs/pricing/)). Even if you're not running anything particularly heavy, keeping your Webserver below 5 will more likely than not return some funky behavior all around.

### Increase the Webserver Timeout period.

If upping the Webserver resources doesn't seem to have an effect, you might want to try increasing `web_server_master_timeout` or `web_server_worker_timeout`.

Raising those values will tell your Airflow Webserver to wait a bit longer to load before it hits you with a 503 (a timeout). You might still experience slow loading times if your Deployment is in fact underpowered, but you'll likely avoid hitting a 503.

### Avoid making requests outside of an operator.

If you're making API calls, JSON requests, or database requests outside of an operator at a high frequency, your Webserver is much more likely to timeout.

When Airflow interprets a file to look for any valid DAGs, it first runs all code at the top level (i.e. outside of operators). Even if the operator itself only gets executed at execution time, everything called outside of an operator is called every heartbeat, which can be quite taxing.

We'd recommend taking the logic you have currently running outside of an operator and moving it inside of a Python Operator if possible.

## 4. Sensor tasks are failing intermittently.

This leads us to a general best practice we've come to adopt.

### Be careful when using Sensors.

If you're running Airflow 1.10.1 or earlier, [Airflow sensors](https://www.astronomer.io/guides/what-is-a-sensor) run continuously and occupy a task slot in perpetuity until they find what they're looking for, often causing concurrency issues. Unless you never have more than a few tasks running concurrently, we recommend avoiding them unless you know it won't take too long for them to exit. 

For example, if a worker can only run X number of tasks simultaneously and you have three sensors running, then you'll only be able to run X-3 tasks at any given point. Keep in mind that if you're running a sensor at all times, that limits how and when a scheduler restart can occur (or else it will fail the sensor).

Depending on your use case, we'd suggest considering the following:

- Create a DAG that runs at a more frequent interval.
- Trigger a [Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction-function.html).

> **Note:** Airflow v1.10.2's new sensor [`mode=reschedule`](https://github.com/apache/airflow/blob/1.10.2/airflow/sensors/base_sensor_operator.py#L46-L56) feature addresses this issue. If you have more sensors than worker slots, the sensor will now get thrown into a new `up_for_reschedule` state, thus unblocking a worker slot.
>
> If you're running Airflow 2.0+, [Smart Sensors](https://airflow.apache.org/docs/apache-airflow/2.0.1/smart-sensor.html?highlight=smart%20sensors).

## 5. Tasks are executing, but they're getting bottlenecked.

If your tasks are stuck in a bottleneck, we'd recommend taking a closer look at:

- Environment Variables and concurrency configurations
- Worker and Scheduler resources

### Environment Variables and concurrency configurations.

The potential root cause for a bottleneck and what exactly these values should be set at is specific to your setup. For example, are you running many DAGs at once, or one DAG with hundreds of concurrent tasks?

Regardless of your use case, however, setting a few [environment variables](https://airflow.apache.org/docs/apache-airflow/stable/howto/set-config.html) can help improve performance. These environment variables are set in Airflow's `airflow.cfg` file. For all default values, [refer here](https://github.com/apache/airflow/blob/v2-0-stable/airflow/config_templates/default_airflow.cfg).

#### Parallelism

Defined as `AIRFLOW__CORE__PARALLELISM`, [Parallelism](https://github.com/apache/airflow/blob/v2-0-stable/airflow/config_templates/default_airflow.cfg#L113) determines how many task instances can be actively running in parallel _across_ DAGs given the resources available at any given time at the Deployment level. Think of this as "maximum active tasks anywhere." To increase the limit of tasks set to run in parallel, set this value higher than its default of 32.

#### DAG Concurrency

Defined as `ENV AIRFLOW__CORE__DAG_CONCURRENCY=`, [dag_concurrency](https://github.com/apache/airflow/blob/v2-0-stable/airflow/config_templates/default_airflow.cfg#L117) determines how many task instances your Scheduler is able to schedule at once per DAG. Think of this as "maximum tasks that can be scheduled at once, per DAG." The default is 16.

#### Max Active Runs per DAG

Defined as `AIRFLOW__CORE__MAX_ACTIVE_RUNS=`, [max_active_runs_per_dag](https://github.com/apache/airflow/blob/v2-0-stable/airflow/config_templates/default_airflow.cfg#L123) determines the maximum number of active DAG runs per DAG. The default value is 16.

#### Worker Concurrency

Defined as `AIRFLOW__CELERY__WORKER_CONCURRENCY=9`, [worker_concurrency](https://github.com/apache/airflow/blob/v2-0-stable/airflow/config_templates/default_airflow.cfg#L676) determines how many tasks each Celery Worker can run at any given time. The Celery Executor will run a max of 16 tasks concurrently by default. Think of this as "how many tasks each of my workers can take on at any given time."

It's important to note that this number will naturally be limited by `dag_concurrency`. If you have 1 Worker and want it to match your Deployment's capacity, `worker_concurrency` should be equal to `parallelism`. The default value is 16.

> **Pro-tip:** If you consider setting DAG or deployment-level concurrency configurations to a low number to protect against API rate limits, we'd recommend instead using ["pools"](https://airflow.apache.org/concepts.html?highlight=pool) - they'll allow you to limit parallelism at the task level and won't limit scheduling or execution outside of the tasks that need it.

### Try Scaling up your Scheduler or adding a Worker.

If tasks are getting bottlenecked and your concurrency configurations look alright, it might just be that your Scheduler is underpowered or that your Deployment could use another Celery Worker, assuming you're using the [Celery Executor](https://airflow.apache.org/docs/apache-airflow/2.0.1/executor/celery.html). If you're running on Astronomer, we generally recommend 5 AU as the default minimum for the Scheduler and 10 AU for Celery Workers.

Whether or not you scale your current resources or add an extra Celery Worker depends on your use case, but we generally recommend the following:

   * If you're running a relatively high number of light tasks across DAGs and at a relatively high frequency, you're likely better off having 2 or 3 "light" workers to spread out the work.
   * If you're running fewer but heavier tasks at a lower frequency, you're likely better off with a single but "heavier" worker that can more efficiently execute those tasks.

For more information on the differences between Executors, we recommend reading [Airflow Executors: Explained](https://www.astronomer.io/guides/airflow-executors-explained/).

## 6. You're Missing Logs.

Generally speaking, logs fail to show up because of a process that died on your Scheduler or one or more of your Celery Workers.

If you're missing logs, you might see something like the following:

```
Failed to fetch log file from worker. Invalid URL 'http://:8793/log/staging_to_presentation_pipeline_v5/redshift_to_s3_Order_Payment_17461/2019-01-11T00:00:00+00:00/1.log': No host supplied
```

A few things to try:

1. Clear the task instance via the Airflow UI to see if logs show up. This will prompt your task to run again.
2. Change the [`log_fetch_timeout_sec`](https://github.com/apache/airflow/blob/v1-10-stable/airflow/config_templates/default_airflow.cfg#L304) to something more than 5 seconds (default). This is the amount of time (in seconds) that the Webserver will wait for an initial handshake while fetching logs from other workers.
3. Give your workers a little more power. If you're using Astronomer, you can do this in the `Configure` tab of the Astronomer UI.
4. Are you looking for a log from over 15 days ago? If you're using Astronomer, the log retention period is an Environment Variable we have hard-coded on our platform. For now, you won't have access to logs over 15 days old.
5. Exec into one of your Celery workers to look for the log files. If you're running Airflow on Kubernetes or Docker, you can run use [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) or Docker commands to run `$ kubectl exec -it {worker_name} bash`. Log files should be in `~/logs`. From there, they'll be split up by DAG/TASK/RUN.

## 7. Tasks are slow to schedule and/or have stopped being scheduled altogether

If your tasks are slower than usual to get scheduled, you'll want to check how often you've set your scheduler to restart. Airflow has an unfortunately well-known problem by which the scheduler's performance degrades over time and requires a quick restart to ensure optimal performance.

The frequency of restarts is defined in your airflow.cfg as `"run_duration"`. A `run_duration` of -1 indicates that you never want your Scheduler to restart, whereas a `run_duration` of 3600 will restart your scheduler every hour. Check out [this forum post](https://forum.astronomer.io/t/how-can-i-schedule-automatic-scheduler-restarts/61) for more info. We generally restart our own schedulers about once a day, but the frequency at which you might is very much dependent on your particular use case. 

If you're using Astronomer, you can restart your scheduler by either:

1. Inserting `AIRFLOW__SCHEDULER__RUN_DURATION={num_seconds_between_restarts} `as an Environment Variable in the Configure page of the Astronomer UI to set a recurring restart OR

2. Running `astro airflow deploy` via your CLI to immediately restart everything (if you're running Celery, there is a [Worker Termination Grace Period](https://forum.astronomer.io/t/what-is-the-worker-termination-grace-period-on-astronomers-ui/141) you can leverage here to minimize existing immediate task disruption)

> **Note:** Scheduler performance was a critical part of the [Airflow 2.0 release](https://www.astronomer.io/blog/introducing-airflow-2-0) and has seen significant improvements since December of 2020. For more information, read [The Airflow 2.0 Scheduler](https://www.astronomer.io/blog/airflow-2-scheduler). 

## Was this helpful?

This list is based on our experience helping Astronomer customers with core Airflow issues, but we want to hear from you. Don't hesitate to reach out to us at humans@astronomer.io if we missed something that you think would be valuable to include.

If you have follow up questions or are looking for Airflow support from our team, [reach out to us](https://www.astronomer.io/contact/?from=/).

<!-- markdownlint-disable-file -->
