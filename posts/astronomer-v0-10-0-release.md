---
title: Astronomer v0.10
slug: astronomer-v0-10-0-release
description: Announcing v0.10 of the Astronomer platform.
heroImagePath: ../assets/1567172549-v010c.png
authors:
  - Pete DeJoy
date: 2019-09-03T00:00:00.000Z
---

Last week, we released v0.10 of Astronomer to enterprise customers. Astronomer Cloud (our SaaS service) will be upgraded to v0.10 in the coming weeks.

This release includes an upgrade to allow Airflow 1.10.4, a brand new dashboard for system admins of Enterprise installs, and a variety of security improvements.,,## What's new in 0.10

**1. Support for Airflow v1.10.4**

We now have an image for Airflow 1.10.4 that you can run on Astronomer. We'll continue to work towards syncing up platform releases with Airflow releases so that we're always on the latest and greatest version of Airflow.

**2. System Admin Dashboard**

System Administrators can now perform operations on deployments, users, and workspaces accross the Astronomer cluster. This allows for a higher level of control on the platform.

**3. Service Account Improvements**

You can now set roles on service accounts (viewer, editor, admin) to restrict permissions granted to your API tokens. You can also now login to the Astro CLI via service accounts rather than your oauth token.

**4. UI Improvements**

We've added some improvements to the metrics and logging dashboards in our UI. You can now customize your metrics view to include or exclude specific dashboards.

**5. Security Improvements**

Making sure our platform is locked down is a top priority for us. We're constantly running tests against our codebase to ensure that all vulnerabilities due to updated packages are addressed.

## Up Next

We've recently added more people to our team and will now keep releases coming regularly. We'll be sure to keep you updated with all of the new features we build in the coming weeks as we continue our push to v1.0.