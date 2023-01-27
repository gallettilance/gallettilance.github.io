---
layout: page
title: Deliverables 
description: Spark! Project Work Syllabus
---

## Spark! Project Work Syllabus

Teams are expected to complete deliverables on their set due dates. If a team needs more time on a deliverable this must be communicated to the PM at least two days prior to the due date. The PM will alert the instructor and will communicate the extension time to the team.

{% assign deliverables = site.deliverables %}
{% for d in deliverables %}
{{ d }}
{% endfor %}