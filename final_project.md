---
layout: page
title: Final Project 
description: Final Project Details
---

# Final Project Requirements

Your final project must be in a GitHub repo with:
1. A README.md detailing the project, how to build and use the code, how to contribute, how to test the code, and what environment it’s supported in.
2. GitHub workflow should be defined to test the code. Just test a few things you think are important - no need to overdo it on the testing front that’s not the focus of the project.
3. Code should be consumable / runnable and results should be reproducible with only a few instructions / commands

# Project Goals

The goal is to practice the full data science lifecycle on a topic of your choice.

The proposed project must include the following components:
 - Data collection
 - Data cleaning
 - Feature extraction
 - Data visualization
 - Model training
 
Throughout this project, you should maintain a well organized GitHub.

# Project Timeline

Work in groups of 1-5 students.

 1. Form groups and submit proposal by October 1.
 2. Submit midterm report and short presentation by November 5.
 3. Submit final report by December 10.
 
 # Project Requirements
 
 ## Proposal (Due 10/1)
 
 The project proposal should include the following:
  - Description of the project.
  - Clear goal(s) (e.g. Successfully predict the number of students attending lecture based on the weather report).
  - What data needs to be collected and how you will collect it (e.g. scraping xyz website or polling students).
  - How you plan on modeling the data (e.g. clustering, fitting a linear model, decision trees, XGBoost, some sort of deep learning method, etc.).
  - How do you plan on visualizing the data? (e.g. interactive t-SNE plot, scatter plot of feature x vs. feature y).
  - What is your test plan? (e.g. withhold 20% of data for testing, train on data collected in October and test on data collected in November, etc.).
  
 Note that at this stage of the project you should be as explicit as possible on what the goals of the project are and how you plan on collecting the data.
 You can be a little more vague on the modeling and visualization aspects because that will evolve as you learn more methods in class and see what the data looks like.

 Keep in mind that the scope of this project should reflect two months worth of work. Do not be overly simple or ambitious. The course staff will provide feedback on your proposal. 

 Please form groups of 1-5 students and create either a GitHub repo. Submit your GitHub repo URL here: link here.
 
 Your proposal should be submitted as `README.md` in your project GitHub repo.

 ## Midterm Report and Presentation (Due 11/5)
 
 The midterm report and 5-minute presentation should include the following.
  - Preliminary visualizations of data.
  - Detailed description of data processing done so far.
  - Detailed description of data modeling methods used so far.
  - Preliminary results. (e.g. we fit a linear model to the data and we achieve promising results, or we did some clustering and we notice a clear pattern in the data)
 
 We expect to see preliminary code in your project repo at this point.
 
 Your report should be submitted as `README.md` in your project GitHub repo.
 
 The 5-minute presentation should be a recording uploaded to YouTube. Please add the video link to the beginning of your report.
 
 ## Final Report (Due 12/10)
 
 The `README.md` in your project repo is the final report (reuse anything you want from the midterm report).
 
 You must include the following:
  - How to build and run the code (Include this first so we know how to reproduce your results). 
  There should be a `makefile` that installs all dependencies and builds the code. 
  - Include test code and a GitHub workflow that runs the test code. 
  Just test a few things you think are important - no need to overdo it on the testing front, since that’s not the focus of the project.
  - Visualizations of data (interactive visualizations are highly encouraged).
  - Description of data processing and modeling (what the code does).
  - Results showing that you achieved your goal.
  
 ## Example Project Ideas
 
 We encourage you to come up with your own ideas that you can feel passionate about, but we list here some (random) example project ideas. 
 
 1. Exploring the connection between moon phases and weather data. An example goal could be to predict temperature anomaly based on the moon phase. 
 Weather data from various weather stations is publicly available and can be scraped from sites like wunderground.com.
 2. Predicting the next day's stock price based on stock movements and options data from the previous day. The goal would be to beat the buy-and-hold trading strategy. 
 Stock and options data could be scraped from websites like nasdaq.com.
 3. Predicting the optimal lane to drive in on a highway. For example, driving on I-93 from the north, there's the option of taking the HOV lane or the two other lanes. 
 The goal is to pick the lane(s) that minimize time in traffic. Live webcam data can be scraped from https://mass511.com/. You would probably need to use some computer vision techniques to process the images.
 4. Predicting peoples' moods based on current events. Current event data can be scraped from news websites or using the twitter API to monitor trending events.
 Peoples' moods can be polled using a Google form disctributed weekly to the class. You would probably need to use a text feature extractor.
