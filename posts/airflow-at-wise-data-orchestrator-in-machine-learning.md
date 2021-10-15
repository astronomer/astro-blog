---
slug: apache-airflow-wise
title: "Airflow at Wise: Data Orchestrator in Machine Learning"
description: "A talk with Alexandra Abbas—a Machine Learning Engineer at
  Wise—about how they leverage Apache Airflow in their ML initiatives. "
heroImagePath: ../assets/wisecover.png
authors:
  - Joanna Kasprzak-Kajder
date: 2021-09-16T09:17:52.317Z
---

<!-- markdownlint-disable MD033 -->
<iframe src="https://fast.wistia.net/embed/iframe/f1sg00nkxc" title="Societe - teaser video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="450"></iframe>

Wise is a global technology company, building the best way to move money around the world. With the Wise account, people and businesses can hold 55 currencies, move money between countries and spend money abroad. Ten million people and businesses use Wise, which processes over £5 billion in cross-border transactions every month, saving customers over £1 billion a year.

We've had a chance to talk to Alexandra Abbas, a Machine Learning Engineer from Wise, to discuss how Apache Airflow fits into the bigger data management picture and uncover the story behind machine learning practices at one of the leading fintech organizations.  



## What is your role at Wise, and how does the data team structure look?

I'm a Machine Learning Engineer, and I work in the Platform Tribe at [Wise](https://wise.com/). Within this department, I work in the machine learning platform team. My team consists of four machine learning engineers, and we are responsible for building the infrastructure for data scientists and maintaining the Platform. We don’t have one data science team; all the data scientists are scattered across the organization in different departments such as marketing, customer support and product analytics, amongst others. Our Head of Data Science connects all our efforts and makes sure that data scientists get a valuable and practical platform to work on.

> “The biggest goal for us is to move towards stream machine learning and have an end-to-end streaming system utilizing Apache Kafka and Apache Flink. This would allow us to move features to production much quicker than before and enable cross-functional team collaboration.”

## How would you describe machine learning adoption at Wise? What are the main processes it's used for?

Different teams have adopted machine learning on different levels at Wise. Our most advanced machine learning models are used as part of our real-time transaction monitoring and KYC processes when registering to Wise. We utilize almost all well-known machine learning frameworks and libraries like Tensorflow, PyTorch, XGBoost, H2O, scikit-learn and so on.



## What are your current goals?

The biggest goal is to move towards stream machine learning and have an end-to-end streaming system utilizing Apache Kafka and Apache Flink. This would allow us to move features to production much quicker than before and enable cross-functional team collaboration.

Rather than using REST calls to gather features and make prediction requests, we would like to use stream machine learning features and interact with our inference services using Apache Kafka to avoid bottlenecks and guarantee scalability. We are currently working on a central feature engineering pool. This is aimed to be a place for our data scientists to engineer streaming features and share their knowledge about their domains in the form of re-usable feature aggregations. The latest feature aggregations will be stored in a high-performance time-series database that we can fetch at inference time.

> “Airflow has a central place in \[our] team environments because it is responsible for retraining machine learning models in SageMaker.”

## How does Airflow fit into that picture?

We've recently introduced [Amazon SageMaker](https://www.astronomer.io/guides/airflow-sagemaker) to our data scientists. We are now working on migrating over most of our model training use cases to SageMaker Training and Processing.

SageMaker resources are segregated into so-called team environments where data scientists can collaborate with their team members but cannot access others’ resources. This was necessary due to security and privacy requirements. In all these environments, there is an Airflow instance, a SageMaker “instance”, and an inference service, which is used for making online model predictions in production. We encourage data scientists to use these team environments for prototyping, retraining, and deploying their models. I talked about this architecture in my [Airflow Summit talk in more detail.](https://airflowsummit.org/sessions/2021/apache-airflow-at-wise/)

Airflow has a central place in these team environments because it is responsible for retraining machine learning models in SageMaker. We use Airflow to define the retraining workflows. In these retraining workflows, we fetch and prepare new data and spin up SageMaker training workers to run our training scripts in a distributed fashion. This is the key role of Airflow in our current machine learning platform.



***Note**: [Amazon SageMaker](https://aws.amazon.com/sagemaker/) is a comprehensive AWS machine learning (ML) service that is frequently used by data scientists to develop and deploy ML models at scale. By nature, working with ML models in production requires automation and orchestration for repeated model training, testing, evaluation, and likely integration with other services to acquire and prepare data. Airflow is the perfect orchestrator to pair with SageMaker. With Airflow, you can easily orchestrate each step of your SageMaker pipeline, integrate with services that clean your data, and store and publish your results using only Python code.*

> “After some time \[a large single centralized Airflow instance] wasn’t scalable enough for our analysts and data scientists. That was one reason behind moving to the mini environments and creating segregated Airflow instances for each team.”

## What has changed since introducing Airflow?

Before introducing team environments, we had a large single centralized Airflow instance that all the analysts and data scientists used. After some time it wasn’t scalable enough. That was one reason behind moving to these mini environments and creating segregated Airflow instances for each team. Segregated Airflow instances guarantee a limited blast radius in case of an incident.

## Why would you recommend Apache Airflow?  

Airflow has a great user interface, the Python code makes it easy to use, and the concepts of tasks and DAGs are very intuitive. Scheduling DAGs fits into most analytics workflows. I can see this trend of analysts adopting Airflow massively— many of them use it as their primary tool in Wise. It is because of its versatility; fitting into various use cases for data analytics and data science. From my experience, it seems that Airflow is a perfect tool for Data Scientists: the number of docs and guides surrounding it make it a well-organized experience. 



## Do you think Airflow is becoming a natural choice for data orchestration across the industry?

Airflow is the go-to tool for scheduling. In any organization with analysts and data scientists, Airflow is very much needed. You simply need a top-class scheduler, and Airflow matches all the analytics and data science workloads requirements. 

\---

If you’re looking to modernize your data stack and processes, Astronomer is for you! Our experts will help you get started with Airflow, or, if you’re already using it, optimize and customize the tool to your needs. 

[Get in touch with us today to learn more about how Airflow and Astronomer can help. ](https://www.astronomer.io/get-astronomer)
