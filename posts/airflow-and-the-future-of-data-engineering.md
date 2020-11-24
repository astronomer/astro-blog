---
title: "Apache Airflow and the Future of Data Engineering: A\_Q&A with Maxime Beauchemin"
slug: airflow-and-the-future-of-data-engineering
description: 'I reached out to Max about doing an interview post, and to my delight, he agreed. Here are thoughtful answers to questions about Airflow and data engineering.'
heroImagePath: ../assets/airflowdeHeader.jpg
authors:
  - Taylor Edmiston
date: 2017-02-28T00:00:00.000Z
---

Every once in a while I read a post about the future of tech that resonates with clarity.

A few weeks ago it was [The Rise of the Data Engineer](https://medium.freecodecamp.com/the-rise-of-the-data-engineer-91be18f1e603#.95a26363n) by [Maxime Beauchemin](https://medium.com/@maximebeauchemin), a data engineer at Airbnb and creator of their data pipeline framework, [Airflow](https://airbnb.io/projects/airflow/). At Astronomer, [Airflow is at the very core of our tech stack](https://www.astronomer.io/blog/airflow-at-astronomer): our integration workflows are defined by data pipelines built in Airflow as directed acyclic graphs (DAGs). A post like that gives validation as to why right now is the best time for a company like Astronomer to exist.

After reading the post, I reached out to Max about doing an interview post, and to my delight he entertained the request with thoughtful answers to our questions about Airflow and the future of data engineering. You’ll find his answers below, but first I’d like to add a little context.

You might be wondering, "What is data engineering and why does it matter?"

In _The Rise of the Data Engineer_, Maxime defined **data engineering** as:

> The data engineering field could be thought of as a superset of business intelligence and data warehousing that brings more elements from software engineering.

The data engineer exists because companies today have massive treasure troves of data, but to provide value the data must be extracted. The data engineering toolbox is how we make sense of it all quickly and at scale.

Without further ado, let’s get into the questions from Max:

---

The great people at Astronomer.io reached out asking to do a short interview about [Airflow](https://github.com/apache/incubator-airflow) and [data engineering](https://medium.freecodecamp.com/the-rise-of-the-data-engineer-91be18f1e603). Here are the few questions and along with my answers:

#### Question 1: When are the next releases of Airflow gonna drop, and what are the major features you’re excited about?

The 1.8.0 release candidate just got voted positively and is right around the corner. This is the first release that was not driven by Airbnb. Bolke de Bruin from ING in the Netherlands did an amazing job getting this release out. Getting a release out is a huge amount of work that increases as time since the last release grows. This is the first release since 1.7.1.3 that got out on June 13th 2016.

The CHANGELOG since 1.7.1.3 is gigantic. Here a some of the highlights from my particular perspective:

- a multi-threaded scheduler, allowing for much faster scheduling cycles and fault tolerance while importing DAG files. Prior to this, a simple `sys.exit()` in a DAG file could take down the scheduler
- replaced the Highcharts charting library by NVD3. Highcharts has a non-Apache compatible license and ripping it out takes us out of a legal grey zone
- Unix impersonation and cgroups, allowing to run tasks as a specific Unix user, and specifying cgroups to limit resource usage at the task level. This keeps one task from hogging all resources and threatening an Airflow worker
- solid Google Cloud Services (GCS) integration with improved operators and hooks
- a better more modular dependency engine, making for more maintainable and extendable code, allows for the “why isn’t my task running” new feature on the UI
- fixed all issues around handling “zombie” and “undead” processes
- better pool handling where there was over-subscription before in previous versions
- new sets of operator & hooks
- tons of usability and bug fixes across the board

We're hoping to get a more steady release train going following this schedule, though there’s no official commitment to do so as of yet.

#### Question 2: How has the transition from an internal tool at Airbnb to an Apache project been?

It’s been smooth. Apache scaled community contributions by allowing for many external committers to merge pull requests, accelerating the pace of change in the project. On the other hand it has slowed down the pace at which releases come out, forcing us to manage our own release branch, composed of the previous official release plus a list of “cherries” which represent the list of commits we bake on top of that release. We also now tend to develop on this internal branch, and push the PR out to the community once it’s been stabilized in production on our side.

We’ve enjoyed the help we’ve receive in driving the latest release, and watching the project thriving with limited involvement on our side. I used to personally review and merge every single PR, and that got way out of hand over the past few years. It’s great to see these virtuous cycles and this joyous “pyramid scheme” evolve over time.

#### Question 3: How do you see Airflow’s usage progressing? Over the next 5 years, what new applications of Airflow will pop up?

The data infrastructure ecosystem has yet to show any sign of converging into something more manageable. It seems like we’re still in a huge phase of expansion where every new day bring new distributed database, new frameworks, new libraries and new teammates. As these systems get more complicated and evolve rapidly, it becomes even more important to have something like Airflow that brings everything together in a sane place where every little piece of the puzzle can be orchestrated properly with sane APIs.

As Airflow reaches feature completeness in the orchestration world, we can assume that integration with other system (hooks and operators) is an area of growth.

Where the original assumption was that Airflow would act mostly as an orchestrator and not taking on real workload, it appears that many use Airflow workers for more complex workloads like running R scripts, Python data processing tasks, ML model training, ranking, … While we internally encourage people to write services and leverage infrastructure like Kubernetes or Yarn for this type of things, it appears like there’s a need for Airflow to grow in that direction as well, with support for containerization (please run this task inside this Docker container!), and resource management (allocate 4 cpus and 64GB of ram to this job please). We're aware of the constraints that people may have in their environment and want to allow them to get the most mileage out of Airflow. So if you Kubernetes cluster laying around we should make the most of it, if you don’t you we want you to be able to be able to run your jobs in Airflow in the meantime.

I believe Airflow is positioned to be the batch process orchestrator that will dominate the next 5 years. We have a solid technological foundation and a large, high-momentum community!

#### Question 4: How do you view similar technologies in the space, such as Luigi, Azkaban, etc?

I personally haven’t used Luigi, Azkaban or Oozie so I’ll just be echoing words from refugees and castaways from these communities that have since joined the Airflow community.

About Luigi, it is simpler in scope than Airflow, and perhaps we’re more complementary than competition. From what I gather, the main maintainer of the product has left Spotify and apparently they are now using Airflow internally for at least some of their use cases. I do not have the full story here and would like to hear more about it. I’m thinking that many of the companies choosing Luigi today might also choose Airflow later as they develop the need for the extra set of features that Airflow offers.

About Azkaban, it's unclear to me who uses it outside of LinkedIn. It appears that the project doesn’t really have an active community at this point and I doubt that the project will start growing in that direction. Outside of LinkedIn, I’ve heard of a few anecdotal instances of companies running it, where someone close to the project at LinkedIn would have left the company and started at some other place wanted to stick with what they know.

Oozie is the piece of software I've heard most negative feedback on, ever. Try to find one Oozie user out there that is not in the core circle that has overall positive feedback on it. Just try! It may be one of these things where the project has solved some of the core issues people still complain about, but I think the name is tarnished and cannot be salvaged.

I firmly believe in configuration as code as a way to author workflows, and I see that Airflow’s relevance in the modern data ecosystem is growing steadily. It certainly appears as though every startup that is serious about data & analytics in the Bay Area is running Airflow at this point.

[https://www.timqian.com/star-history/#apache/incubator-airflow&spotify/luigi&apache/oozie&azkaban/azkaban](https://www.timqian.com/star-history/#apache/incubator-airflow&spotify/luigi&apache/oozie&azkaban/azkaban)

#### Question 5: How will data engineering as a discipline change startups in the next 5–10 years?

Modern startups don't treat analytics and data as an afterthought anymore. They typically onboard their first data scientist early on, and the first wave of engineers will instrument some vital analytics in early versions of their product. VCs demand accountability and may provide the services of a "growth hacker" early on to provide guidance to startup and to measure their potential return on investment and see where to double down.

I think future startups will be catapulted up the data maturity curve with access to better, cheaper, more accessible analytics software and services. A lot of the work is already getting comoditized through open source packages, but there's also a growing array of integrated vendor solutions like MixPanel, Interana, Optimizely, and a growing offering on cloud providers like AWS, GCS and Microsoft.

Things that used to be bleeding edge like real-time Olap analysis, anomaly detection, A/B testing at scale and user segmentation an cohort analysis are now at reach of any startup with a minimum of talent and proper founding.

While these offerings become more available, they become a necessity to stay competitive, and provide opportunities for agile startups to hop over established slow players in the field.

### Takeaway

In 2011, Marc Andreessen wrote the popular essay _Why Software Is Eating The World_. In 2017, the machines running all of that software are producing mountains of data, much of it valuable but only with the right tools to make sense of it all.

As a framework, Airflow provides a workflow-level abstraction for data pipelines. Astronomer’s DataRouter builds upon it as a service for data pipelines from any source to any destination. You can learn more about [how Astronomer uses Airflow](https://www.astronomer.io/blog/airflow-at-astronomer) and [our open source philosophy](https://www.astronomer.io/blog/our-open-source-philosophy) in recent blog posts.

**Startups no longer just build software — we create products and companies where data insights are the fuel powering the spaceship.** As the data engineering ecosystem continues to blossom, expectations about the quantity and quality of insights startups draw from their various data sources will continue to rise as well.

**_\*\*Special thanks to Maxime for taking the time to talk with us and share his thoughts._** _**&nbsp;You can also find this post [in its original form on Medium](https://medium.com/the-astronomer-journey/airflow-and-the-future-of-data-engineering-a-q-a-266f68d956a9#.9irbbok3n).**_
