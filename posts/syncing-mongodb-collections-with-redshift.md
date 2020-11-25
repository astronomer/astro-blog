---
title: Syncing MongoDB Collections with Amazon Redshift
slug: syncing-mongodb-collections-with-redshift
description: 'When it came time to scale up our reporting, we realized we were missing some crucial data. Good thing we built a connector between MongoDB and Redshift.'
heroImagePath: ../assets/blank.jpg
authors:
  - Ben Gregory
date: 2016-03-15T00:00:00.000Z
---

A few months ago, we started using [Periscope](https://periscopedata.com)&nbsp;to create a centralized view of how our product was performing. We had already begun the practice of using Amazon Redshift as the single source of truth for our app event data, logs from AWS, and various records from other sources (all pushed using Astronomer, of course) but any questions we had were answered on an ad hoc basis. As our team grew, the complexity of our organization kept pace and those of us who knew SQL started to get bogged down with these ad hoc requests. Effective reporting became an essential asset and we weren’t set up for that. 

Not yet, at least. We were interested in a number of questions: &nbsp;

- How many active apps today?&nbsp;Last week?
- How much data was processed today?&nbsp;In the last hour?
- How does the above compare to last week?&nbsp;Last month?
- What are our most popular integrations?
- How many errors have occurred?&nbsp;Which integrations were these in?
- How is our infrastructure performing?&nbsp;Last 5 Min vs. 24 Hours?
- What are the Top Users&nbsp;for today?&nbsp;For the week?

All of this was relatively simple…well, almost. We realized in answering the above questions that we were missing one piece of crucial information. The actual names of our apps... 

We use MongoDB as our application&nbsp;database so when someone makes a new application within our system, a unique id is automatically generated and tied to it. Because this id is guaranteed to be unique (unlike the name of the application), this is the value that we use when tracking events throughout our system. If we see a datapoint with this id, then we know the datapoint is absolutely tied to it. Properties like app name would be redundant and can possibly be changed. &nbsp; 

But in pushing everything to Redshift without a human readable signifier, we had unwittingly set ourselves up for failure when it came time to handle reporting. Well, that would have been the case, at least, unless we happened to have built a way to connect our MongoDB with Redshift. Funny about that. 

### Enter Aries

Using multiple databases is common practice in modern application development. At Astronomer, we use three different databases for production and reporting, not including our backups and long-term storage systems. Different systems have different advantages that make them the right choice for different parts of your stack. But, as shown in our very simple use case, these databases need to be connected in (near) real-time or else you're going to start seeing gaps in how you can build your product and what you can eventually report out on. This is the thesis that our new platform, ARIES, is predicated on and one we believe will become increasingly important as the proliferation of specialized DBaaS meets the growing demand for data-driven products and decision-making. &nbsp; 

### Back to Reality

Syncing a document oriented database (MongoDB) that has a dynamic schema with a SQL based one (Redshift) that requires a strictly defined schema is clearly going to bring about problems. You can't simply 'COPY' from MongoDB in the same way you can with a CSV living in S3. Mongo stores records as JSON/BSON while SQL databases use tabular storage, formatted most closely to a CSV or TSV. So the process to get data from one to the other needs to happen in stages.
; 
- E) Export out a specified collection from MongoDB to a JSON file.
- T) Convert this JSON file to a structured format, in this case a CSV.
- L) Create/modify the Redshift schema and perform a Redshift 'COPY' command to load in the data&nbsp;from S3.

Because Redshift is unlikely to be the sole place that we or anyone else is going to want to connect to their MongoDB, we decided to modularize each stage of this ETL process so they can be reused or swapped out with any number of other connectors. This will be a consistent rule of connectors to Aries.

### So how does it work?** 

#### Step 1 - Export from Mongo
The system currently takes in an arbitrary Mongo query as its input and executes it on the schedule and collection you specify. We load the result into memory (NOT a good solution if you’re looking to replicate at scale but for our MVP, it would work just fine) and write it to a JSON&nbsp;file in S3. It wraps up by returning the location of the file. 

#### Step 2 - JSON to CSV

This step isn’t really too exciting; it takes in the returned value of the last step (reminder: the location of the JSON file; in this case, within S3) as its input, reads that file into memory and flattens it into a CSV. This new file gets dumped back into S3 with the end location again being returned. All artifacts from previous steps (i.e. the JSON&nbsp;file) are subsequently removed and discarded. 

#### Step 3 
Setting the stage for the COPY command (oh, and actually doing it) This step is fun. First, the system takes in the location of the previously created CSV and infers the appropriate schema by scanning the document and calculating the probability that each field is a certain type. On top of this, we have a number of safeguards that can be set to override these probabilities in cases where multiple types are equally probable. (i.e. if a column is all 1s, is it a boolean or an integer?…depends on who you ask…) 

Now that we have the location of the CSV locked and a table ready to be created in our Redshift with a conforming schema, we have to make some hard choices. If a similar table doesn’t already exist, awesome. No problem at all. But if it does, we must choose from two strategies: 

1. **Append the incoming data to the existing table** - This option is tough. We first have to compare the inferred schema with the existing one and resolve the differences. We can do this by either adding new columns or altering existing columns. Redshift does not allow you to actually alter a column like some relational databases do, so it's a little more complicated. We don't like to do this and will add enhancements in the future to prevent this as much as we can.  
  
2. **Drop the target table and start from scratch** - This option is better. It pretty much does what it says; we drop the targeted existing table and start entirely from the inferred schema. 

After the target table is ready to handle the incoming data, we just do a standard Redshift 'COPY' from S3 and automatically discard the CSV artifact. 

### Cute, but what about at scale?

Fine, you caught us. What we described is nowhere close to being an efficient method of transferring large amounts of data from MongoDB to Redshift or otherwise.&nbsp;It'll work if you want to tinker on your side app but never for production. 

First of all, the method described reads everything into memory when transforming the data. Unless you have a machine with a few terabytes of memory (if you do, call us), this ends up being an extremely limiting design constraint.&nbsp;It'd be much better to, say, stream the data from Mongo, transform the data mid-stream, and then write directly to the end destination. Generally, anything coming to/from S3 or Mongo should really be done via streams. 

Secondly, the above would need to happen either ad-hoc (not great) or via a scheduled cron job (better; still not great.) When you're dealing with your application database (whether MongoDB, SQL, whatever), you want as realtime as possible.&nbsp;We accomplish this in production&nbsp;by watching for changes in [MongoDB's Oplog](https://docs.mongodb.org/manual/core/replica-set-oplog/) and resolving the differences with the target databse (Redshift) in near real-time.  

Again, what we described purely meant to describe&nbsp;MVP of what's possible. Our production-ready version is designed to avoid these memory and scheduling constraints. 

### Building a Modular DataHub

MongoDB to Redshift is a crucial pipeline but it's just the beginning of ARIES. Each component of this pipeline is designed to be compatible&nbsp;with as wide a toolset as possible as well as be modified without issue by any user to fit their specifications. Do you disagree with everything we've described above? Do you think our inferred schema probabilities are ridculous? Fork the repo, change it how you want, and plug it back in. Aries is as simple as that.