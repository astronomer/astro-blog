---
slug: data-silos-what-are-they-how-to-fix-them
title: "Data Silos: What Are They and How to Fix Them?"
description: "Everything you need to know about data silos—how do they influence
  your business, where do they come from, and how to fix them. "
heroImagePath: ../assets/datasilos.png
authors:
  - Ula Rydiger
date: 2021-08-24T08:56:55.250Z
---
Data silo is a repository of fixed data that remains under the control of one department and is isolated from the rest of the organization. They tend to happen when a team creates a solution that serves a single purpose, or a group of purposes related to a single topic, that is not connected with other parts of the company — for example, a database of marketing leads that is not linked to the central customer table in the data warehouse.

If data silos are not solved in time, at best you’re not getting a full picture— you end up with data that’s not as valuable as it could be because it’s not accessible to other teams and integrated with other data or tools in the organization. For example, if you combine the data from your sales and customer support teams, you might learn about reasons for customer churn or determine other client activities that can potentially help your business.

At worst? You end up with lower data integrity (as you deal with multiple copies of databases that serve overlapping purposes), compromised data security, and decrease in developer productivity. 

One answer to data silos could be [data centralization](https://www.astronomer.io/blog/herman-miller-case-study)—the concept that has long been the holy grail of data teams. A centralized database, connecting different solutions, tools, and layers of the organization, maintained and managed in one place sounds very appealing to a lot of organizations. 



However, these days experts are beginning to question the goals and the feasibility of data centralization, observing that it has proven elusive for most companies, and even seeing it as a rather old-fashioned approach to managing data, because:

* a well-maintained, centralized data warehouse is very complex and hard to achieve,
* it leads to big monolithic solutions, which end up limiting teams’ workflow,
* it may lead to a hyper-specialized silo.

Experts point to the data mesh as a far more beneficial and practical approach to designing and developing data architectures. It’s a term coined by ThoughtWorks, and focuses on having multiple data warehouses across an organization that are connected and work together. 

In this article, we dive deep into what data silos are, what causes them, and why they are bad for your business. We also explain the benefits of data meshes in more detail and show how Apache Airflow fits into the picture. 



## What causes data silos in the organization

First, in order to solve the issue of data silos, you need to understand what causes them. Here we’ve gathered 4 most common reasons for data silos: 



1. Overloaded centralized data team 

Making things work takes time. If your centralized data team is busy, they may not have the time to respond to every new request for data. Other team members may have data they find valuable that needs to be cleansed and rationalized, and they might not want to (or be able to) wait for this data to be added to the ETL and warehouse procedures that are in place. So they start figuring it out by themselves. As you probably have highly skilled and talented people on board, they will come up with a reasonable solution. However, it would be a stand-alone solution that’s not integrated with the rest of the tools and databases in the organization. Without a wider perspective and big systemic thinking, you end up with data silos. 



2. Various, not connected databases

Different databases tend to have different standards, and the data they have in common may not match exactly. Integrating all these sources of data can be overwhelming. The more not connected databases you have, the harder it gets to catalog data, keep them updated, and eventually keep track of what's true. 

3. Old or wrong tools for collecting and analyzing data

An Excel file is not a good place to store and organize your data. It might seem obvious, but it’s a more common problem than you may think. Additionally, some companies might be using legacy tools that don’t meet all of their needs. To make your business scalable, you need to be able to manage your data in an automated, efficient way, relying on modern tools for data orchestration. 



4. Inefficient communication and company culture 

Coming back to the teams working on their own solutions...it’s not their fault. If there’s a lack of communication among management, team members might not even know about the centralized tools that exist in the company that they should be using. A perfect example of when an information silo causes a data silo. 



## Why data silos are bad for your business

We all know that data silos are bad for business but do you know how exactly they influence your organization? Of course, the negative effects of data silos can differ from company to company, but in this article, we’ve listed the most common ones.



1. Lower data integrity 

With data silos, you end up with multiple copies of databases that serve overlapping purposes. Duplicated data lead to missed opportunities for drawing better, more informed conclusions. In other words, it makes it hard to trust your data.

> “With data silos everyone has their own ground truth about which data is true and which isn’t. Instead of focusing on the insights you might be getting from that data, you end up wasting a lot of energy and time.” - Roger Magoulas, Senior Director Data Strategy at Astronomer



2. Compromised data security 

If you keep your data in an Excel file, or rely on disparate data sources, you can’t properly invest in different layers of security. Businesses that are unable to ensure full data security struggle to maintain trust with their clients and survive in the competitive market. 



3. Lower team productivity

Data silos lead to miscommunication and harder cooperation between teams. Instead of focusing on analyzing data, drawing informed conclusions and making the business grow—your engineers waste their time on trying to figure out which data is true, how to find a common language between them, and why they’re missing some piece of information.

> “Because of the differences in product, time zones, standards across the globe, figuring out the common language for the data involved many meetings with international teams and took a lot of time.” - Mark Gergess, VP of Data & Analytics at Herman Miller



## Data Centralization or Data Mesh? How to fix data silos



> “The richer the data the better chance you have in getting nuanced insights into what’s going on in your organization.“ - Roger Magoulas, Senior Director Data Strategy at Astronomer

So far, the most popular answer to fixing data silos has been data centralization. And to no surprise: the idea of one centralized database, connecting different solutions, tools, and layers of the organization, maintained and managed in one place sounds very appealing and can potentially bring a lot of benefits, like:



* Ease of use for developers
* Easier and better reporting
* Unification of data available across different teams in the organization
* More efficient data management
* Better cooperation between teams
* More security



However, these days experts such as [Zhamak Dehghani, Director of Technology at ThoughtWorks](https://www.linkedin.com/in/zhamak-dehghani/), dig deeper into data centralization, noticing its challenges, seeing it as a bit old-fashioned approach to managing data. 

Why?

First, a well-maintained, centralized data warehouse is very complex and hard to achieve. “We have thought that for data to be useful it has to be centralized in one place, “ [says Zhamak in her Kafka Summit talk](https://www.youtube.com/watch?v=QF41q10NSAs), “This approach has led to big monolithic solutions.” 

As teams end up being limited by those monolithic solutions, they try to break them into smaller, integrated parts, usually around technical modes (e.g. ingest, process, serve). Doing that decomposes your teams around the tasks and not use cases or features. This is bad news, as use cases and features are not usually nicely divided within such neat boxes—more often than not, they are intersected with each other.

Secondly, centralized data platforms and monolithic systems cause a hyper-specialized silo. It happens when an organization has hyper-specialized data teams building solutions and end up being stuck in the middle of the people who are the point of origin for data and people who need that data. 

Not to mention, a company that acquires another company also acquires their databases and systems. Integrating it all into one centralized database usually takes years.

A far more realistic, modern and beneficial approach is a so-called data mesh— a term coined by experts at ThoughtWorks, describing an exciting new way of designing and developing data architectures. It focuses on having multiple data warehouses across an organization that are connected and work together. The idea is that you still have centralized governance and standards but also have multiple centers networked together with centrally managed pipelines.

You can achieve that easily with Apache Airflow on Astronomer.

> “When you integrate data sets together, you get a richer view of what’s possible, what opportunities you’re missing and what’s going on in the organization as a whole.” — Steven Hillion, Head of Data at Astronomer.

## How Apache Airflow and Astronomer can help



Airflow on Astronomer is a framework for data orchestration, a network of interconnected data pipelines that you can use to integrate multiple platforms, tools, applications, and databases together. 



When you’re working with data it’s usually in an asynchronous manner, trying to figure out what’s working and what’s not. However, you need to formalize it at some point, as a repeated, ongoing way of dealing with data brings a lot of value. Apache Airflow, being a data orchestrator, allows you to move to that formalization much more easily and quickly.

> “Apache Airflow is the easiest way to develop the data mesh, and Astronomer helps you connect all the pieces together. ” — Steven Hillion, Head of Data at Astronomer



With Astronomer you can:

* Migrate, stabilize, operationalize and integrate all your legacy workloads into the Astronomer platform. You can drive a multi-tenant environment from a unified control plane.
* Develop a centralized data platform or a data mesh that fits your needs - bringing together data, governance rules and business logic that had previously been scattered throughout different parts of the organization.
* Give your development teams a standard way to interact with data—to reduce the operational overhead necessary to support their environments. 

[Get in touch with our experts today!](https://www.astronomer.io/get-astronomer)



> “Without Astronomer, there would have been a lot more tweaking and adjusting to achieve the result we want. Our work as data scientists would have been a lot slower and more difficult.”— Mark Gergess, VP of Data & Analytics at Herman Miller