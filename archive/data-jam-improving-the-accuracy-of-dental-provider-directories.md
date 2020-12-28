---
title: 'Data Jam: Improving the Accuracy of Dental Provider Directories'
slug: data-jam-improving-the-accuracy-of-dental-provider-directories
description: 'Last week, we participated in (and won!) our first official hackathon, Data Jam, sponsored by Humana and Spry Labs.'
heroImagePath: ../assets/Data_Jam.png
authors:
  - Becky Steele
date: 2016-10-07T00:00:00.000Z
---

Last week, we participated in (and won!) our first official hackathon, Data Jam, sponsored by [Humana](https://www.humana.com/) and [Spry Labs](https://www.sprylabs.co/). Trong (center), an integration engineer, Viraj (right), a data analyst, and I joined forces with the [Differential](https://differential.com/) team from noon last Thursday through 3pm on Friday. Our task? Create an accurate and user-friendly directory for Humana’s dental customers to find a dentist.

### Addressing&nbsp;the Problem

If you don’t know what a hackathon is, it’s a timed event (in this case, 1.5 days) in which a group of people meet to engage in collaborative computer programming, usually to meet some sort of challenge. Here’s how this one went down:

We heard about Data Jam in early September, and signed up as soon as we realized the root issue of this event was right up our alley: [inaccurate data was resulting in unhappy customers](https://www.the-hackfest.com/events/data-jam---presented-humana/). In fact, both insurance members and health care providers were frustrated with the high stress and high costs involved with an unreliable matching system to pair patients with providers.

Humana’s challenge for us was to capture and organize data, develop an intelligent, review-based ranking algorithm and construct a provider directory for Humana’s dental customers.

Ahead of time, we got a list of providers and some general direction, but there weren’t many guidelines to help us prep. So we designated a team leader (me) and attempted to prioritize what we _could_ feasibly get done in that small chunk of time. We also focused on building a data architecture plan that would demonstrate Astronomer’s many wonderful merits for such work.

### Game Day

Of course, when you commit to something like this, it’s impossible to factor in all of the day-to-day things that must be managed simultaneously, or the fact that your team is right in the middle of a sprint. My mission was to keep progress moving forward while shielding the team from any fires that would otherwise distract them. Fortunately, Trong and Viraj made my job easy and displayed the usual Astronomer mindset: relentless experimentation until the solution is ready!

Trong brought his Aries ETL expertise to the table, and built out the portion of the app that would compare existing provider location data against Google Places and Yelp to ensure a high confidence of accuracy. The amount of code that Trong cranked out in a short amount of time is [a tribute to his growth](https://www.astronomer.io/blog/trong-le-the-story-of-how-i-finally-joined-astronomer) since joining the team, not to mention his understanding of our business.

Viraj worked with Trong on the receiving end of that pipeline, and laid out an impressive data science strategy based on ranking best practices he saw used by [IMDB](https://www.imdb.com/) (love the cross-industry thinking!). While he was surprised by the overall lack of (or even conflicting) information about dentists available on open source platforms, he was able to discover quite a bit of opportunity to reduce churn and more reliably rank health care providers, especially when it comes to “in-network” referrals. Knowing Viraj, his analysis will be pivotal to this industry in the days to come.&nbsp;

We got a little help from the rest of the team, too. Andy, our Enterprise Account Director, also jumped in with his enterprise customer experience to make sure our message was clear and that the data architecture strategy showed a scalable, machine-learning model that would flex based on the feedback of Humana’s dental customers over time (ranked/weighted review system). Chris, our Head of Design, slacked us some killer slide templates (we’ll reveal those at the end of this post).

We worked all day Thursday and as much as we could on Friday. Differential built out a beautiful user interface and provided invaluable&nbsp;experience with the healthcare clients. Meanwhile,&nbsp;I condensed walls of text from Viraj while somehow balancing a bombardment of customer needs on Slack.

### Our Data Solution

In the end, it was interesting to see how everyone had their own means of approaching the situation and came up with different interpretations of the problem. We’re partial to our own approach though (and so were the judges), so without further adieu, [here is our final submission](https://docs.google.com/presentation/d/1UCqGH1yKGik5SFIorJsop49LeoLPywRP3tdA4ScoWZQ/edit?usp=sharing) (including a link to the final app). It’s our solution to Humana’s challenge and our first steps to developing, populating, and maintaining the “ideal” provider directory.

We all agreed that our first team hackathon was a success, and not just because we won the competition. We know how valuable data can be when it’s put to good to use. Getting to dive headfirst into a brand new pool of data and tackle an issue that could transform an entire industry gives us energy and reminds us why we wake up every morning and go to work at Astronomer. Would we do another hackathon? Absolutely. Though Viraj likes to remind us, “The concept of retiring undefeated is also pretty appealing, too.”

