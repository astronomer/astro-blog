---
title: The Future of Apache Airflow
slug: the-future-of-apache-airflow
description: Discussing the potential future direction of the Apache Airflow project.
heroImagePath: ../assets/1533578390-theairflowuipreview.jpg
authors:
  - Ben Gregory
date: 2018-08-06T00:00:00.000Z
---

Thanks to the core contributors’ fantastic work in creating a very engaged community, Apache Airflow has come a long way since it was first started as an internal project within Airbnb back in 2014. In this post, we’re going to go through some of the exciting things coming down the pipe as the project gears up for a very hotly anticipated 2.0 release.

## What is Apache Airflow?

Apache Airflow is an open-source workflow management system that allows you programmatically author, schedule, and monitor data pipelines in Python. It is the most popular and effective open-source tool on the market for managing workflows, with over 8,500 stars and nearly 500 contributors on Github. Since being open-sourced in 2015, Airflow has proven to be the dominant tool in its class (beating out alternatives like Spotify’s Luigi, Pinterest’s Pinball, and even the ever-present Hadoop-centric Oozie) because of its core principles of configurability, extensibility, and scalability. As we’ll see, the new features being developed and direction of the project still adhere to these principles.

# Short Term (v1.10)

Improvements that are currently being worked on in active PRs or recently merged and will be included in the upcoming Airflow 1.10 release.

#### RBAC and the UI
[Joy Gao](https://twitter.com/joygao) took on the herculean task of converting the front end framework from [Flask Admin to Flask AppBuilder](https://issues.apache.org/jira/browse/AIRFLOW-1433), which was an incredible feat for one person to accomplish largely on her own. One of the primary benefits realized in this update is ground-level support for role-based authentication controls (RBAC) that will open the door for various auth backends and functionally allow admin users to dictate who has access to specific elements of their Airflow cluster. Along with this RBAC capability will come a slightly improved UI that will allow for better security around user access. Furthermore, our team at Astronomer is hoping to fix the UI so that refreshing the dashboard is not needed to check on the status of DAGs--we’d like to be able to view the status of our DAGs in real time without driving ourselves crazy pressing that refresh button.

#### The Kubernetes Executor
One of the most exciting developments the Astronomer team is anticipating is the release of the [Kubernetes Executor](https://github.com/apache/incubator-airflow/blob/v1-10-stable/airflow/contrib/executors/kubernetes_executor.py) that [Daniel Imberman](https://github.com/dimberman) of Bloomberg has been leading development on. This is long-awaited from the community and will allow users to auto-scale workers via Kubernetes, ensuring that resources are not wasted. This is especially important for expanding the viable use cases for Airflow, as right now many are forced to either run Airflow on a low powered ec2 instance and use it to schedule external jobs or run it on expensive hardware that is massively underutilized when tasks aren’t actively running. While it is being included in the 1.10 release, the release of a new executor is part of a long-term but active effort to make Airflow completely could-native, which we’ll discuss in the following section.

# Long Term (v2.0+)

In addition to the short-term fixes outlined above, there are a few longer-term efforts being worked on that will have a huge bearing on the stability and usability of the project. Most of these items have been identified by the Airflow core maintainers as necessary for the v2.x era and subsequent graduation from “incubation” status within the Apache Foundation.

#### First Class API Support
A largely requested feature (at least from users of Airflow that we work with) is first class support for an API to control everything from connection creation to DAG pausing to requesting usage metrics. Right now, the [API is strictly experimental](https://github.com/apache/incubator-airflow/tree/master/airflow/api/common/experimental) with limited functionality, so, in practice, if you want to create this behavior, [you end up writing a plugin](https://github.com/airflow-plugins/airflow_api_plugin) that directly manipulates the underlying MySQL or PostgreSQL. Ideally, given that much of the current functionality in the UI is based on direct modification of the database and not via any API, the inclusion of a first-class API that handles all functionality would mean that everything done in the UI could also be done in the CLI, further expanding the use cases Airflow could facilitate.

#### Making Airflow Cloud Native
As mentioned above in relation to the Kubernetes Executor, perhaps the most significant long-term push in the project is to make Airflow completely cloud native. As it stands currently, it is completely up to the user to figure out how to operationalize Airflow for Kubernetes (although - SHAMELESS PLUG WARNING - Astronomer has done this and provides it [in a dockerized package](http://github.com/astronomerio/astronomer) for our customers :)). We feel this is an important step for the project to keep up with the changing deployment landscape and we plan to open-source what we can as we go, but knocking this out is easier said than done. One of the most fundamental problems blocking this initiative is the need for a high-availability, massively-distributed, and auto-rebalancing datastore, something that is hard to do with a simple postgresql or mysql. A promising lead towards addressing this is added support for [CockroachDB](https://www.cockroachlabs.com/), a database following the [Google Spanner](https://cloud.google.com/spanner/docs/whitepapers) whitepaper (and founded by former Google File System engineers) and designed precisely for the features listed above. 

#### Improved Test Suite
A common complaint among contributors to Airflow is the long time that it can take for Travis, the CI of choice for the Airflow project, to run all the tests when cutting a new release. This has been brought up in the past but given Airflow’s code base has hit a scale where it can take up to an hour for Travis to run, we see this test suite finally making it over the line (and are looking forward to helping!) One factor to help in this process is the [proposed break out of plugins](https://issues.apache.org/jira/browse/AIRFLOW-2732) (which has been growing consistently and is a large code base in and of itself). Which brings us to...

#### Plugin Manager
Before we talk about this, it’s important to note that this is NOT on the official Airflow roadmap (at least not yet) but is rather something that the Astronomer team has been mulling around as we see the continued proliferation of plugins. The brilliance of airflow plugins (and why they have contributed in no small part to the success of the entire project) is how wide-ranging they can be, enabling your workflows to connect with GCP, AWS, and Hadoop ecosystems as well as any number of other APIs and databases rather trivially. Ironically, this is also their weakness. Importing Google Cloud plugins and opening the door to additional processing and dependency conflicts makes zero sense if your stack is entirely on AWS. Additionally, the inherent brittleness of plugins that have to interact with constantly changing APIs by their very nature require a different release schedule from the core project, which justifiably is a slower procedure as any error could affect core functionality. All plugins should be on their own release schedule with an independent testing suite to make sure that all updates take advantage of the latest changes in external projects. Getting this to be as easy as a pip install will be huge for making Airflow more available to to other systems. 


As we look toward the next year of our roadmap, we’re doubling down on our community contributions to help Airflow retain its status as the most flexible, extensible, and reliable scheduler available, regardless of how it’s being run. In Astronomer speak, we’d recommend hanging onto your helmets - the ship is about to kick into hyperdrive.

If you're interested in quickly getting up and running with Airflow or would like to see how we've built our product to compliment Airflow's native features, [you can request a demo here](https://www.astronomer.io/#beta-request).

