---
title: 'Improving Government Services with Apache Airflow: A Q&A with San Diego’s Chief Data Officer'
slug: improving-government-services-with-apache-airflow
description: Applying Airflow in the public sector to operationalize public data
heroImagePath: ../assets/1516911852-pexels-photo-373543.jpeg
authors:
  - Pete DeJoy
  - Viraj Parekh
  - Maksim Pecherskiy
date: 2018-01-25T00:00:00.000Z
---

## Introduction

When we set out to create a [podcast about Apache Airflow](https://soundcloud.com/the-airflow-podcast), we didn’t quite know what to expect; we had a strong conviction that Airflow would be a major player in the future of data engineering, but the field is still very green and we hadn’t yet spoken to people that were running native Airflow rather than Airflow on Astronomer. To our delight, we ended up meeting some really brilliant and articulate people, all of whom were using airflow in unique ways to solve specific problems. One of the most interesting interviews we had was with [Maksim Pecherskiy](mrmaksimize.com), the Chief Data Officer of the City of San Diego. While we had spoken to many interesting folks running Airflow to solve their company’s data problems, we had not explored the use of Airflow in the public sector.

Maksim has a background in software engineering and landed a fellowship with Code for America in 2014. The fellowship sent him to Puerto Rico, where saw how much of a tangible impact that technology can have on people’s lives when applied correctly. After his fellowship, he landed his current job as the CDO of San Diego, where he runs the entire data and analytics team for the city, helping to operationalize public data so that both government employees and citizens can use it to ask intelligent questions about their infrastructure.

Maksim was also kind enough to give us a follow-up interview, where we further discussed his use case and how he approached learning Airflow on his own in order to put it to use for the city. He’s up to some extremely exciting stuff- keep reading to hear what he had to say!

## Q&A with Maksim

**1. What led you to your Code for America fellowship and how did that impact the trajectory of your career? **

I’ve loved computers and technology ever since my Dad got me my first computer at 8 years old. I love to use technology to create things, to bring things to life. I spent most of my career as a software engineer at various startups, contracting for awesome people and working on some amazing projects.  However, there was always something missing. I loved doing these cool things, but I’ve always had the feeling that the skills I had could be applied in a more meaningful way than just building yet another website.  

Somehow I met Alan Palazollo, one of the original CfA fellows at a DrupalCon. He told me about Code for America, and I decided to apply. Somehow, I got in and convinced my wife to support my crazy idea of moving to California … to take a paycut.  But hey - we lived in Chicago at the time, and there’s only so many Snowmaggeddons you can take. 




![1516912306-giphy-3.gif](../assets/1516912306-giphy-3.gif)

We worked with the government of Puerto Rico to develop PrimerPeso, a way for business owners to find incentives from the local, state and federal governments to help their businesses.  What really blew my mind at the time was that it was not a difficult technology problem. But execution depended on finding the right problem and the right way to solve it and getting the data in the right place.  

When the 11-month fellowship was coming to an end, I really got hooked on working on government technology. What’s better than using my skills to help people? And then I saw the SD CDO opportunity come up.  There’s actually an interesting story there, as well
https://www.youtube.com/watch?v=6BGw2Msv2Wg. 



**2. How did you end up using Airflow? **

The city has 36 different departments using a variety of technologies and data sources.  From the beginning, we knew that for the data program to be successful, it could not rely on humans uploading and curating data by hand, as is the case in many other cities.  We also knew that a lot of people were already generating reports and curating them manually for a variety of other reasons.

We knew we needed something to automate our data processes.  We initially started off with FME, which is a GUI software for accomplishing these tasks.  However, we quickly ran into problems: dragging boxes around is surprisingly more complicated than writing code.  We couldn’t version-control FME jobs, so we kept having collisions and failures and we could not quickly add new data sources.  Lastly, having job dependencies that were smartly aware of their parents was really hard and scheduling jobs meant buying yet another piece of server software we had no control over.  

We ran the data portal with FME for about 4 months, and then we decided that our process was not sustainable.

We did some research and decided to implement Airflow.  We have an innovative city and a forward-looking IT department, so getting them to run Airflow on-premises was straightforward.  We already use quite a bit of open source software in certain places within our network.  


**3. How did you learn Airflow on your own?**

I have experience from previous jobs in DevOps, and I’ve seen tooling get complicated to the point where developers would spend the majority of their time getting something to run rather than working on improving it. We designed the architecture for how airflow runs with 3 key concepts in mind:

1. Simplicity
2. Replicability  
3. Security

Let’s start with simple. Simplicity is often synonymous with being opinionated. So we defined everything from where the base data lives, where the temp data lives, how the docker containers are spun up, how the DAGs are structured, how the task flow works, which  operators we should and should not use, and how we connect to new source systems and new source types.  

As a result, my team doesn’t have to tinker too much with anything in airflow outside of Python packages and dags.  In addition, we built some features into the docker containers that let us spin up a Jupyter notebook environment that replicates the environment the dags will run in, so our team can prototype data processing in Jupyter. 

We also never wanted to run into the “well, this works on my computer” situation so we heavily invested in running Airflow and supporting databases, queues, etc using docker-compose. The same docker-compose that runs on our local machines is what runs in our production server so
 we barely have any issues when we deploy new features. 

Lastly, security has and always will be a major factor in what we do in Airflow.  That’s the reason we run on-premises, why we encrypt env files, why we separate dev/stage prod and yet another reason that we use docker.  

Learning and understanding Airflow wasn’t that hard for me, and I barely knew any Python before I dove in.  Airflow documentation and AirBnB blog posts were the main sources I learned from. And there’s never any substitute for digging into the source code itself.The nice thing about Python is that it’s so readable, and you can tell what’s happening under the hood.  


**4. What are you using Airflow for now and how has it helped the city?**

Currently, Airflow supports all the data that we move to data.sandiego.gov. Besides the obvious advantages of transparency and the ability for residents to build on top of the data, it’s the best way for city staff to get cross-department data. We also generate and email a variety of automated reports and aggregations to various people. Before, the way to do this was to pull a query and spend a bunch of time manually getting the results ready to report out.  We are currently looking into providing aggregated metrics automatically emailed to departments on a large scale.

We are also doing a lot of data enrichment work. Since we are a city, and a lot of our data is geospatially relevant, we have Airflow performing spatial operations such as joins to make our tabular data geospatially relevant.  For example, asking “how many businesses opened last year in Council District 3” used to require downloading the data and performing a spatial join with a GIS tool. Now, we provide that as  a column in the data on the portal.  

As a result, we help city staff save time, access data faster, get answers faster, and make better decisions more quickly.  In addition, we save money in software development costs - our vendors charge quite a bit of money to create new reports.  


**5. What’s it like staying current with technology in government? **


I really do think it’s a function of the culture of the City, but it’s definitely not as hard as I thought it would be. You have to make an effort to learn new things and get out there, but I don’t feel like I’m being left behind in the 90s.  I’ve always been a full-stack / multi-stack developer, and working here lets me expand my expertise to crazier, bigger enterprise systems like SAP, Oracle and SQL Server. I’m also working on learning a lot more geospatial; it’s a fascinating field.  


## Wrapping up...

If the work that Maksim is doing sounds interesting and you’re looking for ways to get involved, check out the job opening in San Diego’s data department, or contact Maksim directly [@MrMaksimize](https://twitter.com/MrMaksimize). 

If you already have a job and are curious about what you can do with Astronomer Airflow, check out [Astronomer Open](https://github.com/astronomerio/astronomer), our entire platform (Airflow, Celery, Grafana, Prometheus, and more), all in a docker container you can hack on locally!