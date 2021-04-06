---
slug: airflow-providers
title: Airflow Providers
description: With the introduction of Airflow 2.0, providers are now delivered
  as separate but connected Python packages.
heroImagePath: ../assets/providers.png
authors:
  - Eric Griffing
date: 2021-04-06T20:23:50.045Z
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/vEEn_dutW8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Providers are Python packages containing all relevant modules for a specific service provider (ie. AWS, Snowflake, Google etc.)

Unlike Apache Airflow 1.10, now [Airflow 2.0](https://www.astronomer.io/blog/introducing-airflow-2-0) is delivered in multiple, separate but connected packages. The core of the Airflow scheduling system is delivered as `apache-airflow` package and there are around [60 Airflow Provider Packages ](https://registry.astronomer.io/)which can be installed separately.