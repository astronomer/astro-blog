---
title: Live Blogging Through a Migration
slug: live-blogging-through-a-migration
description: A live play-by-play of our company slack during a recent product update.
heroImagePath: ../assets/1518738495-screen-shot-2018-01-03-at-5-16-57-pm.jpg
authors:
  - Taylor Edmiston
date: 2018-02-16T00:00:00.000Z
---


One of the core modules is our clickstream module. It empowers marketers and product mangers to know their target audience and how they're interacting with a site or app.

Under the hood, a huge part of our clickstream module is powered by Apache Airflow. Analytics.js events get sent to S3 and loaded into Redshift by dynamically generated DAGs.

Our Airflow Clickstream powers our Redshift loader DAGS for clickstream events.

Recently, we pushed a pretty big update to our Airflow Clickstream. You'll see some screenshots of our engineering Slack channel through deployment night.

![1518736661-9pm_migration.jpg](../assets/1518736661-9pm_migration.jpg)

### First, some intros:

![1518737823-intro.gif](../assets/1518737823-intro.gif)

@kicksopenminds  - our resident Pythonista

![1518736731-taylor.jpg](../assets/1518736731-taylor.jpg)

@CJ - Astronomer's dev team's free safety

![1518736763-cj.jpg](../assets/1518736763-cj.jpg)


CEO @rywalker, noted lover of live blogs.

![1518736786-ry.jpg](../assets/1518736786-ry.jpg)


![1518736812-joker_here_it_goes.gif](../assets/1518736812-joker_here_it_goes.gif)


![1518736820-cj_isnt_late.jpg](../assets/1518736820-cj_isnt_late.jpg)

#### People forget they called him "Mr. Punctual" in high school.

![1518736844-alert_canary_pray.jpg](../assets/1518736844-alert_canary_pray.jpg)

We rolled out the new DAG version to our own Astronomer DAGs first for our website, then for our app.

Bah followed by a prayer emoji...oh boy.

![1518736879-bah_elaborate.jpg](../assets/1518736879-bah_elaborate.jpg)

##### First obstacle (and amibigious bah) averted!

Houston is our GraphQL API - it acts as ground control between all the different services that run our platform.
You can read more about why we chose to write it in GraphQL [here](https://www.astronomer.io/blog/3-reasons-why-astronomer-is-betting-on-graphql/).

![1518736940-popcorn.jpg](../assets/1518736940-popcorn.jpg)

Now the spectators start arriving!

#### 20 minutes in, something is still off

![1518737014-hefty-1.jpg](../assets/1518737014-hefty-1.jpg)


![1518737020-fuck_it_hefty.jpg](../assets/1518737020-fuck_it_hefty.jpg)

Another API explorer never hurt anyone.

![1518737049-uh_oh.jpg](../assets/1518737049-uh_oh.jpg)

### Airflow logs everything to a database, so remember to check your SQL!

Most common phrase in the Astronomer Slack- "wtf Airflow?"

![1518737080-wtf_is_this.jpg](../assets/1518737080-wtf_is_this.jpg)

#### But it's all good because we love Airflow anyways, but it certainly has its quirks...

![1518737122-front_end_date.jpg](../assets/1518737122-front_end_date.jpg)


10:40 - morale was high.

![1518737154-channel_change.jpg](../assets/1518737154-channel_change.jpg)


![1518737165-taylor_dag_caught.jpg](../assets/1518737165-taylor_dag_caught.jpg)

Those are our internal DAGs that control how we handle reporting and inbound marketing.

Over the next half hour, some of our other DAGs caught up successfully as we re-enabled them.

![1518737232-cynical_cj.jpg](../assets/1518737232-cynical_cj.jpg)

### Fun Fact: They also called CJ "Mr Cynical" in high school.

![1518737274-move_fast_and_break_things.jpg](../assets/1518737274-move_fast_and_break_things.jpg)

### Startups, man.

5 minutes later...

![1518737305-logs_logs_logs.jpg](../assets/1518737305-logs_logs_logs.jpg)

A wild @andscooper appears!

![1518737345-ceo_confirms.jpg](../assets/1518737345-ceo_confirms.jpg)

Executive confirmation always helps.

![1518737369-incoming.gif](../assets/1518737369-incoming.gif)

After some investigation, we figured out the issue.
As the scheduler was catching up, it was hitting Houston with a higher than expected request volume.

#### We were DDoSsing ourselves.

![1518737834-weebay.gif](../assets/1518737834-weebay.gif)

### Added some caching magic (added server-side caching on the GraphQL API endpoint), bumped the docker tag, and tried again.

![1518737865-dags_caught_up.jpg](../assets/1518737865-dags_caught_up.jpg)

Some last touch-ups...

![1518737886-cj_all_the_way.jpg](../assets/1518737886-cj_all_the_way.jpg)


![1518737901-its_done.gif](../assets/1518737901-its_done.gif)

Andddddd we're through the finish line. What a rollercoaster of emotions that was!