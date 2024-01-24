---
layout: page
title: Course Schedule
description: Listing of course modules and topics.
---

# Course Schedule

Worksheets with a **white box** around them are up to date and ready to be downloaded and worked on. Those without a white box are from the previous semester which you may still use as reference material.

To download worksheets: follow the link which will take you to the file in the course repo, then you can pull the worksheet from the course repo using git.

On the top right of the github page you can click on the three dots "..." and download the raw file. Make sure that when you save it it has the ".ipynb" file extension and not ".txt" or something else.

If you're familiar with git/github, please fork the repo (make sure to keep your fork up to date) and clone that fork so you can work on the worksheets locally.

{% for module in site.modules %}
{{ module }}
{% endfor %}
