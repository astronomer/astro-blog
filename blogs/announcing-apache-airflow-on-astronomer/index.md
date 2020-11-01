---
title: 'Announcing the Astronomer Platform, a managed service for Apache Airflow'
slug: announcing-apache-airflow-on-astronomer
description: Managed Apache Airflow for complex ETL orchestration
heroImagePath: ./1520972249-airflowheaderb-2x.jpg
authors:
  - author: Ry Walker
    avatar: ../avatars/1504130835-ry-walker1795.jpg
date: 2018-03-14T00:00:00.000Z
---

**Update**: Since this blog post was published, we've made big improvements to our new managed Airflow service, Astronomer Cloud. [Check out the product page](https://astronomer.io/cloud) and [start a free trial](https://www.astronomer.io/trial/).

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

### We’ve made getting started with Airflow dead-simple

1. [Sign up](https://www.astronomer.io/trial/) for a free trial.
1. Determine what [plan] (https://www.astronomer.io/pricing/) is appropriate for your needs.
Provision your instance of Airflow on Astronomer
1. Start writing Airflow data workflows in Python.

And if you don’t have any experience with Airflow but you want to investigate getting your team to get ramped up quickly, check out [Spacecamp](https://www.astronomer.io/blog/announcing-astronomer-spacecamp/), an immersive guided development course in all things Airflow. 

Also, tune into our [Airflow Podcast](https://soundcloud.com/the-airflow-podcast) to hear from some of the project’s top contributors and users. 
