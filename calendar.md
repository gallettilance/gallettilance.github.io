---
layout: page
title: Course Schedule
description: Listing of course modules and topics.
---

# Course Schedule

To download worksheets: follow the link, then right-click and select 'save as' and save as a .ipynb file. Alternatively you can pull the worksheet from the course repo using git.

{% for module in site.modules %}
{{ module }}
{% endfor %}
