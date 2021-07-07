---
slug: mage-apache-airflow-task-processing
title: How Mage Scaled Up Airflow Task Processing with Astronomer
description: A closer look into our cooperation with Mage—an AI tool for product
  developers. See how they leveraged Apache Airflow with Astronomer.
heroImagePath: ../assets/mage.png
authors:
  - Ula Rydiger
date: 2021-07-07T08:33:39.618Z
---
**Astronomer product values:**

* **Developer productivity** — eliminating the issue of undifferentiated heavy lifting by providing automation tools.
* **Day-2 operations** — adding scalability, diagnostics, automation, and observability.
* **Business impact** —saving time and resources (i.e. engineering hours), so the client can focus on more important things, like developing their product.
* **Continuous innovation** — allowing the client to stay on top of Airflow advancements.

[Mage,](https://m.mage.ai/) an early-stage startup, makes it easy for product developers with no prior experience to use AI and their data to make predictions. Their use cases include churn prevention, product recommendations, customer lifetime value, and more. Mage also helps developers incorporate machine learning into their apps. 

The company’s goal is to equip businesses with accessible AI technology so they can deliver transformational customer experiences. To achieve that they decided to switch to the Astronomer Cloud offering to manage Apache Airflow easily and efficiently.

## Why Airflow

> [“If you need to process large amounts of data and have jobs with many steps running on a recurring schedule, Airflow can make your life a lot easier.”](https://m.mage.ai/migrating-airflow-from-amazon-ecs-to-astronomer-b07aeb150375) — Mage team.

Mage has been using Apache Airflow since the very beginning (as the company’s CEO and CTO have had previous experience with it at Airbnb) to prepare training data, deploy and build new machine learning models, process streamed data, and more. Apache Airflow has been an essential part of their software stack—making sure steps in their workflow happen in a certain order and on a recurring basis.

> “My favorite thing about Apache Airflow is the UI—being able to easily see the status of all the DAGs. It definitely makes our life easier” — Johnson Kwok, Software Engineer at Mage.

## The challenge

As there are many solutions available on the market to run Airflow, previously, Mage had been using a different solution — it would provide all the needed functionalities, however, it also required more effort to maintain. At one point Mage had 10 worker instances processing tasks in Airflow, which was not necessary—they weren’t managing the workers efficiently. This naturally generated a lot of costs. 

Additionally, as the number of DAGs in their Airflow cluster grew, the DAGs sometimes wouldn’t run successfully, or there would be problems with the scheduler. 

Eventually, in order to scale up Airflow task processing efficiently, effectively, and with little maintenance they decided to go for a managed service. 

## Why Astronomer

> **Why Mage loves Astronomer:**
>
> * **DAGs maintained in Git repositories** — Astronomer allows the client to deploy DAGs directly from Git repos.
> * **Cloud-agnostic** — with Astronomer the client is not limited to one cloud provider.
> * **Easy initial setup** — easy-to-follow documentation and no need for additional security configuration when it comes to access keys or VPCs.
> * **Customer support** — provided by Airflow experts.
> * **CI/CD integration** — on Astronomer platform Airflow deployments can be integrated into CI/CD pipelines with various tools such as Jenkins or CircleCI.
> * **Quick deployments** — accessible UI allowing the client to adjust resources easily from one page, and deploy changes within a few minutes. 

After looking at different options, Mage signed up for a free trial at Astronomer. They also attended demo sessions with our support team to get a better idea of how to use the platform. Upon finishing the trial period, they decided that the Astronomer Cloud platform is the right tool for their needs.

Astronomer Cloud allows Mage to keep track of their resources— to set them up easily for the scheduler, the workers, and the web server all in one place, with just a click of the button. With Astronomer Cloud they can take care of the infrastructure and security—”that’s one less thing we have to worry about”, explains Johnson.

> “As the company grows, we knew that scaling up all the task processes was going to be an issue so we wanted to switch to a managed service and minimize the amount of work that was done by us,” says Johnson, “With Astronomer, convenience is the main thing. Being able to quickly see what's going on and why.”

Apart from the more efficient management and maintenance of Apache Airflow, the platform also allows users to stay on top of the Airflow updates and upgrade easily.

## Looking ahead

Being an early-stage startup, Mage’s hope is to be able to scale up easily with Astronomer infrastructure—whether it will be smoothly operating 1000 DAGs, or deploying new resources without interruption.

> “I would recommend Astronomer to not only early-stage startups but also to bigger companies who deal with data,” sums up Johnson,”If you are already using Airflow it's worth looking into Astronomer if you want to ease the burden of managing it.”