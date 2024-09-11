---
layout: page  
title: Assignment 2 - KMeans Clustering Visualization Webpage  
nav_exclude: true
---

# KMeans Clustering Visualization Webpage

>⚠️
>Please read the **ENTIRE** assignment before starting, so you understand the requirements and can plan accordingly.
>⚠️

## Objective

In this assignment, you will develop an interactive web application that demonstrates the KMeans clustering algorithm using various initialization methods. This project allows you to explore the impact of different initialization strategies on the clustering outcome.

## Description

The webpage **MUST** include the following functionality:

1. **Initialization Methods**:
   - **Random**: Centroids are chosen randomly from the data points.
   - **Farthest First**: Initial centroids are chosen such that they are farthest apart.
   - **KMeans++**: Initialization that ensures the centroids are spread out to accelerate convergence.
   - **Manual**: Users will select the initial centroids manually via point-and-click on the visualization.

2. **Visualization**:
   - Display the data points and centroids on a 2D plot.
   - Show the clustering process step-by-step, highlighting the data points and centroids assigned to each cluster.
   - Allow users to manually select centroids and dynamically visualize the clustering process.
   - Show the final cluster assignments on the plot.

3. **User Interface**:
   - A drop-down menu for users to select their initialization method.
   - A button to generate a new random dataset. The dataset **should not change** when users switch between different initialization methods. Only when the user requests a new dataset should it regenerate.
   - A button to step through the KMeans steps, allowing the user to watch the algorithm's progress by clicking this button as it steps through each step of the algorithm.
   - A button that allows the user to **go straight to convergence**, completing all steps of the algorithm at once.
   - A button for users to reset the algorithm and try different initialization methods.

## See this example for what your project might look like:

<video width="600" controls>
  <source src="./../../assets/videos/assignment2_demo_video.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Additional Requirements

1. **Makefile**:
   - You **must include a Makefile** that automates the setup and execution of your web application. The Makefile should install any dependencies and run your project in a local environment. The Makefile should include the following commands:
     - `make install`: Installs any dependencies required for the project.
     - `make run`: Runs the web application locally on `http://localhost:3000`.
   
   - **Important Notes for Grading**:
     Graders will use your Makefile to set up and test your application. The process will follow these steps:
     1. Run `make install` to install all required dependencies.
     2. Run `make run` to launch the web application locally.
     3. Access `http://localhost:3000` to interact with your web application.
     Ensure that your Makefile works smoothly, as a **non-functioning Makefile will automatically result in an grade of 0**. Also, your application **MUST** run on `http://localhost:3000`, or graders won't be able to access it, which **will result in a grade of 0**.
   
   - **GitHub Workflow Integration**:  
     While automated tests are not required, you must set up a GitHub Actions workflow (similar to [Lab 0](https://github.com/Chris210634/CS506-Lab0)) to ensure that your code is tested and run in the same way as the graders will. This workflow will ensure your project builds and runs correctly by running `make install` and `make run.

     1. Follow the instructions [here](https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-python#using-a-python-workflow-template) to create a python workflow template.
     2. Edit your newly created `.github/workflows/python-app.yml` file on Github to make sure it runs `make install` and `make run` as part of the workflow.
     3. Set the `make run` command to sleep after running the server for a few seconds to ensure the server has time to start up before the tests run.
     4. You should see a green check mark next to your commit when the workflow passes.

     This workflow will simulate how the graders will test your project, so it's important to ensure it runs successfully.

2. **Project Structure**:
   - You **must implement the KMeans algorithm from scratch**. **No existing libraries** that perform KMeans clustering are allowed. We recommend first implementing and testing the algorithm in Python before developing the user interface to interact with the algorithm.

## Submission

1. **Add the Repository to Your Portfolio**:
   - You **MUST** add this project to your portfolio site with a link to the GitHub repository with your project following the [guidelines outlined on the course website for assignment submission](https://gallettilance.github.io/assignment/#assignments) so that it can be graded properly.

2. **Demo Video**:
   - Instead of a description (or in addition to, if you wish), you **MUST** embed a demo video accompanying the link to your project's repository that showcases the functionality of your project on your portfolio site. The video will demonstrate all the functionality you have built into your website (as listed in the [Description](#description)), similar to how [our example video](#see-this-example-for-what-your-project-might-look-like) does. If you do not wish to add a video file to your portfolio, you may embed a YouTube link to your video instead.

## Additional Notes

1. **This Project is a Dynamic Site Separate From Your Portfolio**:
   - This dynamic web application **must be in a separate repository** from your static portfolio website. You need to create a dedicated repository for this project that allows for running the web application using `make run`. This must serve the web application on `http://localhost:3000`, ensuring the app is properly isolated from your static GitHub Pages site.

2. **Technologies**:
   - You may use any libraries you wish to create your webpage such as React.js, Flask, D3.js, matplotlib, or Plotly. Ensure the interface is responsive and intuitive.
   - Although not required, we encourage you to get creative with your CSS styling and HTML structure to make the interface visually appealing.

## Evaluation Criteria

Projects will be graded based on the following criteria (which can also be found [here](https://gallettilance.github.io/assignment/#assignments)):
   - 0/2: code did not run / little to no completion of the assignment
   - 1/2: code runs and assignment is complete but is missing specific requirements
   - 2/2: code runs and all requirements are met

---