---
layout: page
title: Final Project 
description: Final Project Details
---

# Final Project Requirements

Your final project must be in a GitHub repo with:
1. A README.md detailing the project, how to build and use the code, how to contribute, how to test the code, and what environment it's supported in.
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

 1. Form groups and submit proposal
 2. 2 project check-ins (one scheduled in March and another in April).
 3. Submit final report and presentation.
 
# Project Requirements
 
## Proposal
 
 The project proposal should include the following:
  - Description of the project.
  - Clear goal(s) (e.g. Successfully predict the number of students attending lecture based on the weather report).
  - What data needs to be collected and how you will collect it (e.g. scraping xyz website or polling students).
  - **Optional:** How you plan on modeling the data (e.g. clustering, fitting a linear model, decision trees, XGBoost, some sort of deep learning method, etc.).
  - **Optional:** How do you plan on visualizing the data? (e.g. interactive t-SNE plot, scatter plot of feature x vs. feature y).
  - **Optional:** What is your test plan? (e.g. withhold 20% of data for testing, train on data collected in October and test on data collected in November, etc.).
  
 Note that at this stage of the project you should be as explicit as possible on what the goals of the project are and how you plan on collecting the data.
 You can be a little more vague on the modeling and visualization aspects because that will evolve as you learn more methods in class and see what the data looks like.

 Keep in mind that the scope of this project should reflect two months worth of work. Do not be overly simple or ambitious. The course staff will provide feedback on your proposal. 

 **Please form groups of 1-5 students and create a GitHub repo. Submit your GitHub repo URL here: [https://forms.gle/ZswPBRmBXrRyQuLc6](https://forms.gle/ZswPBRmBXrRyQuLc6).**
 
 Your proposal should be submitted as `README.md` in your project GitHub repo.


## Proposal Rubric

### 1. Project Description (20 points)

| Criteria | Points |
|--------|--------|
| Project topic is clearly described | 10 |
| Project timeline planned | 10 |

**Notes**
- The topic for your final project fit should fit a two month timeline. As such, you should think carefully about how you will budget your time to meet this deadline. It is wise to consider a related, but simpler problem that you could fall back on in case you realize that the original goal was too ambitious.
- The project timeline should be a rough estimate (number of weeks) it will take to complete each important subtask for your project. You are not tied to this specific timeline; we are only looking to see how you realistically plan to complete the project in the allotted time.

### 2. Project Goals (20 points)


| Criteria | Points |
|--------|--------|
| Goal(s) are clearly stated | 10 |
| Goals are specific and measurable | 10 |

**Examples**
- **Good**: “Successfully predict the number of students attending lecture based on the weather report”
- **Bad**:  “Analyze weather data”

**Notes**
- A goal is specific and measurable if you can identify some set of features that you would like to examine. 

---

### 3. Data Collection Plan (10 points)

| Criteria | Points |
|--------|--------|
| Potential data sources identified | 5 |
| Data collection method explained (API, scraping, polling, etc.) | 5 |

---

### Summary

| Category | Points |
|--------|--------|
| Project Description & Motivation | 20 |
| Project Goals | 20 |
| Data Collection Plan | 10 |
| **Total** | **50** |

---


## Project Check-Ins

You will need to schedule **two** check-in meetings with all your group members present. One meeting in March and another in April. To schedule an appointment schedule a time on [Google Calendar](https://calendar.app.google/vw6eL2sCoouekK4eA). **Note:** All appointments must be made with at least 24 hour notice.

 
At your check-in please prepare
  - Preliminary visualizations of data.
  - Detailed description of data processing done so far.
  - Detailed description of data modeling methods used so far.
  - Preliminary results. (e.g. we fit a linear model to the data and we achieve promising results, or we did some clustering and we notice a clear pattern in the data)
 
You will be asked questions about what you have done so far and what you plan to do next (and why).


## Project Check-In Rubric (March)

### 1. Preliminary Data Visualizations (15 points)


| Criteria | Points |
|--------|--------|
| At least one relevant visualization is presented | 10 |
| Visualizations are clear and readable (well-labeled) | 5 |
| Visualizations show meaningful patterns or inform future exploration | 5 |

**Notes**
- Visualizations can be rough (not final-quality), but should be correctly labeled
- You will be asked how to interpret your visuzalization(s) and what conclusions (if any) we can draw from it

---

### 2. Data Processing Progress (15 points)


| Criteria | Points |
|--------|--------|
| Clear sources of data and data collection methods have been considered | 5 |
| Data cleaning steps considered | 5 |
| Reasoning for data processing decisions are well-explained | 5 |

**Notes**
- Data collection and cleaning does not need to be finalized (especially for the March check-in), but you should demonstrate that you have taken some initial steps.

---

### 3. Modeling Methods (15 points)


| Criteria | Points |
|--------|--------|
| Process being predicted/described is clearly explained | 5 |
| Relevant features are chosen to predict/describe the process | 5 |
| Clear justification for features used | 5 |

**Notes**
- Explanation for your design decisions is much more important than the performance of your chosen model at this stage.

---

### 4. Preliminary Results & Interpretation (5 points)

| Criteria | Points |
|--------|--------|
| Preliminary results are presented and interpreted | 5 |

**Notes**
- Your results at this stage are not expected to be good. However, you should be able to reason about what may be causing poor results.

---

### Summary

| Category | Points |
|--------|--------|
| Preliminary Visualizations | 15 |
| Data Processing Progress | 15 |
| Modeling Methods | 15 |
| Preliminary Results | 5 |
| **Total** | **50** |



 
## Final Report and Presentation (Due 5/1)
 
 The `README.md` in your project repo is the final report.
 
 You must include the following:
  - **How to build and run the code (Include this first so we know how to reproduce your results). 
  There should be a `makefile` that installs all dependencies and builds the code. This is the most important part.**
  - Include test code and a GitHub workflow that runs the test code. 
  Just test a few things you think are important - no need to overdo it on the testing front, since that’s not the focus of the project.
  - Visualizations of data (interactive visualizations are highly encouraged).
  - Description of data processing and modeling (what the code does).
  - Results showing that you achieved your goal.

 The 10-minute presentation should be a recording uploaded to YouTube. Please add the video link to the beginning of your report.
  
## Example Project Ideas

 **Spark! Projects:** You are welcome to choose a Spark! project from [this link](https://docs.google.com/document/d/1-a7IIj5K5v1mcdvi0_cUSYJpfFmZ9QJmsYikYGl3bJ4/edit?usp=sharing). There would be an additional requirement of presenting a poster at demo day at the end of the semester. As part of doing a Spark! project, you would get access to Spark! Experts in Residence and SMEs via [booking links](www.bu.edu/spark/consultations) and project support from the Spark! program team Thursday evenings at Spark’s Syntax & Snax event from 4-7pm at Spark (CDS207).
 
 We also encourage you to come up with your own ideas that you can feel passionate about, but we list here some (random) example project ideas. 
 
 1. Exploring the connection between moon phases and weather data. An example goal could be to predict temperature anomaly based on the moon phase. 
 Weather data from various weather stations is publicly available and can be scraped from sites like wunderground.com.
 2. Predicting the next day's stock price based on stock movements and options data from the previous day. The goal would be to beat the buy-and-hold trading strategy. 
 Stock and options data could be scraped from websites like nasdaq.com.
 3. Predicting the optimal lane to drive in on a highway. For example, driving on I-93 from the north, there's the option of taking the HOV lane or the two other lanes. 
 The goal is to pick the lane(s) that minimize time in traffic. Live webcam data can be scraped from https://mass511.com/. You would probably need to use some computer vision techniques to process the images.
 4. Predicting people's moods based on current events. Current event data can be scraped from news websites or using the twitter API to monitor trending events.
 People's moods can be polled using a Google form distributed weekly to the class. You would probably need to use a text feature extractor.


## Final Report Rubric 

### 1. GitHub Organization & Reproducibility (20 points)

| Criteria | Points |
|--------|--------|
| Clear instructions to build and run the code (`makefile`) | 10 |
| Repository is well organized (clear structure, logical files) | 5 |
| Results are reproducible | 5 |


---

### 2. Data Collection (15 points)

| Criteria | Points |
|--------|--------|
| Data collection process is well-documented in README  | 5 |
| Data source(s) clearly identified and justified | 5 |
| Data collection method implemented in code | 5 |


---

### 3. Data Cleaning (15 points)

| Criteria | Points |
|--------|--------|
| Cleaning steps clearly described in README | 5 |
| Handling of missing, noisy, or inconsistent data | 5 |
| Cleaning logic implemented in code | 5 |

---

### 4. Feature Extraction (10 points)

| Criteria | Points |
|--------|--------|
| Features are clearly defined and explained in README | 5 |
| Extracted features are appropriate for the task | 5 |

---

### 5. Model Training & Evaluation (25 points)

| Criteria | Points |
|--------|--------|
| Training procedure is clearly described in README | 5 |
| Model choice is appropriate for the problem | 10 |
| Evaluation strategy is appropriate | 5 |
| Discussion of limitations or failure cases | 5 |

---

### 6. Data Visualization & Results (15 points)

| Criteria | Points |
|--------|--------|
| Visualizations are clear and readable (e.g., correctly labelled plots) | 5 |
| Visualizations reveal patterns or insights | 5 |
| Visualizations support results | 5 |


---

### Summary

| Category | Points |
|--------|--------|
| GitHub Organization & Reproducibility | 20 |
| Data Collection | 15 |
| Data Cleaning | 15 |
| Feature Extraction | 10 |
| Model Training & Evaluation | 25 |
| Data Visualization & Results | 15 |
| **Total** | **100** |

