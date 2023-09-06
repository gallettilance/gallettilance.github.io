---
layout: page
title: Course Schedule
description: Listing of course modules and topics.
---

# Course Schedule

To download worksheets: follow the link which will take you to the file in the course repo, then you can pull the worksheet from the course repo using git.

On the top right of the github page you can click on the three dots "..." and download the raw file. Make sure that when you save it it has the ".ipynb" file extension and not ".txt" or something else.

{% for module in site.modules %}
{{ module }}
{% endfor %}
