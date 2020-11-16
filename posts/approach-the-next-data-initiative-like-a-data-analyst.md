---
title: Approach The Next Data Initiative Like A Data Analyst
slug: approach-the-next-data-initiative-like-a-data-analyst
description: 'I’ve experienced great successes ... and epic failures (big data can be a big challenge). From those failures, I’ve developed a few guiding principles.'
heroImagePath: ../assets/blank.png
authors:
  - Sam McFarland
date: 2016-12-07T00:00:00.000Z
---

As a data analyst, I’ve been fortunate enough to have been a part of numerous big data initiatives with several organizations. Some of those projects were big successes, but others were epic failures (big data can be a big challenge). From those failures, I’ve developed a few guiding principles that I use when tackling any new data project, in any industry. So, in an effort to prevent others from repeating my past mistakes, here are my three main tips to a successful foray into big data …

### Start Smaller Than You Expect

It can be hard not to set lofty goals for a project. And with [90% of unstructured data currently unused](https://www.kdnuggets.com/2015/11/importance-dark-data-big-data-world.html), most organizations really do have seemingly endless opportunities to put data to use. But I learned the hard way that it’s best to keep the scope for an&nbsp;initial project relatively small.

In one organization I was a part of, we had a large client who wanted to collect transactional, clickstream, marketing analytics and CRM data to improve their customer loyalty card program. My team created a fantastic plan to engineer the data pipelines necessary to begin piping from each source and build a dashboard for easy analysis. The problem was, we decided to set everything up before beginning _any_&nbsp;analysis work. Time to first value was a solid 3-4 months. Eventually, our relationship with that client went south.

Suddenly, my team found itself a lot smaller and forced, for the first time ever, to prove that we could deliver analysis results quickly. One major prospect promised to sign a contract, but would only uphold their end if they experienced value within 3-4 _weeks_. Out of money, we had no choice but to scramble to meet their demands.

To do that required more focus than we were used to. We started by asking ourselves these simple questions:

- What problem are they trying to solve?
- What is the potential value/impact to the business?
- How will we&nbsp;measure a “successful project”?

We wrote the answers down, set to work and referred back to them frequently to maintain focus. We weren’t about to let scope creep beyond the basics; we’d be sunk.

Turns out, we _could_&nbsp;move forward quickly if we were willing to roll up our sleeves and get started with baby steps instead of mustering energy for a big leap. Setup for data sources like clickstream, marketing analytics and CRM data could be placed in priority order and meanwhile, we could start pulling in easy-to-reach data, like transactional records, immediately.

Better yet, we realized that we were piloting big data integration for an entire organization. Once we knocked an initiative out of the park for one part of the company, others were&nbsp;willing to invest the resources necessary to tackle much larger projects.

### Know More Than Your Data

As you assemble your crack team of data whizzes, you’ll need more than standard project roles (like project manager and project sponsor). Early on, I worked at Facebook, who did this well. Every internal project was comprised of three major skillsets:

- **Data Developer/Engineer** - This person gets the data from all those disparate locations into a central location and a format that is conducive to analysis. 
- **Data Analyst/Scientist** - Somebody has to dig in and find meaning in the madness. If you’re starting to build out basic reporting and dashboards, you can probably get by with a good data analyst. If you’re looking to work with unstructured data or do more advanced analysis (like machine learning), you’re going to want to invest in a data scientist.
- **Subject Matter Expert** - Even the best data scientist in the world isn’t going to be able to solve your problems without adequate knowledge of your business. It’s this person’s job to make sure that the other members of the project team have the context and knowledge to build a meaningful solution.

Facebook did this so well, in fact, that I didn't pause to consider exactly why projects were successful. Which means&nbsp;I didn’t instinctively think to replicate this until it was nearly too late. During my early days at Astronomer, my team&nbsp;supplied data engineers and a data scientist for a&nbsp;customer, as usual, and assumed that our contact there would serve as the subject matter expert. Often,&nbsp;that happens naturally. At the same time, however, our customer assumed that we would do the work on their behalf without much (if any) need for input. After three months of no real value, we finally put two and two together and&nbsp;rectified the problem.

As may seem obvious, subject matter experts are the ones most frequently overlooked in a data initiative, which is detrimental, [if not dangerous](https://www.forbes.com/sites/kalevleetaru/2016/06/12/why-we-need-more-domain-experts-in-the-data-sciences/#19de82143374), to an organization.&nbsp;

### Choose a Practical Technology Solution

The third thing to keep in mind is to be practical when choosing technology. All of us want what's&nbsp;newest and most cutting edge. It makes sense: there’s always some great new tech with soaring promises. But sometimes it isn’t the best solution for the problem at hand. Here are a few areas where I now pursue function over fashion:

- **Data Processing** : I was a part of a company that&nbsp;decided to transfer data from Oracle Exadata (a paid storage solution) to [Hadoop](https://hadoop.apache.org/) (an open source option). We needed to cut costs, and Hadoop was much cheaper, yet had comparable capabilities. The problem is, while the code was open source, implementing the technology and extracting, transforming and loading all that&nbsp;data was a nightmare. What we didn’t realize is that, unless we were regularly processing and analyzing terabytes or even petabytes of data (we weren’t), setting up a Hadoop cluster created unnecessary overhead. Instead, we should have considered a traditional relational database management system (RDBMS) like [Amazon RDS](https://aws.amazon.com/rds/) or [NoSQL](https://nosql-database.org/) solution.
- **Data Analytics** : Right out of college, I worked at a bank. There, nobody had access to data except the IT department. Getting information literally took weeks. Then, on my first day at Facebook, I was given access to _all_ of their data. Even non-tech roles were encouraged to learn SQL, so they could write their own reports and conduct their own analysis. This cemented for me that data and insights are only valuable if they’re easily accessible by those who can&nbsp;benefit from them. Consider [interactive dashboards](https://www.astronomer.io/blog/six-open-source-dashboards) and query editors that allow decision-makers to do lightweight, self-service analytics.
- **Data Storage** : Since real-time data is only valuable when you can weigh it against an accumulation of patterns and trends, find a storage solution that can scale with you. Many cloud-based services allow a quick time to first value and proof of concept. I used to have clients who required internal hosting, but I found almost all these solutions more expensive and less intuitive. If a client doesn’t require staying off the cloud, don’t. Services like [Amazon Redshift](https://aws.amazon.com/redshift/) or [Google BigQuery](https://cloud.google.com/bigquery/) reduce the need to deal with setting up a complicated data warehouse, freeing up resources to focus on solving the data issues at hand.

Data initiatives can be overwhelming, but they don’t have to be. Want to begin tracking every step of your customers’ or users’ behavior on your web or mobile app? Need to collect data from a new, hard-to-reach or third party source? Notice that you’ve got data in your organization that hasn’t been included in analysis? With the right tools, you can do almost anything with data these days. Just start small (you can always go bigger), get a variety of skillsets on your team (especially a subject matter expert) and choose the technology that’s most practical (even if it’s not the most sexy). Successfully implementing one big data initiative will make the next, bigger one even simpler.

