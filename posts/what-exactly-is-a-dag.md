---
slug: what-exactly-is-a-dag
title: What Exactly is a DAG?
description: What exactly is a DAG and what does it tell us that the term “data
  pipeline” can't?
heroImagePath: ../assets/Blog_WhatisDag.jpg
authors:
  - Ben Gregory
date: 2017-07-27T00:00:00.000Z
---


If you work in the world of data engineering, you're probably familiar with one of two terms: Data Pipeline (as an analyst/marketer/business-focused person) or DAG (as an engineer who favors term accuracy over branding). Though used in different circles, these terms both represent the same mechanism.

“Data pipeline” describes the general process by which data moves from one system into another. By using the metaphor of plumbing, it helps illuminate an otherwise complex process. But data isn't literally in a single tube starting on one side and coming out of the other. Instead, the plumbing metaphor is useful in illustrating two important qualities:

1. When data is moving through pipelines, it is isolated from other data. 
2. When a lot of data is moving through a pipeline, it can create stress on the servers it runs on, much like water pressure.
3. The data needs to be treated at various stages before it reaches its destination system, just like chemicals or waste moving through an industrial pipeline.



### So what exactly is a DAG, and what does it tell us that’s missing from the “pipeline” term?

Let’s start with breaking down the acronym:

![Graphic1_2x.jpg](https://lh4.googleusercontent.com/daJMT-5DKeHVh-M08rRZeMYW2ZFAEqVjWOWvGfSRsgTlMcbKHfm8NuYTQCgmuTYnLt36PUAzPFp15hpuKPqCczcsj7XD6hdPAZUZbCxWNo8ymPKGwAduNRH4ob9outAjsB9NGBqV "Graphic1_2x.jpg")

 

Now let’s work through each individual word of the acronym:

In mathematics, a graph is a finite set of nodes, with vertices connecting the nodes to each other. In the context of data engineering, each node in a graph represents a data processing task.

For example, consider the directed acyclic graph below. We can create a data engineering story out of these simple nodes and vertices:

* Node A could be the code for pulling data out of an API.
* Node B could be the code for anonymizing the data and dropping any IP address.
* Node D could be the code for checking that no duplicate record IDs exist.
* Node E could be putting that data into a database.
* Node F could be running a SQL query on the new tables to update a dashboard.

![Graphic3_2x.jpg](https://lh3.googleusercontent.com/F3ovomeXSZE4Zpmt04lTIQCFJHyH-YsOEFMtNnez3ZWux9yHItzoIU5bDIS5-5BWElHsJzlpaVctfAaszFZ5G2kW45re5Hh4hVgRkAAyRkBDS7RxvOA6w2ZR-7OBf_SHcjv4RF9w "Graphic3_2x.jpg")

It’s pretty neat, but… it doesn't look like a pipeline at all! Tasks branch out and come back together, with new inputs being brought in along the way. So why does this graph represent a pipeline? Because it’s both directed and acyclic!



Have a look at the above graph again - each vertex (line) has a specific direction (denoted by the arrow) connecting different nodes. This is the key quality of a directed graph: Data can follow only the direction of the vertex. For our example, data can go from A to B but never B to A. In the same way that water flows through pipes in one direction, data must follow the direction as defined by the graph. Nodes from which a directed vertex extends are considered upstream, while nodes at the receiving end of a vertex are considered downstream.

Notice that in addition to data moving in one direction, nodes never become self-referential. That is, they can never inform themselves, as this could create an infinite loop. So data can go from A to B to C/D/E, but once there, no subsequent process can ever lead back to A/B/C/D/E as data moves down the graph. Data coming from a new source, such as node G, can still lead to nodes that are already connected, but no subsequent data can be passed back into G. This is the defining quality of an acyclic graph.



Why must this be true for data pipelines? If F had a downstream process in the form of D, we would see a graph where D informs E, which informs F, which informs D, and so on. It creates a scenario where the pipeline could run indefinitely without ever ending. Like water that never makes it to the faucet, this loop is a waste of data flow!



![Graphic2_2x.jpg](https://lh4.googleusercontent.com/mVGCAOzP_iFH26VH3F7hIH8KWXfND6EvcUS5EDWkBoA2lHzaC69wIScAWkWOrKgviHUm9S3z3AOy0StbJMJ9_ZvWssYmVsaNPVyyVJWqvxbUXG-fJ1t95_b6yaBthAQM4J1wxXxt "Graphic2_2x.jpg")



To recap, DAGs are:

1. **Directed** - If multiple tasks exist, each must have at least one defined upstream (previous) or downstream (subsequent) task, although they could easily have both.
2. **Acyclic** - No task can create data that goes on to reference itself. It could cause an infinite loop, and that could cause a problem or two.
3. **Graph** - All tasks are laid out in a clear structure, with discrete processes occurring at set points and transparent relationships with other tasks.
