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

# Teaching Fellow 

{% assign teaching_fellows = site.staffers | where: 'role', 'Teaching Fellow' %}
{% for staffer in teaching_fellows %}
{{ staffer }}
{% endfor %}


# Teaching Assistants

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}

