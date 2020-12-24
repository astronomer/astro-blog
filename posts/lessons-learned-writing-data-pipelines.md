---
title: Lessons Learned Writing Data Pipelines
slug: lessons-learned-writing-data-pipelines
description: I know firsthand how challenging data pipelines can be. Here's a peek under the hood of Astronomer at what makes our growing platform unique.
heroImagePath: ../assets/PipelinesWallpaper2560x1600f.jpg
authors:
  - Alois Barreras
date: 2016-08-23T00:00:00.000Z
---
<!-- markdownlint-disable-file -->
_TL;DR It’s hard._

We are in the midst of a [data revolution](https://www.astronomer.io/blog/how-to-succeed-in-the-data-revolution). The sheer volume of data being generated daily is [staggering](https://www-01.ibm.com/software/data/bigdata/what-is-big-data.html) and organizations are trying desperately to take advantage of it. However, there are a number of barriers stopping them from being able to successfully gain insights from their data.

**Proliferation of SaaS Tools and Microservices Architecture**

Companies today are trending away from traditional, monolithic applications towards a microservices-oriented architecture. As applications are broken up into smaller microservices, many developers are deciding to pick the best database for the application instead of using a unified storage solution throughout the organization. This is often a [good decision](https://blog.heroku.com/why_microservices_matter), but there can be several databases per application, and applications often don’t share databases anymore. As a result, organizations end up with data silos isolated from each other, and they can’t run any analysis on disjointed data sources.

**A Growing Number of Databases**

There are over 300 databases. With such a vast number of options to store data, organizations looking to merge their data silos into a data warehouse will find the task very challenging. Each database has a unique way to export and import data, so the greater the number of databases, the greater the complexity in moving data between them. This work is not overly difficult but it is certainly tedious and, understandably, IT departments are reluctant to spend time and energy trying to figure it out.

**Companies Have Massive Amounts of Data**

Writing data pipelines that scale is really hard. Just because a data pipeline moves 10,000 rows of data from Mongo to Redshift with no problem does not mean the same thing will happen with 50 million rows (ever seen an ENOMEM error?). There are a lot of&nbsp;considerations to take into account when dealing with large volumes of data.

![1-464650023924.jpg](../assets/1-464650023924.jpg)

I have been working at Astronomer as an integration engineer for a few months now, and I know firsthand how challenging data pipelines can be. I’ve learned a lot on the job and want to give you a peek under the hood of Astronomer at what makes our growing platform unique.

### 1. We break up data pipelines into distinct tasks.

A&nbsp;common data pipeline used by our clients is [Mongo to Redshift](https://www.astronomer.io/blog/syncing-mongodb-collections-with-redshift). Writing one giant pipeline—one that pulls in data from Mongo, transforms it and sends it to Redshift—restricts that pipeline to only being useful to someone who wants to send data from Mongo to Redshift. At Astronomer, we identify the individual parts of a data pipeline and break them up into distinct tasks.

With each task being distinct, we can string together any number of tasks&nbsp;to create workflows from any source to any destination. If a customer wants to move data from Mongo to SQL Server, for example, we don’t have to create a new data pipeline from the ground up. We already have the Mongo and transform tasks ready; we just string them together with the SQL Server destination task and the new pipeline is ready to go, saving time and code duplication.

### 2. We use a workflow management system to coordinate pipelines.

The challenge with this structure is finding the right workflow management system to coordinate the tasks in a data pipeline. We started with the Amazon Simple Workflow Service but recently switched to [Airflow](https://airflow.incubator.apache.org/) backed by [Mesos](https://mesos.apache.org/). An open source solution allows us to deploy our architecture anywhere and not be locked into AWS. (You can read a more in depth analysis of that&nbsp;[here](https://www.astronomer.io/blog/why-we-built-our-data-platform-on-aws-and-why-we-rebuilt-it-with-open-source).)

### 3. We use streams.

As mentioned earlier, a data pipeline that works for 10,000 rows of data will not always work for 50 million rows. The solution is to stream data in from a database and pipe it into the next task in the pipeline, transforming it along the way. Our current data pipelines are written in Node.js, so we use Highland.js, a fantastic library that adds a lot of useful functionality to Node Streams.

Using Highland, we don’t load anything into memory. We stream data into the first task in the data pipeline, use Highland to transform anything we need and format it correctly for the next task and pipe it directly out to the next task, which in turn uses Highland to read the stream, transform it, pipe it out, and so on.

### 4. We use an intermediate file storage system between tasks.

There is nothing more frustrating than when, 30 minutes into a SQL query, your network connection gets interrupted, and you have to start over.

The reality is this can happen at any point during an ETL workflow. If a data pipeline takes an hour to run through 3 tasks, and a network connection error happens during the last task, you just lost an hour of your time.

At Astronomer, we use S3 to store the data in between tasks in a data pipeline. This way, if a task fails during a data pipeline, the pipeline can restart and pick up where it left off using the data in S3 rather than querying the database all over again.

![dataFlowB2x.jpg](../assets/dataFlowB2x.jpg)

Writing scalable data pipelines is obviously a daunting task. But when it’s done right, there’s nothing standing in the way of gaining valuable data insight. Luckily, if you don’t want to do it yourself, there are [companies who specialize in creating data pipeline infrastructure](https://www.astronomer.io).

At Astronomer, we’re building all kinds of new processes for efficiently and securely moving data, and we’re always looking for new and better ones. These lessons&nbsp;have been invaluable to us so far, but check back in six months, because I bet I’ll have learned even more. And if you have any great tips to writing your own data pipelines, we’d love to [hear from you.](mailto:info@astronomer.io)

![desktopplusmobile-1.jpg](../assets/desktopplusmobile-1.jpg)  
Download wallpaper for [desktop](../assets/PipelinesWallpaper2560x1600f.jpg) or [mobile](../assets/PipelinesWallpaper1080x1920f-2.jpg).&nbsp;

