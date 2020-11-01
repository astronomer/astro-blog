---
title: Astronomer v0.6.0 Release
slug: astronomer-v0-6-0-release
description: Release notes for v0.6.0 of the Astronomer platform.
heroImagePath: ./1526941875-blastoff.jpg
authors:
  - author: Pete DeJoy
    avatar: ../avatars/1515431834-20228674_10214325962847851_7349910181572716984_n.jpg
date: 2018-09-28T00:00:00.000Z
---

This week, we launched v0.6.0 of our platform. Aside from a handful of small fixes, the main feature of this release involves the ability to integrate Astronomer with your CI/CD pipelines via service accounts. This has been a highly-requested feature from our customers and we're very excited for folks to start putting it to use.


## What's new in 0.6.0

**1. Support for Service Accounts and deploying from CI/CD Pipelines** 

We now support the use of service accounts through our API.  These accounts will be automatically authenticated so that you can easily integrate Astronomer into your company's standard deployment process (gitlab, github, bitbuckets, etc). As a result, you now can deploy your DAGs using your continuous integration/continuous delivery tool fo choice

Check out [this guide](https://www.astronomer.io/guides/deploying-dags-with-cicd/) for more information on how to do that.


**2. Updated all images to Alpine 3.8**

All images, including the Airflow image, now run in the most up-to-date Alpine environment.


## Up Next

As mentioned in previous release notes, we're working hard and fast to keep releases coming regularly. We will continue to keep you updated with all new features that get built into Astronomer in the coming weeks, but [keep an eye on our Roadmap](https://www.astronomer.io/docs/roadmap/) to see what's on the horizon for us!