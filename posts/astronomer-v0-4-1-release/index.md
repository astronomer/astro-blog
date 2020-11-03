---
title: Astronomer v0.4.1 Release
slug: astronomer-v0-4-1-release
description: Release notes on v0.4.1 of the Astronomer platform.
heroImagePath: ./1534965497-v0-4-1-1.jpg
authors:
  - author: Pete DeJoy
    avatar: ../avatars/1515431834-20228674_10214325962847851_7349910181572716984_n.jpg
date: 2018-08-22T00:00:00.000Z
---

Last week, we launched v0.4.1 of our platform, which  includes significant improvements to our authentication and login process, platform stability, and monitoring stack. As mentioned in our [previous release notes](https://www.astronomer.io/blog/astronomer-v0-3-2-release/), we are committed to regularly shipping release notes with our updates to keep ourselves moving forward at a quick pace.

# What’s included in 0.4.1
**1. Integration with [Auth0](https://auth0.com/)**

Astronomer’s default installation can now use local, Google, or Github as auth providers. Now, you can login using either your standard email and password, your Google account, or your Github account. No need to manage more specific email and password combinations.

**2. Improvements to the Airflow Webserver**

Airflow webserver stability issues have been fixed and a more thorough health check has been implemented to ensure that the webserver will stay up and running.

**3. Updated Grafana to v5.2.2**

We’ve updated our Grafana monitoring to be on par with the latest release, which includes Elasticsearch alerting, an improved docker image, and better security. You can read more about it [here](http://docs.grafana.org/guides/whats-new-in-v5-2/).

**4. Increased Volume Size for Workers**
 
Our celery workers now handle a bulkier load out-of-the-box.This will allow you to put more on your workers from the get-go without the need to go under the hood and increase their volume capacity.


# What's Next

Interested in seeing what's next for us? Check out our [Astronomer Roadmap guide](https://www.astronomer.io/docs/roadmap/), which details what we'll be roping into our platform in coming releases.

If you'd like to see a demo or give our platform a spin, you can reach out to us to [apply for our beta program here](https://www.astronomer.io/#beta-request).