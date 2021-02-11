---
title: 'Announcing the Astronomer Platform, a managed service for Apache Airflow'
slug: announcing-apache-airflow-on-astronomer
description: Managed Apache Airflow for complex ETL orchestration
heroImagePath: ../assets/1520972249-airflowheaderb-2x.jpg
authors:
  - Ry Walker
date: 2018-03-14T00:00:00.000Z
---

### The Problem with ETL

The past few years have brought a dramatic shift in the data landscape—as data gets bigger and faster, many organizations find themselves spending more time centralizing and preparing data sets for analytics than generating insights. In order to combat this, companies have invested heavily in extract, transform, load (or ETL) tools, but old-school drag-and-drop tools no longer cut it for savvy data teams who need a more flexible solution. 

To satisfy this need for more customizability, AirBnb Data Engineer Maxime Beauchemin created and then open-sourced Airflow: a workflow management system that defines tasks and their dependencies as code and then distributes and executes them on a defined schedule. Built by developers, for developers, Airflow is based on the principle that ETL is best expressed in code.

### Why we created Astronomer

While Airflow is ambitious in design and vision, it can cause some headaches, particularly with respect to implementation, devops, and maintenance. Our team at Astronomer has built a Managed Airflow product to accomplish three major goals:

#### 1. Secure deployment and scaling

Fast and secure deployment to a managed cloud environment and seamless horizontal scaling ensures that time is spent on writing data pipelines instead of dealing with infrastructure issues.

#### 2. Provide a world-class developer experience

Astronomer caters to the needs and desires of modern open-source developers with lightweight tools, a rich [CLI](https://www.astronomer.io/docs/cli-quickstart/) and API, and a locally mirrored dev environment.

#### 3. Work with data anywhere

Proliferation of SaaS silos and internal straddling of cloud/on-premise data environments means that data teams must be prepared to work with a variety of data in the cloud across technical and corporate barriers.

### Get Started with Apache Airflow

If you're interested in running Apache Airflow on Astronomer, [reach out to us](https://www.astronomer.io/get-astronomer) today. For guidelines on how to install Airflow on your local machine with Astronomer's open source CLI, follow [Get Started with Apache Airflow 2.0](https://www.astronomer.io/guides/get-started-airflow-2).

Also, tune into our [Airflow Podcast](https://www.astronomer.io/podcast/) to hear from some of the project’s top contributors and users. 
