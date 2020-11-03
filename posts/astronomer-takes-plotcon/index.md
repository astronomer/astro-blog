---
title: 'Astronomer Takes PLOTCON 2016: Why We''re Excited'
slug: astronomer-takes-plotcon
description: Plotly is one of Astronomer’s favorite open source tools and always gets great reactions from our clients.
heroImagePath: ''
authors:
  - author: Viraj Parekh
    avatar: ../avatars/1504130874-viraj-parekh830.jpg
date: 2016-11-15T00:00:00.000Z
---

_I’m in NYC with Ben, our Head of Delivery, to attend [PLOTCON](https://plotcon.plot.ly/) 2016, a 4-day conference for data visualization hosted by the makers of [Plotly](https://plot.ly/)&nbsp;(and [RStudio](https://www.rstudio.com/) and [Domino](https://www.dominodatalab.com/)), which is an open source visualization library. Plotly is one of Astronomer’s favorite open source tools and always gets great reactions from our clients. We plan to document our time here, so look for daily updates! But first, a bit about why we love Plotly:_

In the world of data analysis, visualization is everything. At its very core, data is a story. No matter the format, type or topic, every dataset from the classical iris flower data set to a website’s clickstream logs has its own story to tell. Data visualization is the book that binds the story together. Effective visualizations communicate the message hidden in the data in a way that’s easy to digest, aesthetically pleasing and doesn’t leave anything out.

However, visualizations aren’t always easy to make. For one thing, there are a variety of different visualization libraries out there that require different levels of skill. For Python, most visualization work is done in Matplotlib, but you can also use Seaborn, ggplot (for native R users) and [a host of other options](https://blog.modeanalytics.com/python-data-visualization-libraries/) (just be sure to follow a style guide). JavaScript users usually default to d3, which is its own beast and has a steep learning curve. If, for whatever reason, you don’t share Astronomer’s love of open source software, MATLAB comes with some of its own&nbsp;built-in visualization libraries.

Regardless of your choice of language, though, you’re going to run into the same problems somewhere along the line when trying to bind your story into a book:

1. How do I make this look polished? It’s human nature to judge books by their cover, and no one is going to want to read a book that doesn’t look interesting.  
  
2. How hard is this visualization to make? The client deliverable is due tomorrow, I’m 6 items behind on the current sprint and I am tempted to leave this as a bar graph.  
  
3. What do I have to do to the data before it can be visualized? A time series dataset could have a date from 10 years ago that’s skewing the line chart.  
  
4. How do I share this? Is someone going to have to run my entire Jupyter notebook to see this? Or am I stuck uploading exported PNGs and screenshots?

### Plotly makes all of this easy.

That’s why we love it. It’s also entirely open source, [which fits Astronomer’s core principles](https://www.astronomer.io/blog/why-we-built-our-data-platform-on-aws-and-why-we-rebuilt-it-with-open-source), and can be imported into almost every popular data analysis library, so it’s easy to get started, regardless of your company’s stack. Not only that, but it has detailed documentation and a plethora of examples that make it easy to hit the ground running.

At Astronomer, we do most of our visualization work in Python. Plotly works natively with Pandas and Numpy and displays well inline in a Jupyter notebook. Not only can you host it on your own servers, but there’s also an offline mode in case you’re working while traveling. Every Plotly graph you make is saved to your account so they can be accessed and shared anytime, anywhere.

### Our favorite part?

For the Astronomer team, Plotly’s true value comes in the time it saves.

Let’s say I was trying to plot some trigonometric functions. Just look at the difference between doing it with Matplotlib and Plotly:

Here's the code and output with&nbsp;Matplotlib:

![Screen Shot 2016-11-15 at 10.39.59 AM copy 2.png](./Screen%20Shot%202016-11-15%20at%2010.39.59%20AM%20copy%202.png) ![Screen Shot 2016-11-15 at 10.39.59 AM copy.png](./Screen%20Shot%202016-11-15%20at%2010.39.59%20AM%20copy.png)&nbsp;And here it is with Plotly:

![Screen Shot 2016-11-15 at 10.40.12 AM.png](./Screen%20Shot%202016-11-15%20at%2010.40.12%20AM.png)

[![Sine Curve vs Cosine Curve](https://plot.ly/~virajparekh94/64.png)](https://plot.ly/~virajparekh94/64/)

Matplotlib is definitely an incredibly powerful open source tool that can be fine-tuned to make exactly what you want. However, things like hover-text, an interactive axis and dynamic dashboards take a great deal of effort and have a pretty steep learning curve.

Instead, we use Plotly’s intuitive syntax to create beautiful, interactive graphs with minimal effort. Sharing is an absolute breeze. We use them all the time not just for clients, but also to share data about internal projects and plot everything from Twitter data to consumer survey reports.

To sum it up, Plotly streamlines putting everything you need to put on top of the data into a visualization, allowing you to spend more time on the actual analysis, presentation prep, or watching [basketball](https://www.astronomer.io/blog/data-in-basketball). The Astronomer team is pumped for PLOTCON and can’t wait to use what we learn from it to help our clients! Stay tuned for our updates ...

_\*Update: Check out&nbsp;[Day 1](https://www.astronomer.io/blog/astronomer-takes-plotcon-2016-day-1), [Day 2](https://www.astronomer.io/blog/astronomer-takes-plotcon-day-2) and [Day 3](https://www.astronomer.io/blog/astronomer-takes-plotcon-day-3).&nbsp;_

