---
title: DAG Writing Best Practices in Apache Airflow
description: "Learn the best practices when writing DAGs for Apache Airflow. We
  help you get started fast with example DAGs."
slug: "dag-writing-best-practices-in-apache-airflow"
heroImagePath: ../assets/dag-best-practices.png
authors:
  - Eric Griffing
date: 2021-02-23T19:55:15.051Z
---

In Airflow, pipelines are called *directed acyclic graphs* (DAGs).

We want to share the best practices with you when writing DAGs with Apache Airflow. Understanding these best practices at a high level will give you the knowledge to help you build your data pipelines correctly. 

To get started, you can use these [example DAGs](https://github.com/astronomer/webinar-dag-writing-best-practices). We cover exactly how to use these example DAGs and best practices in the video below. 

<!-- markdownlint-disable MD033 -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/HvjnLCQygO4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## High Level Best Practices When Writing DAGs 

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

#### Limit How Much Data Gets Pulled Into A Task

Every task gets run in its own container with limited memory (based on the selected plan) in Astronomer Cloud. If the task container doesn't have enough memory for a task, it will fail with: `{jobs.py:2127} INFO - Task exited with return code -9`.

Try to limit in memory manipulations (some packages like pandas are very memory intensive) and use intermediary data storage whenever possible.

### Use Template Fields, Airflow Variables, & Macros

Making fields templatable, or using built-in Airflow variables and macros allows them to be set dynamically using environment variables with jinja templating.

This helps with:

* Idempotency
* Situations where you have to re-run portions of the DAG
* Maintainability

### Avoid Top Level Code in Your DAG File

Top level code is run on every scheduler heartbeat, so having lots of it can cause performance issues.

Focus on readability -  DAGs should look like config files, and leave the heavy lifting to hooks, operators, or external scripts.

### Next Steps

We've also written more in-depth about best practices for writing DAGs [here](https://www.astronomer.io/guides/dag-best-practices). 

The easiest way to get started with Apache Airflow and writing DAGs is by using the Astronomer CLI. To make it easy you can get up and running with Airflow by following our [Quickstart Guide](https://www.astronomer.io/docs/cloud/stable/develop/cli-quickstart).
