---
title: Data Formats 101
slug: data-formats-101
description: 'Business analysts generally encounter four main formats of data: JSON, XML, CSV, and TSV. So what are these types and why would we use them? '
heroImagePath: ../assets/blank.png
authors:
  - Ben Gregory
date: 2017-08-03T00:00:00.000Z
---

Think of a hacker in almost any B-Level action movie: Swordfish, The Core, Fast + Furious 2-8 ... there’s always that skinny, nervous (or needlessly trendy) guy watching 0111001101100001 scroll past him endlessly. You wouldn’t be faulted for thinking that this is the world data engineers live in, but in reality, it’s far less exciting.

Hackers (or in the business world, analysts) generally encounter four main formats of data: JSON, XML, CSV and TSV. Chances are, you’ve had to deal with data in one of these forms. So what are these types, why would you favor them and what do their nifty acronyms mean?

### JSON - JavaScript Object Notation

`{
"blog title": "Data Formats 101",
"date" : "08-01-2017",
"author": "ben",
"file size": "17kb"
}`

`{`
`"blog title": "Data Formats 101",`
`"date" : "08-01-2017",`
`"author": "ben",`
`"file size": "17kb"`
`}`

First things first with JSON: ignore the “JavaScript” portion of it’s name. While its structure was originally derived from JavaScript, it can be used with any major language that you would encounter today. JSON is most often encountered in web-based systems and was created to solve the need of communicating the “state” (i.e. what has happened just before a certain event) between the server and browser. JSON has since become the default format of data returned from [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) APIs.

JSON is relatively compact but _does_ include formatting characters (e.g. brackets, quotes, newlines) that can result in larger file sizes than other formats (e.g. CSV or TSV). However, this longform formatting does easily allow for more complex data structures, including objects (see _sections_ below) and arrays (see _publication\_channels_ below). Organizing all the data in these “documents” (as a single entry is called) while taking advantage of more complex structures makes it very easy to flexibly modify records and control state, which was the original goal.

`{
"blog title": "Data Formats 101",
"date" : "08-01-2017",
"author": "ben",
"file size": "17kb",
“sections” : {
	“Section_1”: “JSON”,
“Section_2”: “XML”,
“Section_3”: “CSV”,
“Section_4”: “TSV”
}, 
“publication_channels” : [“medium”,”twitter”,”facebook”, “linkedin”]
}`


### XML - Extensible Markup Language

`<entry>
    <blog_title>Data Formats 101</blog_title>
    <date>08-01-2017</date>
    <author>Ben</author>
    <file_size>17kb</file_size>
</entry>`

You may never have heard of XML before, but you’re probably familiar (if only in passing) with it’s cousin, HTML. Whereas HTML describes how a web page should be organized, XML describes how data should be organized. XML’s structure uses tags that are readable, which makes manually traversing the data really easy. And like JSON, complex data types are easily configurable. XML is the default output format for [SOAP](https://en.wikipedia.org/wiki/SOAP) APIs but it has become less common with the rise of REST and [GraphQL](https://graphql.org/).

More so than JSON, XML is extremely verbose which makes it a sub-optimal format where file size is a consideration. In the formatting we see below, the structure of the XML document itself composes more characters than the actual data we’re interested in. Storing at a large scale can then become a problem due to these large formatting patterns.

 `<entry>
    <blog_title>Data Formats 101</blog_title>
    <date>08-01-2017</date>
    <author>Ben</author>
    <file_size>17kb</file_size>
    <sections type=”object”>
	<section_1>JSON</section_1>
	<section_2>XML</section_2>
	<section_3>CSV</section_3>
	<section_4>TSV</section_4>
    </sections>@t
    <publication_channels type=”array”>
	<value>medium</value>
	<value>twitter</value>
	<value>facebook</value>
	<value>linkedin</value>
    </publication_channels>
</entry>`

### CSV - Comma Separated Values

`blog title, date, author, file size
Data Formats 101, 08-01-2017, Ben, 17kb`

This is the data format most people will recognize. You know that maddening spreadsheet your colleague sends you that [causes Excel to ask you if you want to save _EVERY TIME_ you close it](https://www.reddit.com/r/IAmA/comments/3rid26/we_are_the_microsoft_excel_team_ask_us_anything/cwod7de) even if you’ve already saved it? Yep, that’s CSV.

CSV is a very common file format and it’s easy to understand why. It minimizes the extra formatting characters (so that there are only commas and newlines) and maps 1-to-1 to how it will eventually be presented in a database or spreadsheet (i.e. one additional “,” means one cell over). If you’re exporting from a relational database that already exists in a 2-dimensional space, a CSV is the most common formatting option.

The main troublesome elements of CSVs are that:

1. Data cannot be easily nested like with JSON or XML, making objects and arrays more trouble than they’re worth.
2. Including a value with a “,” and not an escape character or double quotes (both of which would allow the “,” to be read as part of the value and not a separator) will cause the program reading the data to mistakenly break up the value.
3. There is no official CSV formatting spec and often the system you’re working in will dictate some of the less noticeable elements (like how to encode newlines). If you’ve ever tried COPY a CSV from S3 to Redshift and can’t for the life of you figure out why only the headers get copied, [you likely are incorrectly using carriage returns](https://aws.amazon.com/premiumsupport/knowledge-center/redshift-copy-nothing-loaded/) and not a line feed or carriage return/line feed combination. If this sounds tediously finegrain, it is. And that’s why CSV can sometimes be a very frustrating format.

### TSV - Tab Separated Values

`blog title  date  author  file size
Data Formats 101  08-01-2017  Ben 17kb`

TSV is less common than CSV but conceptually the two are very similar. Whereas a CSV will separate data using commas, a TSV will separate using tabs. It’s hard to see but they’re really there!

The main cons against using TSV as an output format are the same as CSV, with the exception that a literal tab stop (i.e. an intentional tab value being included as part of a cell value) occurs less frequently than literal commas. It is also generally more difficult to manually inspect for errors in TSVs as most text editors do not easily visually distinguish between a tab and few spaces.

Truth is, while pros and cons exist in these varying data formats, you have to deal with at least one—and usually more than one—to get the information and insights you need. If you want to do something as simple as combining transactions from your MySQL with support tickets from Zendesk’s REST API, you’re going to be combining CSVs with JSON documents. What about getting leads from Salesforce’s SOAP API, cross referencing them with conversational data from Intercom’s REST API and then putting all of that into PostgreSQL? That’ll be XML and JSON into CSV. The more complicated the combinations, the longer it takes.

If you want to free up time spent moving and re-formatting data, let Astronomer automate the routing and transformation of one type of data to another. Then you can focus on what you do best (analysis!).

