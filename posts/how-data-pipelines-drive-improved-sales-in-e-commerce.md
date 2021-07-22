---
slug: data-pipelines-in-ecommerce
title: How Data Pipelines Drive Improved Sales in E-commerce
description: Our Field CTO, Viraj Parekh, shares insights on how sales and
  marketing operations in e-commerce can benefit from running functional data
  pipelines.
heroImagePath: ../assets/coverecom.png
authors:
  - Ula Rydiger
  - Viraj Parekh
date: 2021-07-22T08:05:09.795Z
---
Growth doesn’t come without its challenges and for the e-commerce industry, there’s no exception. Big competition worldwide, costs of advertising, shipping, low margins… However, nowadays it seems that the biggest challenge for the e-commerce industry is to be able to make sense of data — to understand their customers better and provide better service. 

Today, we talk to [Viraj Parekh](mailto:viraj@astronomer.io), Field CTO at Astronomer, about how functional data pipelines can drive improved sales and marketing in e-commerce. 

## How has the role of data in e-commerce changed?

Due to COVID-19 e-commerce has gotten more competitive than it was even a year ago. Even companies Nike and Adidas have really accelerated their shipping. This is why data became table stakes. You can't do anything unless you have the right type of consumer data about how people are using your product, how your marketing is going— basically everything that's involved in running an e-commerce company.



[\>  It is estimated that 95% of purchases will be made online by 2040.](https://www.nasdaq.com/articles/uk-online-shopping-and-e-commerce-statistics-2017-2017-03-14)



## What has been the biggest challenge in terms of data in e-commerce so far?

I think the challenges depend on your company size. The challenge for someone like Nike is different than for someone who's running a three-person B2C e-commerce company. I'd say when you get to the point where you have a data team and you have a specific data function within your e-commerce organization, the biggest challenge is data silos. Every person in your organization should be able to get the data they need easily. And this takes a lot of infrastructure.



## And what would be the main challenge in terms of security and managing data?

With security, data privacy becomes a bigger concern. Especially, if you have an international business where there are different laws on how you can predict certain data between different regions that you sell to. When some regulations change you need to have the backload to adjust to that change. Because we live in an ever-changing world, a flexible data infrastructure can be crucial to your business. 

[\> E-commerce is expected to claim 17% of the industry by the end of 2022. ](https://www.netsolutions.com/insights/ecommerce-business-challenges-and-solutions/)



## How can functional data pipelines help with the challenges you mentioned?

Data pipelines help users with standard information. There’s table stakes stuff where you can check what your sales were yesterday, what are your basic metrics for the day, etc. Data pipelines empower those users who are looking for baseline insights into the business.

Once you get past the basics, they can be used to give you a competitive advantage. Data pipelines expand into machine learning, AI, and other sorts of business intelligence around your consumers to try and predict the future. In order to continuously get and elongate the value out of models and insights you need a functional data pipeline.



## What’s the most popular type of data pipelines? 

I'd say probably the most popular one is the ETL pipeline where you're taking data, changing it and then moving it back into your data warehouse. Nowadays, with modern tools like Snowflake and BigQuery you even get the ELT pipeline, where the transform is happening in your data warehouse. 

The ETL pipelines are powering many parts of your business, kind of working behind the scenes. Let's say I'm running a machine learning model to try and figure out what my pricing or ad model should be. To run those types of pipelines, you need your data to be there—you can't just run machine learning without it. Once you've kind of figured out the ETL piece, you can start working on more interesting pipelines that are a little more specific to your use case, be that machine learning or monitoring etc.



## How can data pipelines improve sales and marketing initiatives in e-commerce?

I think it's about giving visibility to what's working and what isn't; where are you getting a positive ROI and where are you getting a negative ROI? In marketing and sales the right answer on Monday could be the wrong answer on Monday of next year. So it's really about giving you visibility and insights across all of the different data sources you’re using, for example Facebook ads, Google Ads etc. Data pipelines allow you to try a bunch of different things to see what works and you need to track those experiments incrementally and systematically in order to keep iterating on them.

[\>  57% of stores call data the significant driver of their marketing strategy.](https://blog.adverity.com/modern-ecommerce-businesses-growing-data)



## What do clients usually say are the biggest risks for business when they work with data pipelines?

Firstly, the data outage, when their data pipeline doesn’t run on time. Situations where the website or an app is still functioning, but no data is being collected or leads analyzed can really hurt a business. Similarly, if users can't get the data they need because of the ETL pipelines, the entire organization will be affected.

Secondly, and maybe even worse, is when their data pipelines don’t give accurate information. The process of finding out that business decisions were made off of bad metrics or incorrect assumptions can be long and expensive. 

## What tools do you recommend to tackle those challenges?  

If you’re leading a data team, you want to make sure your developers are being productive with their tools. I believe that if you give your developers the power to do great things, they’ll do great things. 

Nowadays, maintaining a flexible and modern data stack is key. Modern, because the new tools solve the mistakes of the old tools. Flexible, because there's always going to be a new, better way of doing something, and you need to be able to choose the best tool for the job. For example, Redshift used to be the go-to database and now people are switching to Snowflake. Or maybe you’ve decided to use Databricks instead of EMR. There’s always going to be a lot of cool tools in the market and you need to have an option to choose them.

[\> Studies show that 99.5% of all collected data never gets used or analyzed, which is a huge waste of opportunity for business.](https://hostingtribunal.com/blog/big-data-stats/#gref)

## How could an e-commerce business benefit from implementing Airflow?   

A client of ours, a global retail company, was looking for a standardization layer around how users moved data across the business. Every team was doing things differently, and to make matters even more complex, the company was in the middle of a few large cloud migration projects. Apache Airflow and Astronomer fit right in as a cloud native way that met the client where they were at, and was both flexible and modern enough to take them to where they wanted to go.

Giving your data engineers the ability to customize how your data pipelines run and making them run on time can't be understated. Apache Airflow allows you to run a pipeline from source A to source B easily and lets you move faster as your developers work modularly and plugs directly into whatever tooling they are using.