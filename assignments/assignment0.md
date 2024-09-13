---
layout: page
title: Assignment 0 - GIT Instructions
nav_exclude: true
---

# GIT Instructions
### Please read these assignment instructions in their entirety very carefully before starting it!
## 1. Set Up Your GitHub Repository:
- Create a new repository on GitHub named `username.github.io`, where `username` is your GitHub username.
- This repository will host your personal website.

## 2. Design Your Website:
- Create a simple HTML/CSS website. You can use any website template you like or build your own from scratch.
- Ensure that your website includes the following sections with `About Me as the landing page of your website`:
  - **About Me**: This will be your landing page. A brief introduction about yourself. The About me section should be accessible at `username.github.io/`, where `username` is your GitHub username.
  - **Work Experience**: If any, highlight your work experience. The Work experience section should be accessible at `username.github.io/work-experience`, where `username` is your GitHub username.
  - **Projects**: A section showcasing some of the projects you've worked on. The Project section should be accessible at `username.github.io/projects`, where `username` is your GitHub username.
  - **Contact**: Information on how to reach you, like email, LinkedIn, etc. The Contact section should be accessible at `username.github.io/contact`, where `username` is your GitHub username.
  - Each section should be a separate page. Don't include multiple sections in same page, create different dedicated pages for different sections.

## 3. Create an Assignment Section:
- Create a separate page (same as you did in the previous point for the other 4 sections) for an **Assignment** section where you will put all your course assignments. The assignment section should be accessible at `username.github.io/assignments`, where `username` is your GitHub username.
- For each assignment, you will provide a brief explanation of how you approached it.
- You will include a link to the GitHub code repository of that assignment.
- Below is an example image of how your assignment page in your portfolio website might look like (Styling is not necessary, you can choose to keep minimal styling):
![assignments_image](../../assets/images/hw1-image.png)

## 4. Requirements:
Please refer to the following list of requirements:
- Graders will be running an automated script to scrape all websites for each assignment. As such it's critical that:
  1. Your assignment repo should be public after the deadline (not before). Keep it private until the deadline.
  2. The href/link to your assignment's github repo on your website is exactly named: "Github Link". Note: capitalization is important here.
  3. The name of your github code repository should be of the format: `bu_username-assignment-X` (where `X` is the assignment number and `bu_username` is your *BU Email ID without @bu.edu*), for example, in my case (ayush25@bu.edu and for assignment 1): "ayush25-assignment-1" will be the correct GitHub repo name for assignment 1.
-  If any of these is missing, graders will not be able to find your assignment and you will get 0. For the first few assignments, if you do get 0 because the grading staff was unable to find your assignment, you will have 24h after grades are returned to fix the issue for a regrade. This second chance will not be available after the first month of classes.

## 5. Deploy Your Website:
- Push your website files to the main branch of your `username.github.io` repository.
- GitHub will automatically deploy your website to `https://username.github.io/`.
- Test your website to ensure it’s live and functioning as expected.

## 6. Dummy Assignment:
To practice submitting assignments for this course, please add a dummy assignment to your website. Follow the steps below carefully:
  1. Create a private repo called `bu_username-assignment-0` following the repo naming convention.
  2. Assignment task: Write a python script that adds two numbers together and prints their sum to the command line.
  3. Add, commit, push your code to your `bu_username-assignment-0` repo (which should still be private).
  4. Add an Assignment 0 section to your assignments page with a brief description of the project and the private repo linked following the requirements above.
  5. Add, commit, push these changes and ensure the dummy assignment is visible on your website.
  6. Finally make the `bu_username-assignment-0` public.

## 7. Submit to the Course Repository:
- Create a pull request against the course repository with a link to your website.