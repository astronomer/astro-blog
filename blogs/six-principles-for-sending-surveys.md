---
title: Six Principles for Sending Surveys
slug: six-principles-for-sending-surveys
description: Here are some basic principles to keep in mind to collect data that is actually usable.
heroImagePath: ''
authors:
  - Ben Gregory
date: 2017-01-19T00:00:00.000Z
---

One of the most common methods an organization can use to collect data is through sending out surveys. At face value, this seems perfectly simple. After all, you just want a few simple answers to a few simple questions.

It’s only when you want to take these responses and try to derive insight out of them that things become very difficult. Spelling inconsistencies, incorrect data types and unreasonable input values can all cause an extraordinary amount of cleaning work on the back end that is costly, time intensive and only an approximation of what the survey responses originally said, at best. To help avoid this, here are some basic principles to keep in mind to collect data that is actually usable.

_NOTE: This guide assumes the use of_ [_Typeform_](https://www.typeform.com/)_. While other survey tools will likely have similar functionality as what is described here, some may work differently._

### 1. Abstract what you can with hidden fields.

Typeform (and most other tools) allow you to submit hidden fields which are pre-populated in the survey link when you send them. These can be any field that you want to be submitted with the user but you don’t want the user to have to manually enter. An email address is a perfect example: by the very fact you’re emailing the user, you already know their email address and thus don’t have to ask for it again. But if you’re using the email address to link these new survey responses with any responses you have from previous surveys, you’re still going to want to make sure that the email address is submitted again with the other responses or the surveys are going to be hard to link together.

- _So this:[https://account.typeform.com/to/F5hgll](https://account.typeform.com/to/F5hgll)..._
- _becomes this:&nbsp;_[_https://account.typeform.com/to/F5hgll?email\_address=bob@gmail.com_](https://account.typeform.com/to/F5hgll?email_address=bob@gmail.com)

You can add as many hidden fields as you want, but they can’t have any spaces in them.

### 2. Avoid free responses if at all possible.

Phrasing a question properly is a deceivingly difficult task. It's important&nbsp;to make sure the survey responses are easy to understand while avoiding potentially limiting the ability of the survey taker to respond honestly. While it can seem like providing a free response is the safest way&nbsp;to accomplish this, most well-scoped questions by nature lead to great similarity between responses but can create a frustrating inconsistency to how these responses are inputted.

Say, for example, you want to know a person’s favorite candy. Possible valid responses include: “Snickers,” “snickers,” “SNICKERS,” “snickerzzz,” “omg i luv snikkerz”—which are all going to be seen as independent answers when they really should roll up to the same value of "snickers." If you want to find out a simple count of how many people prefer Snickers, you’re going to get a small subset of the respondents unless you spend hours examining the raw responses and cleaning it into a uniform format.

**_There are two ways to address this._**

**Option 1 - Choose a multiple choice question with a number of preset options.**

- **Pro:** This comes with the option of an “Other” response that can act as a catch all (see below) in case you expect to gather responses that are not covered in the preset options..
- **Con:** You are limited to about 10 possible options before the options become too long to present. 

**Example:** _Which is your favorite candy?_

  - M&Ms
  - Snickers
  - 100 Grand
  - Skittles
  - Twizzlers
  - **Other (Please Specify) -**  **_Red Vines_**

**Option 2 - Pre-populate a reasonable amount of dropdown options.**

- **Pro:** You are able to include many more options that cover a wider area than in a multiple choice question. A great example of this is if you’re asking what city someone is from. Pre-populating a dropdown menu with the top 100 largest cities ensures consistency (and avoids the possibility of someone putting in the name of their specific neighborhood) while also allowing a reasonable level of specificity (the top 100 cities go as specific as Chula Vista, CA and Hialeah, FL).
- **Con:** In Typeform, you do forego the ability to include an “Other” option when creating dropdown options so you want to be confident in the options you do prepopulate.

**Example** : _What city do you live in?_

- Provide dropdown with the [Top 100 cities](https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population) prepopulated.&nbsp;This includes major cities and more specific cities like Chula Vista, CA and Hialeah, FL.

### 3.&nbsp;Use type fields to ensure data validation.

An important element that can be easily overlooked is validation of the type of data being collected. If you’re asking for a person’s age, you want to get “24”—not “Twenty Four,” “Almost 25” or “24 ½.” It may seem like a small difference but the latter three completely destroy your ability to perform any kind of distribution analysis or even get a basic average, because any tool you use to examine the data is not going to treat them as numbers. Luckily, Typeform (and other survey tools like it) provide some preset question types that enforce a certain data type. The number type, for instance, will not allow the person to respond with anything other an integer $, letters or decimals.

**IMPORTANT NOTE:** When asking a question like _“How much money do you spend on XYZ?”_, it can be useful to make a note not to include the $ as it can be confusing to a respondee of why they are not able to input their response.

### 4. Cap the response.

Equally important as validating the data to be of a certain type (e.g. number) is capping the response to what you deem as reasonable. With just a field type in effect, you could theoretically have people respond with an age of 240. Invalid answers like this are not going to be caught with a field type because it is a valid integer but it is also is fairly unreasonable to say someone alive is 240 years old (at least right now). Luckily, you can put in a cap of acceptable responses so you don’t have people putting in invalid responses that can screw up your analysis down the line. All it takes is an errant keystroke and the entire datapoint is unusable.

### 5. Include a unique identifier.

Unless you are intentionally trying to keep your surveys anonymous, you are likely going to want to have one or more ways of identifying the person taking the survey. This is the way you’ll look for re-engaging respondents down the road (possibly depending on their previous response answers) as well as connecting surveys together to create a rich picture. Name is a common example but it’s not a guarantee of a unique response. It’s better to use an email address or phone number as a standard unique identifier since these are inherently unique. If you are unable to collect this type of information, generating a random id value as a hidden field (e.g. “id=29512578670”) is another possible solution.

### 6. Require Your Identification Questions

This is perhaps the most important principle, but one that is incredibly easy to overlook. All it takes is forgetting to set those fields to “Required” to make your survey inusable, so it’s critical make sure that anything impacting how you interact with the respondent down the line or combine their multiple surveys together is without a doubt submitted.

_Keeping all these things in mind when constructing a survey can result in a rich, clean data store that your company can rely on. And if you’ve got any other principles you couldn’t live without when it comes to data collection or other survey tools, drop us a line in the comments.&nbsp;_

