---
title: Astronomer v0.7.0 Release Notes
slug: astronomer-v0-7-0-release
description: Release notes covering the features released with v0.7.0 of the Astronomer platform.
heroImagePath: ../assets/1516302069-pexels-photo-796206-1.jpeg
authors:
  - Pete DeJoy
date: 2018-12-11T00:00:00.000Z
---

This week, we launched v0.7.0 of our platform. The highlights of this release include the ability to choose your executor and resource allocation directly from our app UI, initial Airflow 1.10.1 support, and a whole bunch of new Grafana dashboards for folks using our Enterprise Edition. See below for the full summary of upgrades. 


## What's new in 0.7.0

**1. Support for platform and Airflow deployment alerts on prometheus data in our Enterprise Edition.** 

You can now send alerts on platform and Airflow deployment data that's stored in the underlying prometheus database.

**2. Support for injecting Airflow environment variables at runtime through the UI.**
 
**3. Added support for different Airflow executors.**

You can now choose to use either the local or celery executor directly from the UI. Soon, we'll have the ability to choose the Kubernetes executor directly as well.

**4. Added user controls for dynamically adjusting resource allocation and constraints.**

Need to scale up your clusters? No problem. Just drag a silder in the UI and add more horsepower to your workers, webserver, and scheduler. 

**5. Added Airflow chart upgrade functionality.**

**6. Added new Grafana dashboards for:**
* Persistent storage
* Prometheus
* Registry
* Fluentd
* Airflow container state

**7. Initial airflow 1.10.1 support.**

## Up Next

As mentioned in previous release notes, we're working hard and fast to keep releases coming regularly. We will continue to keep you updated with all new features that get built into Astronomer in the coming weeks, but [keep an eye on our Roadmap](https://www.astronomer.io/docs/roadmap/) to see what's on the horizon for us!