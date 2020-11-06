---
title: Astronomer v0.8.0 Release Notes
slug: astronomer-v0-8-0-release
description: Release notes for v0.8 of the Astronomer Platform
heroImagePath: ../assets/1525230681-machineshumans1.jpg
authors:
  - Pete DeJoy
date: 2019-03-11T00:00:00.000Z
---

This week, we're launching v0.8.0 of our platform. This release is our most anticipated yet- highlights include a fresh backend API that we've completely rewritten to be more efficient and an Elasticsearch, Fluentd, Kibana (EFK) stack to the base platform that allows you to view and search your Airflow logs from the Astronomer UI.

An important note is that v0.8 is only available in Enterprise as of now. We're working hard to migrate our Cloud cluster over to our new API, but we wanted to make this version of our platform available to Enterprise customers as soon as it was ready to roll.

## What's new in 0.8.0

**1. A completely new backend API to power our platform.**

We've completely reworked our API to be more efficient, allow for more features, and build the foundation for future platform integrations such as RBAC and the Kubernetes Executor. This is a major step in the right direction, as it will allow us to iterate and build features more quickly for our customers and sets the stage for full RBAC integration in coming releases.

**2. An Elasticsearch, Fluentd, Kibana (EFK) stack in our base platform.**

We've implemented an Elasticsearch task handler in Airflow and added an EFK stack to our platform that will allow us to stream webserver, scheduler, and worker logs into our UI:

![logging](https://assets2.astronomer.io/main/guides/logging.png)

If you are an Astronomer Enterprise customer, you'll also have access to a Kibana dashbord to search logs across all of your Airflow deployments and create your own dashboards:

![logging](https://assets2.astronomer.io/main/guides/kibana.png)
 
**3. Faster deploys.**

We've removed StatefulSets from our backend in favor of Kubernetes Deployments, so [code pushes](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) are now faster.

**4. Single Namespace Mode.**

Single Namespace Mode allows our platform to run on a shared Kubernetes cluster.

By default our platform deploys in a multi-namespace mode, where the platform lives in its own Kubernetes namespace and each Airflow deployment gets it's own separate namespace. Single Namespace Mode allows you to run each Airflow deployment in the same namespace as the platform. This lowers the platform's usage of Kubernetes `ClusterRoles` down to just `Roles`.

**5. Support for Airflow 1.10.2.**

We now support running Airflow 1.10.2 in our base platform.

## Up Next

As mentioned in previous release notes, we're working hard and fast to keep releases coming regularly. We will continue to keep you updated with all new features that get built into Astronomer in the coming weeks, but [keep an eye on our Roadmap](https://www.astronomer.io/docs/roadmap/) to see what's on the horizon for us!