---
slug: zapier
title: How Zapier Leverages Airflow with Astronomer
description: Discover the story of our cooperation with Zapier that provides
  seemingly endless options for point-and-click workflow automation.
heroImagePath: ../assets/zapier2.png
authors:
  - Pete DeJoy
date: 2021-06-07T12:42:15.679Z
---
Astronomer product values:



* **Data Engineering productivity** — by separating the client’s data quality workflows from the rest of their ETL scripts.
* **Data Ops productivity** — with smooth upgrades and ongoing support from Astronomer’s Airflow community members.
* **Continuous innovation** — allowing the client to stay on top of Airflow advancements.



The data integration landscape is ever-changing as new tools are introduced to the stack and new APIs are exposed. To serve the evergreen need for custom and easy-to-implement workflows between tools, [Zapier](https://zapier.com/) provides seemingly endless options for point-and-click workflow automation. Having integrated with over 3000 tools, Zapier has reached significant scale and currently has customers running millions of “Zaps”, or workflows, every day. As a result, they have a ton of data generated around their Zaps, meaning they need mature and battle-tested data infrastructure to not only ensure all of their business-critical data is delivered on time in the right format but also lay the groundwork for analytics around how their customers use their product. 

In the open source world, Airflow has emerged as the industry-standard tool for custom data formats and strong analytics infrastructure. As Airflow orchestrates everything from ETL jobs to data quality checks within Zapier, Astronomer is proud to power Zapier’s internal Airflow service. 



## Airflow for ETL

One of the primary reasons for Airflow’s growth in popularity is how smoothly it integrates with other tools.

While creating and maintaining ETL pipelines is one of Airflow’s major strengths, Zapier doesn’t actually do any ETL within Airflow. Instead, they compartmentalize their ETL tools and have Airflow act as the scheduling and orchestration layer. All the heavy ETL processing happens in remote tools like Matillion and Amazon SQS (Simple Queue Service). 



For Zapier, leveraging the combination of the [SQS Airflow Sensor](https://airflow.apache.org/docs/apache-airflow/1.10.12/_api/airflow/contrib/sensors/aws_sqs_sensor/index.html) and the [Airflow REST API \`tasks\` endpoint](https://airflow.apache.org/docs/stable/rest-api-ref.html#get--api-experimental-dags--DAG_ID--tasks--TASK_ID-) gave them the flexibility that they needed to build a robust model that allows for efficient remote ETL execution in Matillion. Because Matillion can smoothly integrate with AWS SQS, Zapier is able to trigger Matillion jobs from Airflow via simple API calls, read job status in Matillion, and pass that job status back to Airflow via a custom SQS sensor that pings the Airflow API. Getting real-time clarity on the status of tasks allows Zapier’s analyst team to focus on building ETL workflows that they need to maintain clean data sets while their data engineering and data operations continually focus on delivering that data on time and reliably. 



## The Airflow Evolution

The Zapier team has been a heavy Airflow user since the early days of the project; they even [came on the Airflow podcast](https://soundcloud.com/the-airflow-podcast/use-cases) to dig into their initial use case way before they became Astronomer customers. As the demand for data grew internally, the use of Airflow followed the same trajectory. Soon enough, Airflow usage evolved and it began to switch from a tool to a business-critical service.



As Zapier scaled their Airflow use, they reached new limits regarding how they were running Airflow that were not imposed by the core Airflow layer. Their scale began to invoke some key questions:



* How would their docker containers authenticate to AWS? 
* How to manage things like upgrading Airflow for mission-critical features? 
* How would they reliably scale multiple environments? 



Spending time building out opinions, protocols, and internal tools to answer these questions limited their ability to get the most out of  Airflow.

## Zapier on Astronomer

Living entirely in Zapier’s AWS environment, Astronomer was able to plug right into their larger data architecture as a feature-rich “Airflow as a service” solution. By allowing for separate & isolated Airflow environments, providing a convenient CLI for deployments, and dramatically ameliorating the management burden on the Data Operations team, Astronomer enabled Zapier to more effectively and efficiently leverage Airflow.

Since Astronomer ships with the ability to easily create Airflow instances, Zapier was able to separate its data quality workflows from the rest of its ETL scripts. Separating different types of jobs into different Airflow deployments meant that Zapier could get more value out of Airflow: they could optimize resources for specific job types, as well as iterate more quickly on their workflows. Additionally, having separate environments meant that Zapier could scale these environments independently of one another, which removed a blocker to efficiently scale up with Airflow.

Astronomer was also useful for Zapier’s Data Ops productivity. With Astronomer, there was no need to continuously add new features to the surrounding Airflow tooling stack. Upgrades to the latest version of Airflow were much smoother: there was no need to build new images and test new versions. Since Astronomer employs a few of Airflow’s key committers on its team, there was also a direct line by which Zapier could get insight into—and influence—core Airflow development.

**\
Analytical and data-centric workloads are always batch-related which makes Airflow an amazing go-to tool for data orchestration. And, thanks to the [Astronomer Platform,](https://www.astronomer.io/docs/enterprise) you don't have to focus on engineering—just take care of your data!**
