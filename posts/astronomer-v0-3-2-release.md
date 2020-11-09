---
title: Astronomer v0.3.2 Release
slug: astronomer-v0-3-2-release
description: 'A rundown of features and product improvements since our v0.3.0 release. '
heroImagePath: ../assets/1533060188-blog-hero-v0-3-2.jpg
authors:
  - Greg Brunk
date: 2018-07-31T00:00:00.000Z
---

Our team launched [Astronomer v0.3.0](http://https://www.astronomer.io/blog/announcing-astronomer-v0-3-0/) two weeks ago, timely delivering our strongest release yet. We set a solid foundation for both our Enterprise and Cloud Editions and are getting in the rhythm of shipping releases regularly and openly. In that spirit, read below for a short update that breaks down v.0.3.2, officially released this week.
,## A Breakdown of v0.3.2
   
**(1) All charts and their pods are now selected by a `NetworkPolicy` that defines strict `Ingress` rules.** 
- This will prevent pods from talking to pods they shouldn't be talking to. Individual airflow deployments will now also be isolated at the network level. We're looking to define `Egress` rules in the future, but these improvements give us a good start.

**(2) Prevent redis and flower from restarting during code deployments.** 
- This dramatically upgrades the deployment sequence/experience. Flower now reliably remains up and shows workers going up or down in real time, making deployments significantly cleaner. You'll find that workers are able to properly stop taking tasks, drain ongoing tasks, shut down, and restart.

**(3) Improved docker caching.**
- This speeds up the development experience as well as new code deployment. It's a huge improvement, and we'd like to potentially use a multi-stage onbuild image to optimize it further in the future.

**(4) A few things we now support.**
- The ability to run multiple Astronomers on a cluster
- EKS
- Google Cloud SQL

**(5) Updates to Prometheus/Grafana.**
- To support multiple Airflow deployments, we added more descriptive labels and fixed network metrics that are all scoped to a particular namespace


## Join our Beta Program. 

Interested in trying this out yourself? Reserve a spot in our beta program [here](https://https://www.astronomer.io/#beta-request), and we’ll reach out to schedule a demo. 

If you’re a current customer or a loyal follower of our product, stay peeled to our blog for these updates (dedicated web page coming soon). 

Cheers! 

