---
title: Opening Up Astronomer Open
slug: opening-up-astronomer-open
description: It's time for Astronomer to open source our core modules.
heroImagePath: ../assets/1516302069-pexels-photo-796206-1.jpeg
authors:
  - Ry Walker
date: 2018-01-18T00:00:00.000Z
---

We’ve long had a vision at Astronomer to open source our core modules, and we’re excited to announce that [we’ve begun that process](https://github.com/astronomerio/astronomer). These Docker images will be directly utilized in core Astronomer Enterprise Edition and the next generation of Astronomer Cloud, and will be well-maintained.

## Airflow

We’ve put together Docker images for Airflow that include Airflow webserver + scheduler, Celery, Flower (to monitor Celery), with metrics flowing to Prometheus and dashboards in Grafana. We view this as a minimal production setup for Airflow.

It’s super easy to test this out:

1. [Install Docker Compose](https://docs.docker.com/compose/install/)
2. Clone the repository by running: `git clone https://github.com/astronomerio/astronomer.git` and `cd astronomer`.
3. Pop open a terminal and run `cd examples/airflow && docker-compose up`. This will spin up the containers in the same configuration as a live Astronomer environment.
 
First, we spin up a Postgres container for the Airflow metadata database, and a Redis container to back Celery, which Airflow will use for its task queue. Once the storage containers have started, we start the Airflow Scheduler, Airflow Webserver, a Celery worker, and the Flower UI to monitor the Celery task queue. Once everything is up and running, open a browser tab and visit http://localhost:8080 for the Airflow UI and http://localhost:5555 for the Celery UI.

Sweet! You’re up and running with Apache Airflow and well on your way to automating all your data pipelines. Check out the docs to get started with your first pipelines, or get your existing pipelines running on the Astronomer Platform.

We’re also building and curating [Airflow Plugins](https://github.com/airflow-plugins), have also published additional information on using our [Cloud Airflow service](https://docs.astronomer.io/v2/apache_airflow/overview.html), and are [producing an Airflow Podcast](https://soundcloud.com/the-airflow-podcast).

## Deployment

* For Astronomer Open Edition, it’s up to you to come up with your own deployment strategy. If you need help, we have services team and support contracts available.
* [Astronomer Enterprise Edition](https://docs.astronomer.io/v2/editions/private-cloud/overview.html) is in beta as a commercial product, and packages machinery to easily deploy these modules to the major clouds: AWS, Google Cloud, Azure, IBM Bluemix, and Digital Ocean. You bring your own data stores.
* Astronomer Cloud Edition provides all infrastructure and data stores, but for that reason it's a little less flexible — but it's a great way to get started with the platform.

## Get involved

We’d love more [Github stars on the project](https://github.com/astronomerio/astronomer) — and if you run into a problem, drop us a Github issue or pull request.
