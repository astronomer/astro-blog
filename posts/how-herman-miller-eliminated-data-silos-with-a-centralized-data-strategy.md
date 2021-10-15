---
slug: herman-miller-case-study
title: How Herman Miller Eliminated Data Silos With a Centralized Data Strategy
description: See how Herman Miller solved the issue of disparate data sources
  and inefficient data alerting and monitoring with Astronomer.
heroImagePath: ../assets/hmcover.png
authors:
  - Ula Rydiger
date: 2021-07-09T08:17:55.465Z
---
<!-- markdownlint-disable MD033 MD045 -->

<iframe src="https://fast.wistia.net/embed/iframe/4o2f8gf1xm" title="HermanMiller Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="450"></iframe>


**Astronomer product values:**

* **DataOps productivity** — eliminating data silos through data centralization and automation.
* **Business impact** — helping the client to deliver the right data, to the right team, at the right time.
* **Day-2 operations** — adding scalability, diagnostics, automation, and observability.
* **Continuous innovation** — allowing the client to stay on top of Apache Airflow advancements.

Herman Miller is a global company that places great importance on design, the environment, community service, and the health and well-being of its customers and employees. Herman Miller puts furniture in a bigger context of social well-being and sustainable living. Its mission is to "leverage the power of design to improve people's lives". 

Data & Analytics is a new organization at Herman Miller, responsible for managing the data needed to drive analytics and insights in the company. In March of 2020 they kicked off planning sessions focused on developing a vision and roadmap for how they want to manage data in the organization. The development of a new modern Data Platform was key to their success. Using tools like Apache Airflow, Astronomer and Snowflake as part of the data platform they intended to provide value to the business and its employees. They have been continuing to build the data environment prioritizing areas of the business where they can have the largest impact.

> “My favorite thing about data and analytics is that it allows you to have a direct impact on the business. I love looking at data and making informed decisions that can be tied to any action and once implemented leads to change. It also allows us to help people in the organization and improve and streamline the way they work— from very manual and tedious to automated and scalable,” noted Mark Gergess, VP of Data & Analytics at Herman Miller. 

## Challenge

Herman Miller was facing two main issues:

1. **Disparate data sources** — with core information about their customer, products and sales spread across multiple systems, bringing the data together and normalizing it to perform analysis was a very manual and difficult task for team members. Employees would have to run multiple reports, download them to Excel, and then figure out the business logic across the data sets to deliver a global report. Because of the differences in product, time zones, standards across the globe, figuring out the common language for that data involved many meetings with international teams and took a lot of time. 
2. **Data Quality, Alerting & Monitoring** — the client’s existing data environments didn’t allow them to be proactive in communicating and resolving data issues. Most of the time the business side of Herman Miller would notify the Data & Analytics team of missing or bad data,  or when they failed to receive an automated report. Investigating, finding and fixing these issues would take hours.

## Why Airflow

Before Airflow, [Herman Miller](https://www.hermanmiller.com/) had been using a few similar ETL tools. However, they had an issue with problem detection. Investigation into problems would take half a day, as the pipelines are written in a complex way.

> “We need to know about the problem as early as possible. We would know there was an issue, but to pinpoint it would require a few-hour investigation,” states Mark.

They were looking for a solution that would offer data accuracy, strong alerting and monitoring, as well as easy developing and deploying of CI/CD.

In the development of their data platform, they’ve partnered with Raybeam — a company specializing in data and analytics. Raybeam, being a big fan of Astronomer and Airflow, recommended the tool to Herman Miller.

> “When it comes to our data platform, Herman Miller wants to be the best. We try to have a strong relationship with organizations we’re cooperating with, like Raybeam, Astronomer, and Snowflake,” says Mark, “It’s more than just using a tool, it’s about developing a true business partnership.” 

After comparing Airflow with other tools it turned out that Airflow ticked all the boxes from data quality and a data monitoring perspective. The decision was a no-brainer.

## Snowflake partnership

Before Mark joined the team, Herman Miller had already been using—and loving—[Snowflake](https://www.snowflake.com/). The data warehousing tool fits all of their needs perfectly: speed, zero to no maintenance required, capabilities to support data privacy etc. 

Snowflake Data Marketplace is another feature Herman Miller is excited about. It allows them to easily access external [datasets](https://www.astronomer.io/blog/zapier) and use them to enrich Herman Miller data to provide more informative insights. For example, looking at the Starbucks foot traffic in large cities in North America can inform them on the return-to-work behavior in certain markets. They can use that as an input to understand how it correlates to their B2B and B2C business performance and inform their partners of what is happening in a proactive manner.

> “We are at the very beginning of our journey of data and analytics but to be kicking things off with these strong partners, I think it’s really helping us have a very solid foundation,” says Mark.

## Solution

The design of corporate systems is often a copy of the communication structure within a company. Herman Miller had to break that pattern to develop a data platform that would champion the “One Herman Miller” strategy. In partnership with [Raybeam,](https://www.raybeam.com/) Snowflake and Astronomer, Herman Miller brought together data, governance rules and business logic that had previously been scattered throughout different parts of the organization.

Work that used to take months can now be done in minutes. Analysts can quickly pull up a global view of product sales across brands and locations. Marketing data can be stitched together across partners to develop a true, customer-first approach to communication. The editorial team is no longer held back by the data science team.  

While ease of use is the most visible [benefit of this centralized platform](https://www.astronomer.io/blog/retail-case-study), the underlying process changes are what will continue to drive benefits far into the future. DataOps at Herman Miller means deploying high-quality code quickly and monitoring that code closely. The process is more similar to agile software development than it is to older DBA-style workflows. The move away from IT-driven processes to more modern DataOps patterns ensures that the data team can adapt quickly while keeping up the quick pace of development required by a blue chip company like Herman Miller.

![](https://lh3.googleusercontent.com/3xQbwR4UqsJY74_eGe8DfVEVTxq1P9U7xzLNINxV3FkzFDwELin5i4fY-Li96oiPX2Z3Fg2r5HtnJbayypmSOHNbewF77EgUB_LNzoU2TlfFjhNkEPmlrsIDK9d98rxetwnTUv5F)Finally, the more team-oriented approach eliminates silos of information. Historically, each data source or transformation would be understood mainly by the person who built it. The current process ensures more than one person will see, review and collaborate on code before it makes it into production. No more useless “knowledge transfer” sessions when someone leaves for a holiday. The team is built to operate truly as a team.

> “We are not focusing on the technology anymore—Airflow has allowed us to focus on using the data and making the most of it,” explains Mark. “The platform we’ve created in partnership with Raybeam, Snowflake, and Astronomer is best-in-class. I would definitely recommend using Airflow—all the best tech companies in the market do.”

## Why Astronomer

Before Astronomer, Mark’s team would have to wait up to 3 weeks to get the data they needed from the data engineering team. Now, with Apache Airflow and Astronomer, they can achieve a lot in a short amount of time and the platform allows them to make sure they are bringing high-quality data. 

> “I love how my data science team has become self-sufficient and effective. Airflow made it very easy for them to get the data they need and manage it in a way that allows them to do their job quickly and efficiently” — Mark.

As this is their first data platform, there’s still a lot of learning involved. Luckily, Apache Airflow allows them to quickly adjust to changes.

> “Without Astronomer, there would have been a lot more tweaking and adjusting to achieve the result we want. Our work as data scientists would have been a lot slower and more difficult,” says Mark.
>
> "Astronomer has ticked a lot of boxes for us,” Mark continues, “it’s easy to use, plus there’s no silos of information with other platforms and tools. I don’t think there’s any company I wouldn’t recommend Astronomer to."

The Data & Analytics team has ambitious plans for the future: they want the whole company to be introduced to the modern way of managing data—making sure they are building governance rules and business processes in their workflows that are beneficial to them. The goal is to give Herman Miller business teams more responsibility and ownership by keeping them connected to the data. 

If you’re struggling to harness the power of data and looking into data centralization to make more informed business decisions, [get in touch with our Airflow experts today!](https://www.astronomer.io/get-astronomer)
