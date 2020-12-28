# Astronomer Blog

This is the content repo for the Astronomer blog. Blog content (.md files) stored here are built into the Astronomer site and hosted at [astronomer.io/blog](https://www.astronomer.io/blog/). 

## Contributing Blog Posts

Blog can be contributed one of two ways either by creating a markdown file or by using [Netlify CMS](https://www.netlifycms.org/), a tool that will create the markdown file for you. Once a draft of the post is completed have someone familiar with review the PR that includes your post. Additionally a CI/CD Pipeline will run in [GitHub Actions](https://github.com/features/actions) that will verify that your post is free from errors. 

### Markdown

Blog posts are stored as [Markdown files](https://www.markdownguide.org/getting-started/) in the `/posts` directory in this repo. Our site uses a standard set a key value pairs stored at the beginning of each markdown files as `frontmatter`. Below is an example of the `frontmatter` used at the beginning of each Markdown file.

```frontmatter
---
title: The Airflow 2.0 Scheduler
slug: airflow-2-scheduler
description: A technical deep-dive into Apache Airflow's refactored Scheduler, now significantly faster and ready for scale.
heroImagePath: ../assets/scheduler-hero-2.png
authors:
  - Vikram Koka
date: 2020-12-17T16:17:00.000Z
---
```

Fill in all the fields shown above with information relative to your post. The `title` field will make a h1 tag at the top of the post with your title. Do not use h1s in your `.md` file. The `slug` field is used as the as the path to the post. The `heroImagePath` field is the path to the hero image. Hero images are stored in the `assets` directory. If you do not have a hero image use `../assets/blank.jpg`. 

Images used in the blog posts are stored in the `assets` directory in this repo. Below is an example of how to include an image in your markdown folder. 

```markdown
![Airflow Scheduler Deployment Model](../assets/airflow-2-scheduler/scheduler-deployment-model.png)
```

Please follow standard markdown formatting rules that are outlined [here](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md) more information can be found below in the markdown Lint section.

### Netlify CMS

You can also use Netlify's content management system to create blog posts too. The CMS tool for our blog is located at [https://astro-blog.netlify.app](https://astro-blog.netlify.app/). When creating a post you will be prompted to provide the `frontmatter` information described above. The CMS tool will create a PR to this repo.

## CI/CD Pipeline

A GitHub Actions CI/CD Pipeline is used to verify each markdown file is free from formatting errors, spelling errors, and broken links. To see logs from this pipeline go to `Actions` section of the GitHub repo. Run the commands outlined below locally to fix errors before contributing posts.

Fix pipeline errors from all posts as old links may break and need to be replaced.

### Markdown Lint

The pipeline uses [markdownlint](https://github.com/DavidAnson/markdownlint) to ensure proper markdown formatting to ensure consistency. The rules followed by the linter can be found [here](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md). To run the linter locally run the following.

```shell
node_modules/.bin/markdownlint ./posts/<your-blog-post> --ignore node_modules --ignore v5
```

To include line of code that break certain markdown rules follow the code example below.

```markdown
<!-- markdownlint-disable MD033 -->
<hr/>
```

### Spell Check

The pipeline features a [spell checker](https://github.com/lukeapage/node-markdown-spellcheck) to ensure that there are no misspelled words in our blog posts. You may want to run the spell checker locally in "interactive" mode to add proper nouns to the dictionary.

```shell
node_modules/.bin/mdspell "posts/<your-blog-post>.md" -n -a --en-us
```

Out put should be similar too

```shell
Spelling - <your-blog-post>.md
 shows you the context of the speling mistake and gives you options
?   (Use arrow keys)
  Ignore
  Add to file ignores
  Add to dictionary - case insensitive
> Enter correct spelling
  spelling
  spieling
  spewing
  selling
  peeling
```

You can run locally in "report" mode too running the command with a `-r` flag.

You can also add words directly to dictionary by adding the word to the `.spelling` file located in this repo.

### Link Check

The last check in the pipeline in the [Markdown Link Checker](https://github.com/tcort/markdown-link-check) which checks for broken links. This check may fail wether you have dead links or not because of "too many request" status code. If you believe this has happened just run the pipeline again.

If the check is failing use the `GitHub Actions` logs to see what links are dead. Links from old blog posts may have broke since that last time the pipeline has run. Please fix these links to keep our site up to date.

> Hint: search for `dead link` in the logs to find all the dead links that need to be fixed.
