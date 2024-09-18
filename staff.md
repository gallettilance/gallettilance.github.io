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

# Course Facilitators

{% assign course_facilitators = site.staffers | where: 'role', 'Course Facilitator' %}
{% for staffer in course_facilitators %}
{{ staffer }}
{% endfor %}