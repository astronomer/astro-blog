---
title: A Great Expectations Provider for Apache Airflow
slug: airflow-great-expectations
description: We're pleased to announce an official integration that allows users to leverage Great Expectations natively in their DAGs.
heroImagePath: ../assets/ge-blog.jpg
authors:
  - Pete DeJoy
date: 2020-11-23T00:00:00.000Z
---

## A Short History of Airflow Providers

At Astronomer, we see Apache Airflow used in a variety of contexts. Whether it’s for ETL, machine learning (ML), CI, or analytics, we often work with folks extending Airflow to remove complexity from their end-to-end solution. An important driver of Airflow’s trusted adoption in the data orchestration space is the extensibility it brings both to teams at the start of their data journey as well as those operating at massive scale.  That extensibility is in large part due to the rich open-source integration ecosystem that surrounds Airflow and allows users to easily interact with third-party APIs and data systems. These integrations have always existed as a core part of the Airflow codebase and can be categorized into three major buckets:

- **Hooks:** Modules that establish a connection to third-party data stores, ie. establishing a connection to a remote PostgresA  instance.
- **Operators:** Modules that perform pre-defined logic or are tailored to a use case, ie. taking a csv file from an s3 bucket and copying it over to a snowflake table.
- **Sensors:**  Modules that wait for an external trigger before executing, ie. to trigger a job when a file hits an s3 bucket.

All three of these fundamental integration points are fully Pythonic and thus can be extended to fit virtually any use case. In fact, it’s common for Airflow users to build custom operators on top of pre-existing operators.

In terms of how these integrations are released, distributed and leverage by DAG authors, [Airflow 2.0](https://www.astronomer.io/blog/introducing-airflow-2-0/) introduces an important paradigm shift. Now, the above modules are packaged and released independently of the core Airflow codebase as Providers, so that maintainers can release them independently of Airflow releases. The Provider is a new fundamental abstraction layer that sits over Hooks, Operators, and Sensors, and even goes a little further to package in other nice-to-haves. To give a more concrete example of what this looks like in practice, the [Snowflake provider package](https://github.com/apache/airflow/tree/master/airflow/providers/snowflake) contains all Hooks, Operators, and Sensors that interface with [Snowflake](http://snowflake.com/) APIs, allowing Snowflake users to easily install and access all existing Snowflake integration modules in one fell swoop.

### Who Cares, Anyway?

While it may not seem like much at first pass, this is actually a significant change in the user experience for maintainers and DAG writers. Prior to Airflow 2.0, all Airflow integrations that live in [the core Airflow repo](https://github.com/apache/airflow) had to be included in an Airflow release before they could easily be accessed by Airflow data engineers. The process of merging and releasing these integrations introduced unnecessary friction for the maintainer, but it allowed them to match the expected development UX for dag writers, in which hooks, operators, and sensors were imported directly from the underlying Airflow codebase. 

Now that standard  practice is to `pip install` Provider packages in order to access hooks, operators, and sensors, it is much easier for third parties to build, maintain, and release their Providers independently of the core Airflow project without fracturing the core development experience; Provider maintainers get full control over the logic composing the interaction layer between a user’s DAG and their service and the data engineer’s development experience remains consistent.

## The Great Expectations Provider: A New Frontier

At Astronomer, we  work closely with our customers to build broad data platforms around Apache Airflow. As we began to work more closely with our customers on the data quality & validation layer of their platforms, we noticed a trending request: many wanted to use [Great Expectations](https://greatexpectations.io) to run data quality checks as intermediary tasks in their DAGs, but had questions around best practices.

### What is Great Expectations and why would you use it with Airflow?

[Great Expectations](https://greatexpectations.io) is an open-source Python-based data validation framework. It allows you to test your data by expressing what you “expect” from it as simple declarative statements in Python, then run validation using those “expectations” against data.

Airflow DAGs often include large-scale data processing and model training steps that are crucial to the health of the greater production system. These steps can come in a variety of flavors:  a user may spin up a Spark cluster to process a dataset, dynamically train an ML model, or trigger a downstream alert if a data output does not meet certain acceptance criteria. In these cases, validating that the data is clean and expected protects against wasted downstream processing and production failures; for example, you  don’t want to incur the cost of spinning up an expensive Spark cluster or training your models with bad data. Incorporating validation checks as steps in your DAG will stop downstream tasks from executing given a detected quality issue.

Naturally, when we started working with the Great Expectations team on building out a best practice for  using the two tools together, leveraging the next-gen Airflow 2.0 Provider framework made sense.

With that, we’re pleased to announce the [Great Expectations Provider for Apache Airflow](https://github.com/great-expectations/airflow-provider-great-expectations) — an officially-supported Python package that allows Airflow users to easily import data contexts and leverage native Great Expectations functionality directly from their DAGs.



## What’s in the Provider?
The Provider includes a `GreatExpectationsOperator`, which is a convenient way to run data validation with Great Expectations in your Airflow DAG. It can be imported from the Provider package for use in your DAG file. To use it, all you need to do is `pip install airflow-provider-great-expectations` in your Airflow project and call  the Operator in your DAG by importing from the package:


```
from great_expectations_provider.operators.great_expectations import GreatExpectationsOperator
```

### How do I use it?

Read the Airflow and [Great Expectations Integration Guide](https://astronomer.io/guides/airflow-great-expectations) for a full walkthrough on using the provider in your Airflow DAGs.

## The Road Ahead

We’ve tested the Great Expectations Provider with beta users and are pumped to now roll it out to a broader audience. And we’re just getting started; [the Provider is fully open-source](https://github.com/great-expectations/airflow-provider-great-expectations) and we’re looking forward to extending it to accommodate additional use cases. If you’d like to get involved, we’d love your input. Please feel free to submit a PR, open up a GitHub issue, or [reach out to us](https://astronomer.io/contact).

Huge shoutout to [Sam Bail](https://twitter.com/spbail) and the rest of the Great Expectations team for being great partners on this project, and to [Brian Lavery](https://www.linkedin.com/in/blavery/) from the New York Times and [Nick Benthem](https://www.linkedin.com/in/benthem/) from Everlane for valuable feedback along the way. We’re excited to continue building a world-class UX around Great Expectations and Airflow!