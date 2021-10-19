---
slug: reverse-etl
title: What is Reverse ETL and How Can It Improve Data Flow?
description: Find out what is reverse ETL and how to use Census and Airflow
  together to improve data orchestration.
heroImagePath: ../assets/Frame71.png
authors:
  - Sarah Krasnik
date: 2021-10-19T13:03:05.560Z
---
Analytics teams strive to create clean, aggregated, and tested data products. When they leverage modern data tooling, these teams can confidently and reliably expose data in numerous different ways to business users.

At Perpay, we aim to enable members of the organization to make data-driven decisions. We believe people are most effective when first-party data accompanies information found in tools the particular business user uses most. For our marketing team, that tool is [Iterable](https://iterable.com/): a cross-channel marketing platform optimizing for customer experience.

In this article, I’ll break down how you too can use Iterable to upgrade your customer experience thanks to two excellent tools: [Census](https://www.getcensus.com/) (my reverse ETL of choice) and the [Astronomer Registry](https://registry.astronomer.io/).

# ETL vs. reverse ETL: What’s the difference? 

I’ll defer to the experts over at Census for the [official reverse ETL definition](https://blog.getcensus.com/what-is-reverse-etl/): 

Reverse ETL syncs data from a system of records like a warehouse to a system of actions like CRM, MAP, and other SaaS apps to operationalize data. 

If you’re familiar with “traditional” ETL, this definition probably isn’t too surprising (many folks early on thought of reverse ETL as reverse Fivetran). 

However, if you’re not as familiar with ETL, let’s take a second to break the two apart. ETL stands for extract, transform, load. It’s the process of taking data from third-party systems and loading it into a data warehouse, the centralized repository of a company's information. ETL is not a new concept, as it started gaining popularity in the 1970s, and more recently, has taken the form of ELT (extract and load, then transform).

Reverse ETL is the exact opposite - a process through which cleaned and transformed data moves from a data warehouse to a third-party tool. This tool could be Salesforce for a sales team, Shopify for an e-commerce team, Airtable for operational use, Iterable for marketing, you name it.

Hold on - didn't you just put all of your info into one location? Migrating it out of the warehouse seems backward. The paradox is that your data warehouse, which your organization adopted to create a single source of truth of information and metrics, doesn’t make the data as operational as it could be. And the best way to get the data you worked so hard to clean and aggregate to drive your everyday operations is by reversing ETL to close the loop between analysis and action.

I’ll walk through how and why Perpay connects the dots all the way from the data warehouse to the marketing user in an entirely automated data pipeline (hint: the answer is to operationalize all our data).

## Reverse ETL operationalizes analytics

Most organizations have gotten on the BI train by adopting Looker, Power BI, Mode, Superset, or one of the many other tools on the market today. BI delivers insights in ready-to-go dashboards to engage the less engaged and allows many team members to create visualizations with little or no code.

However, visualizations are only as good as the actions they enable when people look at the dashboards. Thus, human consumption of the BI tool inherently limits automation, and that’s where reverse ETL comes in.

Reverse ETL makes analytics operational by setting data-driven business stakeholders up for success, giving them the tools needed to automate as many workflows as possible and effectively freeing data insights from the confines of dashboards. 

Take your marketing team, for example. They probably look at a dashboard to get a list of users newly eligible for a particular product pretty often. This list, to be actionable, must be uploaded to a tool like Iterable, and the eligibility email campaign must be triggered manually. What if the person who usually uploads the list is on vacation, or just forgets? Why should your product suffer from a single person taking time off?

The data in the list changes, but the process itself doesn’t change. If this screams automation potential, then you’re right! This upload is reverse ETL, just a manual flavor of it. Tools like Census aim to automate this particular step, allowing the underlying data to dictate the content of the list dynamically as it changes while keeping the process constant.

However, there’s another piece to this puzzle. Even if the process itself is automated, a human may still need to trigger it. That’s where automatic data orchestration comes in.  

## What is data orchestration?

A reverse ETL process is usually one among many different jobs that need to happen on a schedule, whether hourly, daily, or weekly. As a result, many organizations, including Perpay, have adopted a workflow orchestrator, namely Airflow, to trigger scheduled jobs automatically and manage dependencies between them.

Using Airflow, we’ve unlocked the heart of the batch aspect of our system: running jobs with dependent tasks together on a schedule automatically. These tasks could include running SQL queries, retraining ML models, ETLs, and reverse ETLs. They don’t run in a vacuum, as each task is coded to depend only on the upstream tasks that influence the success of the task in question.

Airflow enables creating dependencies between the queries that update the underlying data pushed to third-party tools via reverse ETL. The power in automating reverse ETL is the ability to update third-party tools as soon as the underlying data is updated to maximize freshness.

## How Reverse ETL and data orchestration bring data to the point of action

Leveraging data orchestration tooling to trigger reverse ETL automatically takes human error out of the picture. Sounds great, but what advantages does that really have?

Security at scale. People make mistakes, especially when doing something manual like uploading a CSV. Humans can accidentally upload the wrong CSV, containing sensitive information not meant for the destination it’s uploaded into. Additionally, the CSV lives on a laptop, which creates a security risk for the organization if misplaced.

Productivity at scale. Manually uploading a CSV is, well, incredibly manual and repetitive. Humans are uniquely able to take both cognition and broader business understanding and apply it to particular problems. Computers and code, on the other hand, are much more efficient at calculated and repetitive tasks. An employee’s time is much more valuable when spent on hard-to-automate tasks.

Reliability at scale. Reliability means people can go on vacation in peace, and the business goes on. A single person or group of people doesn’t bottleneck data freshness.

The result: global scalability. There are only so many CSVs someone can upload per day, either limited by the number of hours in a workday or their emotional capacity to do an extraordinarily repetitive task. This simply isn’t scalable. With Census, companies don’t have to worry about strict API rate limits, changing third-party endpoints, and all the complexity that comes with integrating a third-party API. Automatically orchestrating reverse ETL enables your business to scale with the complexity of challenges that arise, without human error.

Let analytics teams focus on what makes them most useful to an organization: tying data to business value. In parallel, give business users the data they need in the business apps they’re most used to using to drive action and maximize automation.

## Reverse ETL and Airflow: Integrating for success

At Perpay, we’re laser-focused on providing more accessibility for everyday purchases for our users while building credit along the way. Marketing is a tool in our toolbox we use to give our customers the best experience possible within our product.

Upstream, we have ETLs loading data into our warehouse and data transformations running on top of that.

Downstream, sending data directly to Iterable lets marketing build workflows triggered automatically with dynamic adjustment based on the information available. While you can take the more DIY road, as we have at Perpay with our stack, there are resources and tools available to help you get up and running faster that are worth exploring. 

For example, if you’re working with your marketing team to improve cross-channel marketing efforts and customer experience, your less-DIY stack may look like using Fivetran for ETL to enable a single-source-of-truth data warehouse, with dbt building data models on top of all that data.

You can then use the Astronomer Registry--an awesome library of building blocks for Apache Airflow. The Registry lets you grab the providers for each of the tools you use to get up and running even faster, including the official [Census Provider](https://registry.astronomer.io/providers/census?type=Operators), so you can trigger the reverse ETL task directly after the data update task to ensure freshness. 

![](https://lh4.googleusercontent.com/545mtGtJhhAqFn04Fd8xe63iVe7sW-ZIWj7q2M1XW9q5u7j9tOW0UP00Zq9vnYVaWguEwJQBWpfVw2Az6u0bmmMvPCUKm-PPVpejRZtec0b7dZh-y6IeF27XsdSKUIlF26bfCWSH=s1600)

Additionally, the Astronomer Registry contains a rich library of certified and contextual DAGs that make it easy to see how different Airflow Providers can be stitched together as part of a full use case. A use case like the one above can be seen on the Astronomer Registry [here](https://registry.astronomer.io/dags/census-sync-dw-to-marketing). In particular, the \`CensusOperator\` and \`CensusSensor\` are used to trigger a Census sync and monitor its status as an Airflow task.

```
# This syncs the ``marketing.campaigns.customers_for_reengagement`` table data to the marketing platform.

    trigger_census_sync_to_marketing_platform = CensusOperator(

        task_id="trigger_census_sync_to_marketing_platform",

        sync_id=8290,

    )



# Checks the status of the Census sync run for completion every 30 seconds.  This operator uses the

# ``sync_run_id`` returned from the ``CensusOperator`` task as an XComArg.

    wait_for_census_sync = CensusSensor(

        task_id="wait_for_census_sync",

        sync_run_id=trigger_census_sync_to_marketing_platform.output,

        poke_interval=30,

    )
```

With that, data teams can focus on what data to send and just choosing how often, while not being stuck in the weeds of figuring out how to send it through an in-house integration. With automated orchestration, data in third party tools can be fresh as a daisy.

## Next steps

Speaking from personal experience, you don’t want to miss the opportunity to scale your business with Airflow and reverse ETL. To get started, sign up for demos of [Astronomer](https://www.astronomer.io/get-astronomer/) and [Census](https://www.getcensus.com/demo).

Automating workflows will allow your employees to sleep better and have more time to truly deliver value.

**\
Have questions about my experience with these tools or data stacks in general? I’m happy to chat on [Twitter](https://twitter.com/sarahmk125) or [LinkedIn](https://www.linkedin.com/in/sarah-krasnik/).**

**\----**

**About the author:** Sarah Krasnik leads data engineering at Perpay, and is an active writer and member of the data community. She has a passion for building and scaling modern data stacks and constantly thinking about what’s next in the data tooling world.