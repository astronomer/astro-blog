---
slug: "Datasembly: From One Airflow Instance to Multiple Deployments with Astronomer"
title: "Datasembly: From One Airflow Instance to Multiple Deployments with Astronomer"
description: Learn how Datasembly went from using native Airflow to cooperating
  with Astronomer.
heroImagePath: ../assets/datasembly.png
authors:
  - Ula Rydiger
date: 2021-11-02T09:44:27.909Z
---
Datasembly empowers CPGs and retailers with unparalleled, real-time product data from every store. Their data collection technology allows users to obtain (and share) hyperlocal pricing, promotions, and assortment insights. The company provides an intuitive and comprehensive platform to give users market pricing insights to gain the information needed to make real-life business decisions quicker, smarter, and more efficiently.

> “We help grocery retailers and manufacturers understand what’s happening on the shelf in the grocery stores. We bring price transparency to the grocery industry.” - Dan Gallagher, Founder and CTO of Datasembly.

Datasembly’s goal is to build out their capabilities around intelligence. To accomplish this, they created a Data Science team, meant to help them get more extensive predictions, such as: understanding which products are the same, which products are equivalent to each other, when the prices are going to change, which products appear in stores depending on the seasons, etc. 

## The challenge: one point of failure with an Airflow instance

In the very beginning, Datasembly struggled with keeping their Cron configurations, Bash and Python scripts organized and their tasks running. For this reason, the company implemented and installed native Apache Airflow in their Virtual Machine, hoping it would solve the problem. As time went by, engineers started relying on Airflow more and more, seeing it as a critical piece of the architecture. 

However, the company was using only one Airflow instance for many production tasks, and so it was also a single point of failure and was becoming a liability. Eventually, Datasembly’s engineers were afraid to change or even touch anything in Airflow—out of fear of bringing the whole thing down. 

For this reason, Datasembly engineers started looking into how they could set up their own Airflow deployment that had higher reliability and was safer and more comfortable for them to use. It quickly became apparent that setting up and managing such a deployment would involve a lot of work and resources. This challenge brought them to Astronomer —a managed Airflow service that ensures easy and fast deployment of Airflow on any cloud or on-premise. “The tool had all the needed features, so we thought we should test it out”, says Dan.

## The solution and cooperation with Astronomer

Immediately at the POC stage of the project, the Datasembly team felt huge support from the Astronomer team. 

> “Astronomer engineers were extremely helpful and responsive,” says Dan, “They were always available to answer our questions. Our team felt very comfortable reaching directly to them, which is quite uncommon when working with vendors. It speaks to the partnership attitude that Astronomer has.”

The POC was all about spinning up a Kubernetes cluster in Google Cloud, seeing where the components were running, understanding what the deployment cycle looked like, and whether the Datasembly team could hook it from their CI/CD pipelines. After that, the client moved the jobs over and checked if they ran correctly, ensuring that their Airflow executors work with Astronomer.

Now, with the full deployment of Astronomer, Datasembly can use CI/CD to easily hook into the service. The engineers finally feel comfortable using Apache Airflow, and as they enjoy it, it helps the company extend their Airflow and Astronomer usage. 

> “Astronomer allows us to perform unit tests, but also deep integration tests, as we're experimenting with spinning up an Astronomer cluster from CI/CD to run jobs within a sandbox test environment.”

Datasembly is also building out a new export/delivery mechanism for data integration with their customers. A lot of the logic for it is going into Airflow, as the team is hooking directly into the scheduling components, the executors for running queries for customers, and the Dataproc executor for Google Cloud so they can run Spark jobs. Astronomer allows them to bring all these pieces together and build their product directly on top of it.

> “I don’t think we could have achieved so much with our old Airflow instance. It would have taken a lot of time and been very dangerous because of one point of failure.”

## The future - pushing the company towards better processes and documentation

> "With Astronomer, we have 20% more commits a week to code, compared to when we were using native Airflow, and we haven't even moved all of our jobs yet."

To sum up, thanks to Astronomer, Datasembly has multiple deployments for development and production, whereas before they had only one. Having separate environments has been helpful for ensuring development changes don't affect production, especially when the client is integrating with the Scheduler and Airflow operators. Without Astronomer, Datasembly wouldn’t have built their entire data delivery system on top of only Apache Airflow. Now they can integrate with Airflow more deeply, take advantage of its features, and experiment with running full Astronomer clusters from within CI/CD to testing. 

> “My favorite thing about Airflow is flexibility and scheduling—being able to write Python and hook it in the scheduling logic, having a lot of control over how DAGs run and how tasks fit together.“ 

Now that Datasembly engineers can enjoy their work and deliver tasks faster, the company wants to focus on creating more processes and better Airflow documentation that would provide clarity in the everyday tasks. “Astronomer plays a crucial role in that process as it allows us to put the documentation of our jobs directly into Airflow DAGs and into our Astronomer repository.”

> “We’d recommend Astronomer to anyone who’s running into issues trying to build a tower on top of other technologies that is becoming less and less stable”, says Dan, “If you’re working on putting the scheduling logic in your application it might be time to take a step back and look into a solution like Astronomer.”

\---

Want to improve your Apache Airflow experience? G[et in touch with the Astronomer experts!](https://www.astronomer.io/get-astronomer)