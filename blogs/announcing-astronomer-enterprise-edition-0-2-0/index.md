---
title: Astronomer Enterprise Edition 0.2.0
slug: announcing-astronomer-enterprise-edition-0-2-0
description: Announcing the latest iteration of our Airflow offering
heroImagePath: ./1525230681-machineshumans1.jpg
authors:
  - author: Ry Walker
    avatar: ../avatars/1504130835-ry-walker1795.jpg
date: 2018-05-02T00:00:00.000Z
---

We’re proud to [publicly announce](https://www.businesswire.com/news/home/20180501006932/en/Astronomer-Announces-Secure-Private-Cloud-Option-Running) a secure, private cloud option for building and managing data workflows with Apache Airflow. We’re calling it Apache Airflow on Astronomer: Enterprise Edition. With that, we’d like to introduce you to the product a bit more formally: 

## Meet Astronomer Enterprise Edition

In response to the growing market concerns over data security and GDPR compliance, our team has continued to build on our [March announcement](https://www.astronomer.io/blog/announcing-astronomer-enterprise-edition/) of [Astronomer Enterprise Edition](https://www.astronomer.io/enterprise/), which allows for easy Apache Airflow deployment in a user’s own, secure environment.

Enterprise 0.2.0 allows users to more easily deploy Airflow through our improved CLI. We’ve also streamlined authorization, automated much of the [Kubernetes](https://medium.com/google-cloud/kubernetes-101-pods-nodes-containers-and-clusters-c1509e409e16) config process, and tightened integration with the monitoring stack to make it easy to fully get up and running with Airflow in your private cloud.

## The Power of SaaS, on Your Private Kubernetes Cluster
Astronomer allows any developer to jump directly into creating and managing Airflow data pipelines quickly and effectively. Our company’s roots lie in our SaaS Airflow offering, but we wanted to expand accessibility and build a product that prioritized security and gave our users the ability to customize.

Enterprise Edition now provides the same feature-rich access to Airflow, but through a customer’s own [Kubernetes](https://www.admithub.com/) cluster. You get full access to the source code, which means that you can modify and extend it to suit your needs while keeping all data inside of your own private cloud.

## Why Astronomer Enterprise Matters
Most of today’s batch processing jobs require far more capability and customization than what drag-and-drop ETL tools can provide. For that, data pipelines should be defined in code, which requires creating infrastructure and constantly monitoring. Many teams, however, don’t have capacity to add all that to their plate.

Not to mention, for many companies, the ability to control the security of their infrastructure is critical to their growth and scalability. At AdmitHub, a growing Edtech startup in Boston, Astronomer Enterprise unlocks partnerships with organizations that require data be kept in-house. 

“A lot of folks wouldn’t let us use cloud service providers for security purposes, so it’s been a big deal for us to be able to take ownership of the data and bring everything into our own environment,” says Andrew Magliozzi, AdmitHub CEO. "It is an onerous process to get through security approval for partner organizations. It takes months, and since their job is to be diligent with their data (which they should be), Astronomer is letting us move more quickly and reach more people."

The implications from a data security standpoint and the fact that Astronomer Enterprise can be installed on any Kubernetes cluster in under an hour, is a game changer.


,,## Our Newest Release, Unpacked

Here’s the breakdown of what this release allows you to do: 

### Helm Charts

* We automated configuration. You used to have to create connection strings for Grafana, Flower, Airflow and Houston (our platform API) - all separately. Now, you just have to create one connection string for Houston and a single one for Airflow. All additional connection secrets are connected for you, per deploy.
* Filter external access down to a CIDR IP address range

### Our CLI

* We also streamlined our authentication process for maximum security, and significantly automated our configuration process from start to finish. 
* Create multiple Airflow deployments
* Request a list of all available deployments 

### Our API

* List your deployments in their entirety
* Change your deployment name
* Force a helm chart update on a deployment
* Set a custom Airflow image, which gives you control to further customize on image dependencies and your entire deployment. 

## Try it Out
If you’re interested in exploring Astronomer Enterprise, check out our [docs](http://enterprise.astronomer.io/) or [check-in with us and kickstart your 14-day trial](https://www.astronomer.io/enterprise/trial/). If you have any questions or feedback, don’t hesitate to drop us an email at humans@astronomer.io.