---
layout: page
title: Assignments
description: Listing of assignments.
---

# Assignments

All assignments should be listed on your personal website (created during assignment 0). Assignment repos should remain private until the deadline. At which point you should make your repo public so that graders can access it and grade it.

Each assignment is worth 2 points. Criteria is as follows:
- 0/2: code did not run / little to no completion of the assignment
- 1/2: code runs and assignment is complete but is missing specific requirements
- 2/2: code runs and all requirements are met

Graders will be running an automated script to scrape all websites for each assignment. As such it's critical that:
  1. Your assignment repo should be public after the deadline (not before). Keep it private until the deadline.
  2. The href/link to your assignment's github repo on your website is exactly named: "Github Link". Note: capitalization is important here.
  3. The name of your github code repository should be of the format: `bu_username-assignment-X` (where `X` is the assignment number and `bu_username` is your *BU Email ID without @bu.edu*), for example, in my case (ayush25@bu.edu and for assignment 1): "ayush25-assignment-1" will be the correct GitHub repo name for assignment 1.

If any of these is missing, graders will not be able to find your assignment and you will get 0.

For the first few assignments, if you do get 0 because the grading staff was unable to find your assignment, **you will have 24h after grades are returned to fix the issue for a regrade**. This second chance will not be available after the first month of classes.

{% for assignment in site.assignments %}
{{ assignment }}
{% endfor %}
