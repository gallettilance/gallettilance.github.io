---
layout: page
title: Staff
description: A listing of all the course staff members.
---

<<<<<<< HEAD
# Instructors
=======
# Staff

Staff information is stored in the `_staffers` directory and rendered according to the layout file, `_layouts/staffer.html`.

## Instructors
>>>>>>> eb6c583 (cs 506 exercise part a)

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

<<<<<<< HEAD
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
=======
{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
## Teaching Assistants

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}
>>>>>>> eb6c583 (cs 506 exercise part a)
