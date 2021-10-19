---
slug: future-of-banking-apache-airflow
title: "The Future of Banking: How Can Apache Airflow Help?"
description: Discover the challenges of the banking industry today, and how
  Apache Airflow can help banks with digital transformation.
heroImagePath: ../assets/coverbanking.png
authors:
  - Ula Rydiger
  - Sundar Bandepalli
date: 2021-09-29T09:26:33.790Z
---
Banks today are under big economic pressure. [According to McKinsey,](https://www.mckinsey.com/industries/financial-services/our-insights/analytics-in-banking-time-to-realize-the-value) 54% of the top 500 institutions worldwide are priced below book value. Because of this trend, the banking industry entered the era of digitalization. However, as FinTech continues to advance, banks need to find new ways to stay in the game.

We speak with Sundar Bandepalli, Field Engineer at Astronomer, about the problems facing the banking industry and how a modern tool like Apache Airflow can help.

## How has the world of banking changed over the years?

The banking industry has been gradually facing more challenges since the first time we’ve heard of FinTech. [In 2013 FinTech companies accounted for only 5% of the US personal loan market. By 2018, they eclipsed banks with 38% and the banks’ shares had fallen from 40% to 28%.](https://www.stlouisfed.org/on-the-economy/2021/april/banks-challenges-fintech-disruption) As the FinTech industry grows, banks try to keep up, looking to digital solutions for answers.

Technology has always been a double-edged sword for the banking industry—thanks to the digitalized environment banks could extend technologies to run their operations, including regulatory compliance (RegTech) and risk management. However, they find it increasingly difficult to compete with tech companies, which are not limited by regulations typical for banks. 

> “The role of data in the banking industry has changed massively over the years. Data powers both AI, machine learning, and robotic process automation. You simply can’t succeed in the market without well-managed data and analytics.” - Daragh Fitzpatrick, consulting partner at [Nousot](https://nousot.com/).

## What has been the biggest challenge for the banking industry?

Apart from staying ahead of the fintech competition by differentiating the service and having to adjust quickly to the ever-changing market, there’s a challenge of data. 

Banks deal with petabytes of information about their customers, however, they may struggle with making the most of that data—to make predictions and provide valuable service. The majority of banks still use legacy tools and services that are hard to scale and maintain. Not to mention different teams using their own tools and datasets, causing [data silos](https://www.astronomer.io/blog/data-silos-what-are-they-how-to-fix-them). 

Additionally, many of the banks cannot benefit from the power of the cloud due to regulatory issues and heavy investments in their own on-premise infrastructure which makes the challenge of modernising their stack even more difficult.



## What should banks do to overcome those challenges?

First of all, they should start migrating their legacy tools to the modern data stack. Also, by creating a centralized framework and automating their processes, they can improve data management and eliminate the silos. This would allow banks to draw better conclusions from their data and make better predictions about their customers. 

Additionally, banks need to remember that digital transformation is not enough—you need DataOps processes in place. DataOps is an agile approach to designing, implementing and maintaining a distributed data architecture that supports a wide range of open source tools and frameworks in production. 

A great example of what can go wrong without DataOps is TSB Bank, which, [according to Delphix,](https://www.delphix.com/blog/banks-need-dataops-to-succeed-digital) “in 2018 achieved infamy for the largest banking systems failure in U.K. history after a planned upgrade left millions of customers unable to log into their accounts.\[..] The crisis persisted for weeks, and at the end of it all, the bank revealed that it had lost 80,000 customers and $431.3 million.\[...] Rushed testing and poor communication were said to be at fault for the botched upgrade.” 

Perhaps with the right data orchestration tool, the TSB Bank could have detected errors easily, automated their pipelines and centralized datasets, which would have eliminated the silos and improved the customer experience. 

## How can Apache Airflow help?

Apache Airflow is an open source, community-supported, Python-based [data orchestrator](https://www.astronomer.io/blog/what-is-data-orchestration) that can be an answer to a lot of problems of the data teams in the banking industry. For example, instead of migrating everything at once to a modern data stack, you can ease the process by combining Airflow with your legacy tools, making them work side by side.

For many banks, keeping their data on-premise is still the only option, as cloud processing might not be available to them due to the heavy-regulated environment. Airlfow's advantage is that you can modernize your data stack without migrating to the cloud.

You and your teams can also use Airflow to develop a centralized data platform or a data mesh that fits your needs—bringing together data, governance rules, and business logic that had previously been scattered throughout different parts of the organization.

When it comes to AI, Airflow can help here too. By nature, working with machine learning models requires automation and orchestration for repeated model training, testing, evaluation, and likely integration with other services to acquire and prepare data. With [Apache Airflow](https://www.astronomer.io/airflow/) you can easily orchestrate each step of your pipeline, integrate with services that clean your data, and store and publish your results using simple Python scripts for “configuration as code”.

And finally, Airflow gives the development teams a standard way to interact with data—adding governance rules, making it clear who owns what data and how to access it. 

## What are the examples of banks currently using Airflow?

<!-- markdown-link-check-disable -->
[Societe Generale](https://www.astronomer.io/blog/data-orchestration-societe-generale) first comes to mind. The French bank uses Airflow for standard ETL and ELT use cases and also to easily interact with their private and public cloud. There’s also [ING,](https://www.ing.com/Home.htm) [Bexs Bank](https://www.bexs.com.br/en), [National Bank of Canada](https://nbc.ca/), [Orange Bank,](https://www.orangebank.fr/) [Paraná Banco](https://paranabanco.com.br/) and [more!](https://github.com/apache/airflow/blob/main/INTHEWILD.md)
<!-- markdown-link-check-enable --> 
\---

Of course, it’s impossible to cover all the challenges the banking industry faces in one article, but fear not- we have excellent experts on board to discuss how Airflow and data orchestration can help. [Get in touch today!](https://www.astronomer.io/get-astronomer)
