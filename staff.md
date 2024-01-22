---
layout: page
title: Staff
description: A listing of all the course staff members.
---

# Instructors

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

# Teaching Assistants

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}

# Technical Project Managers

{% assign technical_pms = site.staffers | where: 'role', 'Technical Project Manager' %}
{% for staffer in technical_pms %}
{{ staffer }}
{% endfor %}
