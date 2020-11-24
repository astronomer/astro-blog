---
title: 'Data Wrangling 101: Using Python to Fetch, Manipulate & Visualize NBA Data'
slug: data-wrangling-101-using-python-to-fetch-manipulate-visualize-nba-data
description: This is meant to be used as a general tutorial for beginners with some experience in Python or R.
heroImagePath: ../assets/nbaData2560x1600a@2x.jpg
authors:
  - Viraj Parekh
date: 2017-04-13T00:00:00.000Z
---

&nbsp;

_Last week, Viraj's article by this name was featured on [the Yhat blog](https://blog.yhat.com/posts/visualize-nba-pipelines.html)... Yhat makes data science applicable for developers by allowing data scientists to programmatically employ R and Python models into production applications via REST API endpoints. The Yhat blog focuses on data science, machine learning and engineering. Check out the intro, which links to the full post on Yhat!_

This is a basic tutorial using pandas and a few other packages to build a simple datapipe for getting NBA data. Even though this tutorial is done using NBA data, you don't need to be an NBA fan to follow along. The same concepts and techniques can be applied to any project of your choosing.

This is meant to be used as a general tutorial for beginners with some experience in Python or R.

### Step One: What data do we need?

The first step to any data project is getting an idea of what you want. We're going to focus on getting NBA data at a team level on a game by game basis. From my experience, these team level stats usually exist in different places, making them harder to compare across games.

Our goal is to build box scores across a team level to easily compare them against each other. Hopefully this will give some insight as to how a team's play has changed over the course of the season or make it easier to do any other type of analysis.

On a high level, this might look something like:

Game | Days Rest | Total Passes | Total Assists | Passes/Assist | EFG | Outcome

_Continue digging into where the data is coming from and the packages you need to get it by [following Viraj's step-by-step tutorial at the Yhat blog](https://blog.yhat.com/posts/visualize-nba-pipelines.html), complete with numerous visualizations and links to resources. 

**Worth noting:** This is Viraj's second detailed piece that combines data science and basketball. If you're interested, [read his piece about the data-driven nature of&nbsp;the NBA](https://www.astronomer.io/blog/data-in-basketball)._

