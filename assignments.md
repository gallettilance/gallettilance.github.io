---
layout: page
title: Assignments
description: Assignments will be posted here.
---

We’ll use GitHub + Gradescope to access and submit assignments. Here’s how it works:

1. Get the assignment materials from GitHub classroom.
2. Clone the repository to any machine you are using.
3. Work on the assignment, pushing back to GitHub.
4. Submit the assignment on Gradescope using gitHub submission method.

## Assignments

{% assign assignments = site.assignments %}
{% for assignment in assignments %}
{{ assignment }}
{% endfor %}
