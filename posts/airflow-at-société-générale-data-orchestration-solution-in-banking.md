---
slug: data-orchestration-societe-generale
title: "Airflow at Société Générale: Data Orchestration Solution in Banking"
description: A conversation with Societe Generale about their Airflow
  implementation and development of the data orchestration solution.
heroImagePath: ../assets/societe.png
authors:
  - Ula Rydiger
date: 2021-08-17T08:23:56.495Z
---
# Apache Airflow at Société Générale



We’ve had the pleasure to sit down with Alaeddine Maaoui, Product Owner at Société Générale, for a chat about Apache Airflow. Société Générale is a multinational investment bank and financial services company based in Paris.

Their Airflow journey started with the Open Banking transformation program. In order to transform their IT department, Société Générale needed to build their private cloud solution. They wanted to find a perfect open source tool for the project and, at the same time, challenge the mindset of the company culture—from the ITIL model to the modern, DevOps approach. 



After trying different orchestration tools such as Celery, Azkaban or Digdag, it was Apache Airflow that caught the company’s attention in the end, with its user-friendly UI, community support, and extensibility. 



**With Apache Airflow, Société Générale:**

* Could deliver more than 150 production infrastructures as they are using Airflow to orchestrate Airflow provisioning.
* Deals smoothly with standard ETL and ELT use cases 
* Easily interacts with their private and public cloud
* Can use the tool as an asynchronous system for their API
* Noticed license cost savings, seamless change into the DevOps mindset, and developer autonomy.

> “The challenge was not only about finding the best open source solution that could fit with mission-critical and production banking applications. It was about challenging the mindset of the teams too.“

Read on to learn more about their Apache Airflow journey!



## What kind of challenges were you facing before implementing Apache Airflow?

Right now we are under the [Open Banking transformation.](https://www.societegenerale.com/en/news/newsroom/strengthening-customer-relationships-open-banking) This program began 3 years ago, with the IT department transformation when we started building our private cloud solution to adhere to the European Institute of Financial Regulation rules.

The challenge was not only to find the best open source solution that could fit with mission-critical and production banking applications. It was about challenging the mindset of the teams too. We were following an ITIL model, where everyone knew their responsibilities and stayed within that box. Eventually, we realized it was not an optimized approach for us. This is why we wanted to change into a DevOps approach and shared responsibility models. 

> “We chose Apache Airflow because it has an interesting UI, made with both developers and managers in mind.”

## Prior to using Airflow have you been using any other orchestration tools? 

Previously, we were using legacy data orchestration tools like HP Operations, Control M, Dollar Universe etc. In order to change to DevOps we tried various tools like Celery, Azkaban, Luigi, Digdag and, eventually, Airflow. 



## Why did you decide to use Apache Airflow? 

We chose [Apache Airflow because it has an interesting UI](https://www.astronomer.io/blog/introducing-airflow-2-0), made with both developers and managers in mind. Additionally, it’s an open source project supported by an active community. And it’s based on Python which makes it very customizable and extensible.



## What is a specific use of Apache Airflow at Société Générale?

We kicked it off with a POC, where we got to answer a very complicated use case about managing grid calculation servers’ lifecycle. We built our first infrastructure in 2018 which turned out to be a success: we observed a lot of license cost savings, scaled up the development workflow, and managed to evolve fast as a company.

Today, we are using Apache Airflow for standard ETL and ELT use cases and also to easily interact with our private and public cloud. For example, thanks to Airflow, I can develop the same workflow and play with different tasks, doing it either on the public or private cloud. 

When it comes to the Open Banking transformation, we’re using Airflow as an asynchronous system to provision Airflow inside our private cloud. To give you an example of how we are developing, when we started with Airflow we had one infrastructure and now we have more than 150. 



## What benefits have you noticed after implementing Airflow?

First of all, the license cost savings. Secondly, we successfully changed into the DevOps mindset which helps teams cooperate and get faster time to market. Today, our [developers are autonomous](https://www.astronomer.io/blog/herman-miller-case-study) as we gave them ways to test their artifact, go directly to the pre-production and then to the production environment. Finally, thanks to the community, Airflow is developing really fast, coming up with new features, bug fixes, providers etc. 



> “An open source project, such as Apache Airflow, works great in the production environment, even for the sensitive use cases of the banking industry.”

## As a Product Owner, what were your key learnings from implementing Airflow?

I have to say I learned a lot. Firstly, an open source project such as Apache Airflow works great in the production environment, even for the sensitive use cases of the banking industry. Secondly, I realized that, as a Product Owner, I could also contribute to Airflow: participate in the Airflow Summit, be responsive on the Slack channel etc. Lastly, I learned—and this is also my advice— to try to use the right tool for the right use case. Meaning, don’t try to use Airflow for things it’s not designed to do. Every tool has its limitations, even though Airflow provides a lot of connectors and you can always develop new ones using Python. 



## What are your plans and hopes for the future?

We’re working hard to successfully [migrate from Airflow 1.X to Airflow 2.X.](https://www.astronomer.io/docs/cloud/stable/customize-airflow/upgrade-to-airflow-2) I’m happy to say that we’ve just kicked off the cooperation with Astronomer to help us achieve that goal. We're excited to use their support and experience!

\---

If you’re looking to modernize your data stack and processes—baking industry or not—Astronomer is for you! Our experts will help you get started with Airflow, or, if you’re already using it, optimize and customize the tool to your needs. 



[Get in touch with us today to learn more about how Airflow and Astronomer can help. ](https://www.astronomer.io/get-astronomer)