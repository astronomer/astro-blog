---
title: Liberated Analytics
slug: liberated-analytics
description: 'Having past the tipping point of too much data, businesses will begin to feel the effects of the slow, yet unstoppable force of liberated analytics.'
heroImagePath: ../assets/660px-Diffusion_of_ideas.jpg
authors:
  - Ry Walker
date: 2016-02-18T00:00:00.000Z
---
<!-- markdownlint-disable-file -->
If you hadn’t noticed the trend before, you will now. The world has gone analytics crazy. And for good reason, the amount of data available to businesses about their business has reached a tipping point where the problem has shifted from lack of data to too much data.

- **Old big guys** — Did you notice all the [IBM Analytics](https://www.ibm.com/analytics/us/en/)&nbsp;advertisements during the TV broadcast of Masters golf tournament a few weekends ago?
- **New big guys** — There are so many companies raising huge amounts of VC money in the space — [Domo](https://www.domo.com/),&nbsp;[Bime](https://bimeanalytics.com), [GoodData](https://www.gooddata.com/), [Chartio](https://chartio.com/), [Looker](https://www.looker.com/), [Klipfolio](https://www.klipfolio.com/), [Datameer](https://www.datameer.com/), [Birst](https://www.birst.com/), [Dataminr](https://www.dataminr.com/), and the list goes on and on.
- **Analytics as a feature** — Many products are building in analytics/metrics/visualizations, because they know demand is exploding.

There is a trend in analytics that is still quite early — in the “innovator’s stage” according to Roger’s [Diffusion of Innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations)&nbsp;model:  
  
  
  
**Liberating your analytics data from vendors**  
  
Consider this progression:

- [Agile](https://en.wikipedia.org/wiki/Agile_software_development)&nbsp;Revolution — Fifteen years ago I learned about XP and Agile, where the push was to stop doing big, monolithic software projects and instead break it down into an iterative approach. Agile is in the late majority phase.
- [Lean Startup](https://en.wikipedia.org/wiki/Lean_startup)&nbsp;Revolution — Five years ago I learned about Lean Startup, where the push was to stop doing big, monolithic startups and instead break them down into an iterative approach. We’re still in the early adopters phase.
- Liberated Analytics Revolution — Stop implementing big, monolithic analytics solutions, and instead follow an iterative approach, on top of data you control.

In the same way agile and lean startup are slow-moving, yet unstoppable forces, _liberated analytics_ will follow suit, because it depends upon a lot of the same underlying trends.  
  
The components I propose:

- Freedom over Lock-in
- Modular over Monolithic
- Realtime over Batch
- Datawarehouses over Databases
- Beautiful over Ugly
- Low cost over High Cost
- Self-serve over Sales-driven
- Tidy over Bloated
- Open over Closed

**Freedom over Lock-in**  
  
In the past, software vendors sometimes snickered in the board room with statements like “it’ll be impossible for them to leave us because we’ll have their data. MWA HA HA!"  
  
These days, smart companies like [Salesforce](https://www.salesforce.com/)&nbsp;and others are using “it’s your data” as a feature to the client, because we don’t like being locked in. They make it easy to export all your data if you’re leaving, and provide a great API to access your data while it lives at Salesforce. This is the model that all SaaS vendors should move towards, otherwise they’re on the wrong side of the trend.  
  
However, most of the analytics options you’ll encounter have some form of data lock-in.  
  
_Our vision — we take this a step further. We want to run our product on top of a datawarehouse that you have full control over, that pulls data from all sources and maximizes your flexibility to choose tools without a data lock-in consideration._  
  
**Modular over Monolithic**  
  
Across software, there is a general trend towards modularity. In young programming frameworks like [Meteor](https://www.meteor.com/), for example, the community has already accumulated nearly 5,000 “packages” of complete functionality that any developer can pull into their project. In fact, it’s considered a “smell” in that community if you’re writing a lot of code--you’re probably doing something wrong.  
  
You can see this trend in application hosting too;&nbsp;[Docker](https://www.docker.com/)&nbsp;has everyone rewriting their PaaS because of the modularity/flexibility it brings to the table can be a big strategic advantage.  
  
A lot of analytics products are still pursuing a monolithic/integrated structure because it’s the well-worn path. Since a small minority of companies control their own data competently today, there aren’t many solutions targeting that crowd. But these tools are EXPENSIVE and painful to implement. And once you get into SMB where business models can change more often, flexibility becomes significantly more important.  
  
There's a saying in VC-land that the only way to make money is to decouple or integrate things, but the general overall trend is definitely pointing towards the decoupling side of that equation. There is a lot of new power being built to enable businesses the freedom to select focused, best-of-breed tools, as needed.  
  
_Our vision — we’re writing it to be as modular as possible, and we'll open source most if not all of it._  
  
**Realtime over Batch**  
  
Cheap, accessible tools continue to emerge for real-time data processing. Google recently launched [DataFlow](https://cloud.google.com/dataflow/), Amazon launched [Kinesis](https://aws.amazon.com/kinesis/), and [Apache Spark](https://spark.apache.org/)&nbsp;continues to gain prominence.   
  
The tools continue to improve and are more accessible than ever because of the growth of cheap cloud computing availability. It does require more technological sophistication, but that’s the only barrier, and it get’s lower every day.  
  
_Our vision — our recipes provide real-time or near real-time access to the information generated from your raw data._  
  
**Datawarehouses over Databases**  
  
Data warehousing used to be a term associated only with “enterprise” companies, coming from big companies like IBM. It seemed like a luxury, and it was very expensive.  
  
Now there are a wide range of very low cost tools that enable EVERY COMPANY to store their business data in an analysis-friendly format — [Keen IO](https://keen.io/), [Amazon Redshift](https://aws.amazon.com/redshift/), [Cassandra](https://cassandra.apache.org/),&nbsp;[Hadoop](https://hadoop.apache.org/), [Google BigQuery](https://cloud.google.com/bigquery/).  
  
_Our vision — even small companies should keep their own data warehouse, and our products are built on this worldview._  
  
**Beautiful over Ugly**  
  
UX has come a long way in recent years, there’s no reason you have to look at information that makes your eyes bleed. The days of ugly products staying relevant is going away (baffling exception: [craigslist](https://www.craigslist.org/)). And with tools like [D3.js](https://d3js.org/), you don’t have to present a grid of numbers to people. It’s incredibility easy now to build compelling visualizations that promote quicker comprehension of the business situation.  
  
And once you have the analysis occurring in real-time, you can generate visualizations in real-time too. This should be the norm.  
  
_Our vision — build tools that tell a story even if no numbers are present. Allow the visual pattern-matching part of our brains to get involved. Ultimately, answer business questions quickly and simply._  
  
**Low Cost over High Cost**  
  
There are a lot of VC’s who might argue against this, but I don’t think we can deny that overall, products are getting cheaper. Any SaaS vendor who tries to be the most expensive option will face a powerful erosive force. Some companies, like [Domo](https://www.quora.com/Business-Intelligence/How-is-Domo-priced-and-how-does-it-compare-with-Tableau-and-QlikView), are still living in a world where they charge $200k, even to small businesses.  
  
[Google Cloud](https://cloud.google.com/)&nbsp;and [Amazon Web Services](https://aws.amazon.com/)&nbsp;get it. They launch big, valuable services that just seem ridiculously cheap.  
  
Companies like [Keen IO](https://keen.io/)&nbsp;provide a generous free tier that works for early stage companies, and generally low price points.  
  
_Our vision — our products will never be done, and they’re never going to be a perfect fit for every customer. Pricing needs to be flexible to match customer value._  
  
**Self-serve over Sales-driven**  
  
This goes along with the cost trend — the lower the cost, the more you can expect customers will serve themselves. Amazon and Google don’t have to provide much professional service support to their cloud platforms, because the extremely low cost motivates companies to figure it out themselves.  
  
If you have the lowest cost possible, customers will pour over your docs and deal with limited support, effectively reducing your acquisition cost to near zero.  
  
_Our vision — provide great documentation and knowledge base to enable self-service use of our products._  
  
**Opinionated over Bloated**  
  
Tools that let you connect to any database and create any chart you want are a bit lazy in my book. They haven’t taken the time to really understand customer problems and provide opinionated, as-small-as-possible solutions.  
  
Tools like [BareMetrics](https://baremetrics.com/), [Stripe](https://stripe.com/), and [Buffer](https://buffer.com/)&nbsp;are great examples of what an opinionated product looks like. They’re very lean on functionality, and the users love them for that.  
  
The principle here is to do less analytics, measure and report on what matters, be opinionated about it. Yes, you need some ad-hoc tools, but it’s plain lazy to just present to the user that they can ask “whatever they want.”  
  
I’m reminded of this quote:

_“I didn't have time to write a short letter, so I wrote a long one instead.”_ - Mark Twain

_Our vision — build small solutions to targeted problems. It’s OK to leave gaps that will be filled by other products. Because of our support of all the other trends above, we don’t need to try and be the all-in-one answer to every problem._  
  
**Open over Closed**

_"Open source is eating the software world.”_ — Michael Skok

_Our vision — We couldn’t agree more. As we complete components of our software, we’ll open source all or most of it. I’d rather control the open-source version of our software than watch someone else do it, because it maximizes the value we provide to the world, and has a positive impact on our brand._&nbsp;

What other companies are following this "liberated analytics" trend? I know there are more, and I want to learn all about them. Let’s discuss on [GrowthHackers.com](https://growthhackers.com/liberated-analytics)&nbsp;or [Hacker News](https://news.ycombinator.com/item?id=9420561).

