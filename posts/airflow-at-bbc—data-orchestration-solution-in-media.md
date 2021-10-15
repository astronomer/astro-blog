---
slug: bbc-data-orchestration
title: Airflow at BBC—Data Orchestration Solution in Media
description: A conversation with the BBC's Principal Data Engineer about how
  Apache Airflow helps them deliver personalized experiences to the audience.
heroImagePath: ../assets/bbc2.png
authors:
  - Ula Rydiger
date: 2021-10-14T08:06:57.748Z
---

<iframe src="https://fast.wistia.net/embed/iframe/5yl5pu3obl" title="Societe - teaser video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%" style="aspect-ratio: 16/9"></iframe>

We’re happy to share a post-Airflow Summit talk with Tatiana Al-Chueyr Pereira Martins, Principal Data Engineer at BBC— a leading UK broadcaster. Tatiana’s Datalab team is responsible for delivering personalized experiences to the BBC audience, which involves use cases surrounding machine learning, software engineering, data engineering, and DevOps. Bringing all the tasks together proved to be a challenge, so the team decided to implement Apache Airflow in their Data Stack.

Thanks to Apache Airflow, Data Labs team at BBC:

* Standardized the ETL process
* Implemented a process for building machine learning pipelines
* Quickly and efficiently builds new variants of ML models
* Created a centralized platform to visualize and identify issues

Read on to learn more about their Airflow journey!

> “In a company like BBC, data teams have to keep up with the ever-changing technology. Airflow is extensible and can be run anywhere, giving businesses a lot of flexibility and resilience when adapting to changes without having to replace the entire Data Stack.”

## What kind of challenges were you facing before implementing Apache Airflow?

Before Airflow, we didn’t have a standardized ETL process or any orchestration tools in Datalab. We also didn’t have a strategy for building machine learning pipelines. Airflow was a perfect solution for both of these problems. 

## Prior to using Airflow have you been using any other orchestration tools?

Initially, we attempted not to use an orchestration tool, and simply use PubSub and have event publishers and consumers. Although this approach worked, we lacked observability of our workflows.

Next, we looked into Luigi, but it was not distributed and didn’t fit our needs. We considered using TensorFlow Extended (TFX), but at the time it was not mature enough. Additionally, although it had the potential to handle our Machine Learning pipelines, it would not solve our[ ETL ](https://www.astronomer.io/blog/build-an-etl-process)requirements. We also looked into the first generation of the Google AI Platform, but it lacked the features we needed—and I personally felt uneasy with being locked in a proprietary stack.

In the end, since we were using Google Cloud Platform anyway, their managed Airflow service (Composer) allowed us to validate it as an orchestrator quickly—plus, it met our needs.

## Why did you decide to use Apache Airflow? 

The team already knew Python, plus we had an idea of ingesting multiple data sources and building different types of machine learning models. Airflow allowed us to create templates of workflows and achieve a configuration-driven approach, which made delivering new variants of machine learning models very easy. At first, it took us a while to be able to build the first workflows as we were getting used to the tool. However, in the last quarter, we delivered four new variants of machine learning models. Before Airflow, it took us nearly a year to build one model. Airflow helped us adapt and integrate new elements, and have an overview of what’s going on in the system.

## What was the team’s first response to Airflow?

When one of my team members, who’d had a very positive experience with Airflow, recommended it, most engineers weren't very keen on the idea. It was probably because we had very short deadlines and it seemed challenging to start implementing a new tool. However, I decided to go for it and so we tried using Composer, GCP’s managed Airflow. As it turned out to be successful, we eventually inspired other teams in the Datalab department at BBC to follow our lead and switch to Airflow. 

> “In the last quarter, we delivered four new variants of machine learning models for different use cases. Before Airflow, it took us nearly a year to build one model.”

## What has changed after implementing Apache Airflow? 

Before Airflow, we used to rely on many microservices. Some of them were overloaded with ingestion, transformation, and exportation of data. Some were monolithic, which made the job even harder to extend the solutions, troubleshoot, and monitor. The more components were added to the stack, the harder it was to monitor the groups of tasks and make them succeed. 

Thanks to Airflow, we created a centralized platform to visualize and identify issues. It helped us achieve a standardized way of workflow development and reuse code for different use cases. After the initial time spent on learning the tool, I’d say that implementing Airflow has really paid off. 

## How can Airflow benefit the media industry?

In a company like BBC, data teams have to keep up with the ever-changing technology: databases, cloud providers, etc. Airflow, being an open source tool, is extensible and can be run anywhere, giving businesses a lot of flexibility and resilience when adapting to changes without having to replace the entire [Data Stack](https://www.astronomer.io/blog/build-a-modern-data-stack). To me, Airflow is a glue—it can be used regardless of the material (technologies) it connects.

\---

If you’re looking to modernize your data stack and processes—Astronomer is for you! Our experts will help you get started with Airflow, or, if you’re already using it, optimize and customize the tool to your needs. 

[Get in touch with us today to learn more about how Airflow and Astronomer can help. ](https://www.astronomer.io/get-astronomer)