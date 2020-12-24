---
title: Astronomer v0.5.0 Release
slug: astronomer-v0-5-0-release
description: Release notes from our recent platform update to v0.5.0.
heroImagePath: ../assets/1536860941-v0-5.jpg
authors:
  - Pete DeJoy
date: 2018-09-12T00:00:00.000Z
---

This week, we launched v0.5.0 of our platform, which includes significant improvements to our deployment process and monitoring features. As mentioned in our previous release notes, we are committed to regularly shipping release notes with our updates to keep ourselves moving forward at a quick pace.

## What's included in v0.5.0

### 1. KubernetesPodOperator

Every Airflow deployment now goes into its own namespace with resource quotas, limits, and default

### 2. Node auto-scaling

All containers are now assigned resource requests/limits.

### 3. Database connection pooling

The pgbouncer is now deployed with every deployment to pool connections to postgres for *all airflow pods*, including the webserver, scheduler, workers,and podoperators.

### 4. Grafana enhancements

Added a new pgbouncer and nginx ingress dashboards, fixed container metric graphs, and added deployment dropdowns to all dashboards to drill down into specific deployments.

### 5. Faster deploys

We fixed containers from restarting on initial boot, especially noticeable with flower. This resulted in noticeable speed improvements in deployment.

### 6. Fixed worker logs garbage collector

Storage logs are now pruned so that they don't take up unneccesary volume in storage.


## What's Next

Interested in seeing what's next for us? Check out our [Astronomer Roadmap guide](https://www.astronomer.io/docs/roadmap), which details what we'll be roping into our platform in coming releases.

If you'd like to see a demo or give our platform a spin, you can [reach out to us to chat here](https://www.astronomer.io/#request).

