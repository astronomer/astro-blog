---
title: On Universal Music Group's Airflow Leak...
slug: universal-music-group-airflow-leak
description: A response to BleepingComputer's article on Universal Music Group's Airflow leak
heroImagePath: ./1527794218-umg.png
authors:
  - author: Ben Gregory
    avatar: ../avatars/1504721242-ben.jpg
date: 2018-05-31T00:00:00.000Z
---

Yesterday, BleepingComputer [published an article](https://www.bleepingcomputer.com/news/security/contractor-exposes-credentials-for-universal-music-groups-it-infrastructure/) on Universal Music Group's implementation of Airflow and subsequent credential leak. We wanted to take a second to talk about some Airflow best practices that could have avoided this situation and provide some commentary on how Airflow is described. 

## Exposing Credentials in the DAG File
The article included a screenshot of the leaked DAG file (originally discovered by Bob Dianchenko - https://twitter.com/MayhemDayOne/status/998841089204375552) and right away there are some glaring issues (blacked out below). The host, user, and password are exposed directly in the DAG file and then passed to ftputil to access to FTP server. 

This is neither the most efficient way to go about doing this work (the [FTP Hook](https://github.com/apache/incubator-airflow/blob/master/airflow/contrib/hooks/ftp_hook.py#L63) would have saved some development time) nor is it recommended for the precise situation that occurred — it's too easy to leak, accidentally or by malicious attack.,,If the DAG had followed Airflow Best Practices and included this information in a connection object, accidentally exposing this file (e.g. inadvertently committing it to a public repo - a common method of exposure) would only expose some innocuous boilerplate (like below). 

```
from airflow.hooks.ftp_hook import FTPHook

def describe_directory(**kwargs):
    path = kwargs.get('path', None)
    ftp_conn_id = kwargs.get('ftp_conn_id', None)
    filename = kwargs.get('templates_dict').get('filename', None)
    ftp_hook = FTPHook(ftp_conn_id=ftp_conn_id)
    client = ftp_hook.get_conn()
    directory = client.describe_directory(path)

    logging.info('Directory Retrieved.')
    if directory:
      for k,v in directory.items:
          print('{} - {}'.format(k,v))
          return directory
      else:
          print('Directory empty.)
```
https://gist.github.com/benjamingregory/da6d1b34e1e056419239b8612d2059d2

It's important to restate here that the credentials being exposed in this manner is NOT a inherent issue with Airflow but, rather, a misguided implementation.  By either using the FTP Hook, the connection would only be in the DAG file by reference and the password would be fully encrypted at rest. You could even make it more secure by creating a custom hook, passing all parameters (host, user, pw) to the extras field, and encrypting everything.


## Apache Airflow servers don't use authentication by default
This is true but there is more to the story.  To enable authentication in Airflow, only two params need to be set in your configuration file.

```
[webserver]
authenticate = True
auth_backend = airflow.contrib.auth.backends.password_auth
```

So yes, by default authenticate is False but it's not a fair characterization to say that authentication is lacking or that the core Airflow team is putting it secondary. I would never imagine that anyone on the core Airflow team would recommend exposing your Airflow instance publicly and then not setting a password. 

Beyond this, as the article points out, you would likely want to restrict access to Airflow to within a private network or whitelist certain IP addresses if exposing it publicly.

In our Cloud product, all instances use Basic authentication (soon to be OAUTH) and we've worked with enterprise customers on LDAP and Kerberos authentication strategies.