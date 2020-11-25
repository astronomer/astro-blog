---
title: 4 Pillars to Becoming Data Driven
slug: 4-pillars-to-becoming-data-driven
description: 'When I wanted to improve the health of my company, I took this approach: just get started.'
heroImagePath: ../assets/wallpaper2560x1600b.jpg
authors:
  - R. Brad Kirn
date: 2016-08-11T00:00:00.000Z
---

When I was a part of my first startup, I came to a realization about data pretty early on. At first, every new deal was exciting. Our metrics grow one by one, from new customers and use cases to new industries and partnerships. Studying industry trends and making gut decisions as fast as we could was exhilarating and, for a while, seemed to work just fine.

But you can probably guess what came next: potential investors wanted deeper&nbsp;insight into the business performance and growth projections.&nbsp;Suddenly, gut wasn’t good enough.

### **The Need for Data**

I realized quickly that I needed data, but I didn’t know where to begin:

> How should I collect data? What data should I collect? Better yet, why exactly am I collecting it?

For me, the key was to start small. I’ve used this approach&nbsp;before, actually, when I&nbsp;wanted to start running. A few years ago, the concept of running was a distant fantasy.&nbsp;I didn’t have time and I was starting from scratch. But I wanted to get in shape, so I came up with a plan to gradually build up my endurance one half-mile at a time. By running a half-mile two days a week, I soon pushed it to one mile two days a week and slowly increased to my current schedule of 3 miles, 5 days a week.

Building a solid data foundation requires the same approach: just get started. When I wanted to improve the health of my company, I started by taking some small, easy steps and expanded from there.

### **Getting Started with Data**

I now believe in these steps so deeply that I came to Astronomer, which is all about outfitting organizations to meet their data goals. The funny thing is, even a data company like Astronomer has to start somewhere – somewhere small and focused. Since Openness is one of our core values, I’m going to share a few of the pillars we recommend (and used ourselves) for building your data organization:

#### **1. Work with the data you have.**

You can always collect more data. First though, make your existing data&nbsp;as valuable for the company as possible by leveraging&nbsp;analytics. Many great tools&nbsp;exist for this, like:

- [Leftronic](https://www.leftronic.com/) - BI dashboard
- [Periscope](https://www.periscopedata.com/) - BI dashboard 
- [Keen.io](https://keen.io/) - app data analytics
- [Hubspot](https://www.hubspot.com/) - customer relationship management (CRM) and website analytics
- [Google Analytics](https://analytics.google.com) - website analytics
- [Hotjar](https://www.hotjar.com/) - website/app analytics (heat mapping)
- [Amplitude](https://amplitude.com/) - website/app analytics

Each of these tools offers significant value, depending on your needs. Take Amplitude, for example. It allowed us&nbsp;to fully and automatically track the Astronomer user journey (among other things). Initially, during the signup process, our&nbsp;goal had been to get an email address as quickly as possible. Then we’d message that prospect and, hopefully, get the rest of their information.

With Amplitude, we figured out that 85% of our signups went inactive immediately. Going against our initial gut feeling (data will do that to you), we made the signup process a bit more of a time investment by asking for a&nbsp;company and position, adding a notes field and building an automated email that felt at least somewhat personal. Not only did signup churn decrease, but our sales cycle actually dropped by 14 days (incredible!) and the average contract value increased 25%...bingo!

#### **2. Collect more data.**

In the early stages of a business, you’re either trying to sell to everyone or focusing on a specific group. Either way, the data you collect will help you navigate the rest of your path. We implemented a data warehouse and started collecting _everything_, using an [Amazon Redshift](https://aws.amazon.com/redshift/) instance for our analytics database (because [we were an Amazon shop](https://www.astronomer.io/blog/why-we-built-our-data-platform-on-aws-and-why-we-rebuilt-it-with-open-source)) and the Astronomer Platform to collect and load the data into Redshift. There are other options out there too, like [Google BigQuery](https://cloud.google.com/bigquery/), which is similar to Redshift, and [Postgres](https://www.postgresql.org/),&nbsp;for lower volume collection and analysis.

#### 3. Get a data scientist.&nbsp;

With tons of raw data piping into a data warehouse every second of the day, Astronomer had a floodlight showing us where to go. But we wanted to know more about our data, so we hired our own data scientist. A data scientist seemed expensive at this stage, but we decided it was worth the risk.

The first thing he did was dive into our data. After a quick survey, he said we didn’t have enough. DIDN’T HAVE ENOUGH?! We’ve been collecting everything for months!&nbsp;

With his guidance,&nbsp;we rolled up our sleeves and tried to get as data-greedy as we could. We immediately started strategizing&nbsp;about ways&nbsp;to collect raw data from various _additional_ sources, like our agency partners, in order&nbsp;to deepen our understanding of our target industries and clients.&nbsp;The funny thing is, our data scientist still wouldn’t be satisfied. We could never have too much data, but most importantly, we’d now know the questions we could answer ...and the ones we couldn’t.

#### 4. Let the data be your guide.&nbsp;

After all, what good is data or analysis if you don’t do anything with it? One of the most important decisions we&nbsp;made happened soon after we started tracking our sales cycle with Hubspot, one of the analytics tools we use. As a starting point, we estimated it at 65 days. That one metric alone enabled us to&nbsp;deal with the truth: our sales cycle was too long. Data reveals where you need to change, and we _needed_ to change the sales process.

The good news is, the other steps we were taking&nbsp;allowed us to do that easily. By&nbsp;adding “Decay” to each stage of our pipeline in Hubspot, we limited the time a deal could sit in the “Lead” pipe and get stale. Every prospective deal had to keep moving or die. If it wasn’t exciting enough for our sales team to nurture and manage, we shouldn’t be spending time on it. One of our goals was to close more deals, faster. Now we finally knew what “faster” meant.

Our world is&nbsp;entering a Data Revolution, and [it’s time to get ready](https://www.astronomer.io/blog/how-to-succeed-in-the-data-revolution). Any healthy company – no matter how big or how small – can start letting data be the driver or, at least, a key influencer. All you have to do is choose one small first step and get started.

_If you still have questions or wonder how Astronomer can help, email me at_ [_brad@astronomer.io_](mailto:brad@astronomer.io)_._

![mobilewallpaper-1.jpg](../assets/mobilewallpaper-1.jpg)  
[Download This Wallpaper](../assets/wallpaperiPhone6a-1.jpg)

&nbsp;

