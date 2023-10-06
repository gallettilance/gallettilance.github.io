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

# Course Facilitator

{% assign course_facilitator = site.staffers | where: 'role', 'Course Facilitator' %}
{% for staffer in course_facilitator %}
{{ staffer }}
{% endfor %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}

{% assign technical_pm = site.staffers | where: 'role', 'Technical Project Manager' %}
{% assign num_tpm = technical_pm | size %}
{% if num_tpm != 0 %}

# Teaching Assistants

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

# Technical Project Managers

{$ for staffer in technical_pm %}
{{ staffer }}
{% endfor %}
{% endif % }
