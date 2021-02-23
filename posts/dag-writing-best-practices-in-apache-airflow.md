---
title: DAG Writing Best Practices in Apache Airflow
description: "Learn the best practices when writing DAGs for Apache Airflow. We
  help you get started fast with example DAGs. "
heroImagePath: ../assets/blank.png
authors:
  - Eric Griffing
date: 2021-02-23T19:55:15.051Z
---
In Airflow, pipelines are called *directed acyclic graphs* (DAGs).

We want to share the best practices with you when writing DAGs with Apache Airflow. Understanding these best practices at a high level will give you the knowledge you need to create strong data pipelines. 

### Idempotency

Data pipelines are a messy business with a lot of various components that can fail. 

Idempotent DAGs allow you to deliver results faster when something breaks and can save you from losing data down the road. 

### Use Airflow as an Orchestrator

Airflow was designed to be an orchestrator, ***not*** an execution framework.

In practice, this means:

* DO use Airflow to orchestrate jobs with other tools
* DO offload heavy processing to execution frameworks (e.g. Spark)
* DO use an ELT framework wherever possible
* DO use intermediary data storage
* DON’T pull large datasets into a task and process with Pandas (it’s tempting, we know)

### Incremental Record Filtering

When possible, seek to break out your pipelines into incremental extracts and loads. This results in each DagRun representing only a small subset of your total dataset. This means that a failure in one subset of the data won't affect the rest of your DagRuns from completing successfully.

There are three ways you can achieve incremental pipelines.

#### Last Modified Date

This is the gold standard for incremental loads. Ideally each record in your source system contains a column containing the last time the record was modified. Every DAG run then looks for records that were updated within it's specified date parameters.

For example, a DAG that runs hourly will have 24 runs times a day. Each DAG run will be responsible for loading any records that fall between the start and end of it's hour. When any of those runs fail it will not stop the others from continuing to run.

#### Sequence IDs

When a last modified date is not available, a sequence or incrementing ID, can be used for incremental loads. This logic works best when the source records are only being appended to and never updated. If the source records are updated you should seek to implement a Last Modified Date in that source system and key your logic off of that. In the case of the source system not being updated, basing your incremental logic off of a sequence ID can be a sound way to filter pipeline records without a last modified date.

### Limit how much data gets pulled into a task

Every task gets run in its own container with limited memory (based on the selected plan) in Astronomer Cloud. If the task container doesn't have enough memory for a task, it will fail with: `{jobs.py:2127} INFO - Task exited with return code -9`.

Try to limit in memory manipulations (some packages like pandas are very memory intensive) and use intermediary data storage whenever possible.

### Intermediary Data Storage

It can be tempting to write your DAGs so that they move data directly from your source to destination. It usually makes for less code and involves less pieces, but doing so removes your ability to re-run just the extract or load portion of the pipeline individually. By putting an intermediary storage layer such as S3 or SQL Staging tables in between your source and destination, you can separate the testing and re-running of the extract and load.

If you are using s3 as your intermediary, it is best to set a policy restricted to a dedicated s3 bucket to use in your Airflow s3 connection object. This policy will need to read, write, and delete objects.

An example policy allowing this is below:

```json

```

For more details, please visit: `https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources`

Depending on your data retention policy you could modify the load logic and re-run the entire historical pipeline without having to re-run the extracts. This is also useful in situations where you no longer have access to the source system (i.e. hit an API limit).

### Use Template Fields when writing custom hooks and operators

Specifying that a field is templatable allows for it to be set by using environment variables using jinja templating.

For example, the `s3_key` and `since` and `until` fields are set as `template_fields` here: `https://github.com/airflow-plugins/google_analytics_plugin/blob/master/operators/google_analytics_reporting_to_s3_operator.py#L41`

This allows for these values to be dynamically set by the `schedule_interval`.

### depends*on*past and wait*for*downstream can be used for added safety

`depends_on_past` and `wait_for_downstream` are set at the DAG level, but filters down to tasks. If `depends_on_past` is set to `true`, the previously scheduled task instance needs to have succeeded before the next task instance will be scheduled (assuming all dependencies are met). Additionally, if `wait_for_downstream` is set to `true`, a task will wait for all tasks downstream of the previously scheduled task to finish before being scheduled.

Using these effectively can help ensure data integrity when scheduling a backfill where data is aggregated by some time interval.

### Static start_date

A dynamic start_date is misleading. It can cause failures when clearing out failed task instances and missing DAG runs.

## Transformations

Look to implement an ELT (extract, load, transform) data pipeline pattern with your DAG definition file. This means that you should look to offload as much of the transformation logic to the source systems or the destinations systems as possible. With python at your fingertips it can be tempting to attempt the transformations in the DAG but offloading those transformations to the source or destination systems will lead to better overall performance and keeps your DAG lean and readable.

### Use Staging Tables

Try to use staging tables before pushing to a final destination. This makes debugging errors easier as you'll have the exact data that caused an error and adds a layer of safety.

**Note** By default, each task counts as its own database session, so avoid temporary tables that only last a session. Instead, have the last task in your DAG clear out intermediary tables if everything runs successfully.

### Mongo Source

Use [aggregation pipelines](https://docs.mongodb.com/manual/core/aggregation-pipeline/) to perform your transformations on extract from a Mongo source.

### SQL Source

Try to do basic transformations and aggregations in SQL queries - this offloads transformation logic onto the source system and keeps your DAG readable.

## Readability

### Use a consistent file structure

To keep any custom plugins easy for someone else to use, use a consistent file structure. At Astronomer, we use:

```bash

```

See [here](https://github.com/airflow-plugins/) for examples!

### Change the name of your DAG when you change the start date

Changing the `start_date` of a DAG creates a new entry in Airflow's database, which could confuse the scheduler because there will be two DAGs with the same name but different schedules.

Changing the name of a DAG also creates a new entry in the database, which powers the dashboard, so follow a consistent naming convention since changing a DAG's name doesn't delete the entry in the database for the old name.

### Avoid top level code in your DAG file

The Airflow executor executes top level code on every heartbeat, so a small amount of top level code can cause performance issues. Try to treat the DAG file like a config file and leave all the heavy lifting for the hook and operator.

### Task Dependencies

Task dependencies are set using `set_upstream()` and `set_downstream()`. Using either will depend on your preferences, but it is best to stay consistent with which one you use.

#### Example

Instead of this

```python

```

Try to be consistent with this

```python

```

or this

```python

```