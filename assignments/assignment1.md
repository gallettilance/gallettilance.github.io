---
layout: page
title: Assignment 1 - Data Collection and Analysis
nav_exclude: true
---

#  Data Collection and Analysis

 KMeans and KMeans++ Clustering

## Objective

In this assignment, students will develop an interactive web application to explore and implement the KMeans clustering algorithm using different initialization methods. The aim is to understand the effect of initialization on the performance of the algorithm and gain hands-on experience with interactive user input.

## Description

You are tasked with building a website that allows users to experiment with various methods for initializing the KMeans clustering algorithm. The website should provide the following features:

1. **Initialization Methods**:
   - **Random**: Centroids are chosen randomly from the data points.
   - **Farthest First**: The initial centroids are chosen such that they are farthest from each other in the feature space.
   - **KMeans++**: A smarter initialization method designed to speed up convergence by spreading out the initial centroids.
   - **Manual**: Users manually select the initial centroids by clicking on the visualization, and a button is provided to start the clustering process.

2. **Visualization**:
   - Display the data points and centroids on a 2D plot.
   - Allow users to interact with the plot (e.g., by clicking to place centroids).
   - Update the visualization dynamically to show how the clusters evolve after each iteration of the KMeans algorithm.

3. **User Interface**:
   - A drop-down menu (or any other type of user input) for users to select the initialization method.
   - A button to run the algorithm after manual selection of centroids.
   - A restart/reset option for users to try different methods on the same dataset.

4. **Performance Metrics**:
   - Display the final clustering result.
   - Show relevant metrics such as the total sum of squared distances (inertia) for the final clustering.
   
## Additional Requirements

1. **Makefile**:
   - You must include a `Makefile` in your project repository.
   - The `Makefile` should contain commands to:
     - Start the webpage locally, so that graders can easily run and interact with your project for grading.
     - Example: the command `make start` should start the server hosting the webpage.
   - Ensure that your webpage is fully functional and accessible through the `Makefile`.

2. **GitHub Portfolio Integration**:
   - Include this project in your GitHub portfolio website under the "Assignments" section.
   - Create a new repository following the naming convention `assignment-X`, where X is the assignment number.
   - Include a brief explanation of your approach in the "Assignments" section of your website, along with the required GitHub repository link for this project. The link should follow the naming convention "Github Link".

3. **Technologies**:
   - You may use libraries such as React.js, Flask, D3.js, or Plotly for your webpage. Ensure the interface is responsive and intuitive.

4. **Project Structure**:
   - Implement KMeans from scratch, particularly for manual centroid selection. For KMeans++, you may use an existing library, but ensure it's well-integrated.

## Evaluation Criteria

Projects will be graded based on the following:
- **Correctness**: Functionality of the KMeans algorithm across all initialization methods.
- **User Experience**: Clarity and usability of the interface for selecting and running the clustering algorithm.
- **Visualization**: Effectiveness of the visual feedback on clustering and initialization.
- **GitHub Portfolio Integration**: Correct integration of the project in your GitHub portfolio website, following the required conventions.
- **Makefile**: The Makefile should be functional, and the `make start` command should allow the graders to easily run the webpage locally.

- SEE THE WEBSITE -- MUST FOLLOW REQUIREMENTS AND THE WEBSITE IS THE BASIC RUBRIC

## Submission Guidelines

1. **GitHub Portfolio Website**:
   - Update your "Assignments" page to include this project, adhering to the conventions mentioned above.
   - Push the assignment repository to GitHub following the naming conventions.
   - Include a functional link to the deployed version of your clustering project.

2. **Course Repository Submission**:
   - Submit a pull request to the course repository with a link to your GitHub portfolio website, following the established process.

**Due Date**: [Insert due date here]

---

If you have any questions or need clarification, feel free to reach out during office hours or via email.



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
  - **Projects**: A section showcasing some of the projects you've worked on. The Work experience section should be accessible at `username.github.io/projects`, where `username` is your GitHub username.
  - **Contact**: Information on how to reach you, like email, LinkedIn, etc. The Work experience section should be accessible at `username.github.io/contact`, where `username` is your GitHub username.
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
  1. Create a private repo called `assignment-0` following the repo naming convention.
  2. Assignment task: Write a python script that adds two numbers together and prints their sum to the command line.
  3. Add, commit, push your code to your `assignment-0` repo (which should still be private).
  4. Add an Assignment 0 section to your assignments page with a brief description of the project and the private repo linked following the requirements above.
  5. Add, commit, push these changes and ensure the dummy assignment is visible on your website.
  6. Finally make the `assignment-0` public.

## 7. Submit to the Course Repository:
- Create a pull request against the course repository with a link to your website.