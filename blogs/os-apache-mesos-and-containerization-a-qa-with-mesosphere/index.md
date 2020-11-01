---
title: 'The Power of DC/OS, Apache Mesos and Containerization: A Q&A With Mesosphere'
slug: os-apache-mesos-and-containerization-a-qa-with-mesosphere
description: 'Amr Abdelrazik from Mesosphere answers our questions about Apache Mesos and DC/OS. '
heroImagePath: ''
authors:
  - author: Amr Abdelrazik
    avatar: ../avatars/
date: 2017-07-06T00:00:00.000Z
---

_\*When it comes to some of our core needs—speed, ability to manage big data, capacity to scale—Apache Mesos is a no-brainer for us. In fact, last week, Greg Neiheisel wrote a blog post about [how we're building our platform with Apache Mesos and DC/OS](https://www.astronomer.io/blog/building-next-generation-data-infrastructure-with-apache-mesos-and-dc/os). And since we're such fans of both, we asked our friends at [Mesosphere](https://mesosphere.com/) some questions about their tech and what they're most excited about down the road. Here's what Product Marketing Manager Amr Abdelrazik said:&nbsp;_

### Help us understand how DC/OS relates to Apache Mesos.

DC/OS is a distributed computing platform that is built on top of Apache Mesos. Mesos is a powerful resource manager that allows users to build and run many workloads on the same hardware or cloud infrastructure, yet without DC/OS, Mesos users need considerable expertise to configure and run Mesos clusters in production.

DC/OS lowers the barrier of entry to Mesos by giving users an easy-to-install, integrated and tested platform that includes not only Mesos but also Zookeeper, networking, container orchestration and services discovery, out of the box. DC/OS helps users leverage the power of Mesos in less time.

### What’s on the roadmap for Apache Mesos and DC/OS?

The team is working very hard to make the Mesos and DC/OS experience better. On the Mesos front, this means improvements to the [operator](https://issues.apache.org/jira/browse/MESOS-6007) and [scheduler](https://issues.apache.org/jira/browse/MESOS-3302) APIs, as well as a [CLI redesign](https://issues.apache.org/jira/browse/MESOS-5676). Other exciting goals include an Etcd-based [master contender/detector](https://issues.apache.org/jira/browse/MESOS-1806) module, and possibly federation. You can follow along with the Apache Mesos roadmap on the [wiki](https://cwiki.apache.org/confluence/display/MESOS/Roadmap).

On the DC/OS side, the goals is to add more tools for operators. Currently we're working on enhanced monitoring and troubleshooting. And enhancing the Universal Container Runtime to make it the best and most reliable runtime for Docker workloads.

### How would you say you’re different from projects with overlapping functionality, like Kubernetes?

I think the major difference between DC/OS and other projects is the scope.

Kubernetes is a container orchestrator first, whereas DC/OS (datacenter operating system) is first and foremost a distributed computing platform. Containers are just one of the many types of workloads that you can run on DC/OS, along with data services, CI/CD tools and distributed databases (many of which are contributed and maintained by the open source community).&nbsp;

Container orchestration in DC/OS is done by [Marathon](https://mesosphere.github.io/marathon/), an open source Apache Mesos framework with its own thriving community of users and contributors. Mesos is extremely pluggable and Kubernetes may be able to run on it in the future.

The aha moment for Mesosphere's customers and DC/OS open source users is when they realize that most containerized applications need to communicate with data services. For example, Apache Spark, Apache Kafka, Apache Cassandra and Elasticsearch. With DC/OS, customers realize that they can have one platform for all their workloads including Docker containers, Legacy apps and data services, which helps save costs, makes application portable and reduces operational overhead. Customers can also adopt many new technologies with DC/OS since it automates many complex and time-consuming tasks such as deployment, maintenance and failure recovery.

### How do Mesos and DC/OS run containers and data services together, while other container orchestrators struggle with data services?

Mesos and DC/OS can run different workloads on the same platform because of application-aware two-level scheduling architecture. With Mesos' two level scheduler architecture, the higher-level scheduler (DC/OS service) fully encapsulates the application operational logic while the lower level scheduler (Mesos) offers infrastructure resources for all workloads. This enables Mesos and DC/OS to automate workload operations, use the infrastructure more efficiently, and be extensible and resilient enough for mission critical workloads at any scale. Here is how it works:

**Automation** : DC/OS services include application-specific operations such as deployment, scaling, maintenance and high availability. One example includes automated step-by-step instructions for upgrading a Cassandra database or scaling out an Elastic service. The automation simplifies operations, increases uptime and reduces human error.&nbsp;

**Efficiency** : Two level scheduling prevents resource contention by providing fine-grained resource allocation and preventing any single DC/OS service from monopolizing all infrastructure resources. It enforces resource guarantees and isolation between workloads–whether they are different services or multiple versions of a service. &nbsp;_The result is higher utilization and cost savings for on-prem or cloud-based infrastructure._

**Extensibility** : DC/OS' modular architecture means that we can encapsulate the application operational logic to create new services or updated existing ones independently from each other. Services can then published to the DC/OS services catalog and can easily be deployed to any DC/OS cluster in minutes. DC/OS currently has a catalog of +100 services which include Container Orchestrators, Kafka, Cassandra, Spark, Elastic and many more. DC/OS' modular architecture also allows you to upgrade DC/OS itself without affecting running workloads.

**Resilience** : Separating application logic from resource management frees Mesos to do one thing really well: isolate, monitor and manage infrastructure resources. Such focus,&nbsp;combined with years of usage in large scale production systems, allows &nbsp;to DC/OS so it can support mission critical workloads and easily scale from tens to tens of thousands of nodes.

### How are you lowering the barrier to writing new Mesos frameworks and getting new services running on DC/OS?

Mesos frameworks all have application-ware logic that allows them to interact with Mesos. Until now, that logic has been written framework by framework, even though most of the functionality that logic provides is common to most frameworks. Codifying this common logic would let framework developers focus on the unique requirements of their framework, not re-inventing the logic that should be common to all frameworks.&nbsp;

So our team has been very busy building dcos-commons, which you can think of as an SDK for building packages and frameworks on top of DC/OS. Most Mesos frameworks share a common set of basic functionality and benefit from a common implementation, which dcos-commons codifies. The old Kafka framework, for example, was written from scratch in almost 7000 lines of code. The new Kafka framework, built with dcos-commons, comprises around 100 lines of code. Dcos-commons greatly lowers the bar for adding new services. We are migrating some of the most popular frameworks to dcos-commons, including Cassandra, HDFS, Kafka, Elastic, Datastax Enterprise, and Confluent Kafka. And we expect many new services to be available soon.

### What are your thoughts on running databases on Mesos?

Running distributed databases is one of the primary use cases for Mesos, which acts as a distributed system’s kernel. There are frameworks to run Cassandra and ElasticSearch and with the SDK we expect to add others (possibly including Cockroach DB, or highly available versions of MySQL or postgres; stay tuned). Currently many users run postgres and MySQL, but they do pin them to specific nodes to make them more manageable. We hope to have a highly available MySQL database such as Maria DB or Galera in the DC/OS Universe very soon.

### On that note, what's the best way to store data long-term? Relying on replication between containers? External volumes? Ceph? Something else?

Different users manage this in different ways, depending on their individual requirements, including the type of data (database files, object storage, block storage, etc.). If you're interested in a longer discussion about storage, join the [Mesos](https://mesos-slackin.herokuapp.com/) or [DC/OS](https://chat.dcos.io/) community Slack; both have #storage channels.

### Are there plans for a daemon service group that will allow for a container to be constrained to running on each agent in the cluster for things like logging or RexRay?

You can actually do it now using a lesser known features of Marathon: operators. You can use the [UNIQUE operator](https://mesosphere.github.io/marathon/docs/constraints.html#unique-operator) in your Marathon app definition, which will maintain only one instance of each task on each node. Set the number of instances to equal or greater than the number of nodes in the cluster, which will result in one and only one container instance on each agent node. The limitation of this approach is that Marathon can't deploy containers on master nodes.&nbsp;

### What's the best way to handle networking performance bottlenecks with DC/OS?

DC/OS provides a couple different [Networking options](https://dcos.io/docs/1.9/networking/) for its users including IP-Per containers, host, and bridge mode. It also offers options for service discovery including our unique and differentiated distributed service discovery and load balancing mechanism (Virtual IPs) and Mesos DNS. Like storage, the best option depends on your specific requirements, so please join the #networking channel on [DC/OS Slack](https://chat.dcos.io/) to discuss your options with fellow community members. In case you don't find a good solution, we also have a networking [working group](https://github.com/dcos/community/blob/master/README.md#dcos-community) that meets on the third Monday of every month to discuss the future of networking in DC/OS. New members are welcome!

### How do the recent changes to Docker (Moby) impact Mesos / DC/OS?

For us it doesn't change very much. Mesosphere is investing in many of the ongoing conversations about open container standards (including [OCI](https://www.opencontainers.org/) and [CNI](https://github.com/containernetworking/cni#cni---the-container-network-interface)) so no matter what changes within Docker the company, we will always be able to run Docker containers on DC/OS and Mesos. We also have our own universal container runtime (an extension of the production proven Mesos container runtime) so if Mesos and DC/OS community members want to use Docker container images they still aren't locked into using the Docker daemon/Engine.

### What advancements in containerization tech do you anticipate in the next 5 years?

Five years is like 50 years in container-land, so I'll focus on the next two years instead. I think that as containerization saturates early-adopter tech companies and becomes popular with the early majority, containerization companies will need to emphasize ease of use, interoperability and integrated solutions. I would expect components like containerization engines will become more reliable and interoperable as the industry adopts open source standards. I also think users will start to expect other workloads data services and machine learning to have the same agility and flexibility as containers and stateless applications, which should drive more people to Apache Mesos and DC/OS as it’s currently the only platform uniquely positioned to deliver on both fronts.

_[The Astronomer platform is built on Airflow](https://www.astronomer.io/blog/airflow-at-astronomer)&nbsp;with a Mesos framework that&nbsp;allows cluster operators to execute and scale long-running applications.&nbsp;If this technology sounds like something that would benefit your organization, we'd love to connect with you. Let our platform make your data engineering a whole lot easier._

