---
title: 'Astronomer Takes PLOTCON: Day 1'
slug: astronomer-takes-plotcon-2016-day-1
description: 'Ben and Viraj just got done with day 1 of PLOTCON 2016. After all the presentations and exhibitions, they sat down to go over their thoughts. '
heroImagePath: ../assets/blank.png
authors:
  - Laurel Brunk
date: 2016-11-16T00:00:00.000Z
---

_Ben and Viraj just got done with day 1 of [PLOTCON 2016](https://plotcon.plot.ly/). (If you want to know why they're excited to be there, [check out Viraj's post about it](https://www.astronomer.io/blog/astronomer-takes-plotcon).) After all the presentations and exhibitions, they sat down to go over their thoughts and shared their conversation with us. Here’s what they had to say:&nbsp;_

**VP:** Lots of good stuff going on today. What sparked the biggest takeaway for you?

**BG:** Well, I missed the morning since my flight was delayed, but in the afternoon, I took the most away from Mike Williams’ (from [Fast Forward Labs](https://www.fastforwardlabs.com/)) lecture on algorithmic methods for text summarization.

**VP:** Yeah, I was definitely was really interested by that, too. He held nothing back on his feelings about word clouds and gave an informative high-level overview of recurrent neural networks (RNN) in text analysis, though honestly some of it was a bit over my head.

**BG:** I’ve never been a huge fan of word clouds either—it’s kind of interesting to look at but never anything you could make a decision with or derive meaning from. It also doesn’t take into account semantic meaning (like when movie and film really refer to the same thing) or collections of words that tend to co-occur. So I thought the use of topic modelling (which does take those things into account) was a really nice improvement on the pure frequency count behind word clouds.

**VP:** That’s not to discount the effectiveness of “simpler” techniques such as frequency counts (with adjustments) and looking at how words appear next to each other. Irene Ros gave a great talk in the morning in which she analyzed a passage from _Alice in Wonderland_ using Python’s NLTK library.

**BG:** Definitely. Like any initial exploration into a dataset, word frequency counts can provide for some important general direction much more quickly than an RNN. We learned that when we did our [text analysis on competitive blog posts](https://www.astronomer.io/blog/what-i-learned-from-analyzing-1700-blog-posts-part-ii) and gained some strong insight very quickly. Vectorizing the text is obviously a more nuanced—but admittedly more difficult—task that may not be worth it if you’re just trying to gain a high level of understanding of the text.

**VP:** I think a recurring theme throughout the day was the context in which different methods and libraries should be used. There were definitely some things I noticed that we could incorporate into the Astronomer Method.

**BG:** Go into that.

**VP:** [Kristen Sosulski](https://www.kristensosulski.com/), professor from NYU Stern, talked about it too. Her presentation on the data model and tech stack being dependent on the audience, which leads into the design and delivery process, was a great framework to tie together a unique solution for every customer. Her emphasis on context in the process of going from data to information to knowledge to wisdom is **principally** aligned with the Astronomer Method.

**BG:** Really good point. The **Data → Information → Knowledge → Wisdom** progression is a great way of breaking out the ongoing process of data investment into measureable phases.

**VP:** Another great one in the morning was Scott Berinato, author of [Good Charts](https://hbr.org/product/good-charts-the-hbr-guide-to-making-smarter-more-persuasive-data-visualizations/15005-PBK-ENG). He&nbsp;gave a talk about the myth of the “dataviz” person in enterprise settings and talked about building an effective team solution for enterprise level data visualization challenges. As the Astronomer team specializes for different clients, there’s a lot from his structure we can implement.

**BG:** Oh yeah, enterprise settings are an entirely different ball game. It’s good to know that the emphasis on teams (instead of relying on one miracle person) is a message that others are espousing as well.&nbsp;

**VP:** Looking forward to another great day tomorrow. Before we wrap this up, though, quick shout out to Chelsea Douglas and Frederic Gingras from Team Plotly for chatting all things data, startups, and Montreal with us. We may have to start Astronomer Canada after all. :)

_\*Don't miss recaps of [Day 2](https://www.astronomer.io/blog/astronomer-takes-plotcon-day-2) and [Day 3](https://www.astronomer.io/blog/astronomer-takes-plotcon-day-3)!_

