---
layout: page
title: Assignment 7 - Hypothesis Testing and Confidence Intervals
nav_exclude: true
---

# Hypothesis Testing and Confidence Intervals in Linear Regression

In this assignment, you'll extend your previous work from assignment 6 to include hypothesis testing and confidence intervals through simulations. You'll enhance your interactive webpage to allow users to perform hypothesis tests on the slope or intercept of the regression line and generate confidence intervals based on simulations.

## Task Overview

In addition to the features implemented in your website on Assignment 6, you must implement the following features:

### 1. Hypothesis Testing

- **Workflow**:
  - **First**, users will generate data using the specified parameters.
  - **Next**, they can choose to perform hypothesis testing based on the generated data.

- **User Inputs**:
  - **Parameter to Test**: Allow the user to select whether to test the **slope** or **intercept**.
  - **Type of Test**:
    - **Greater than ( > )**
    - **Less than ( < )**
    - **Not equal to ( ≠ )**

- **Null Hypothesis**:
  - The null hypothesis will use the **original slope or intercept specified during data generation**.

- **Simulation**:
  - Use the stored simulations from the data generation step to create the distribution under the null hypothesis.
  - Display a histogram of the simulated slopes or intercepts.
  - Mark the observed statistic and the hypothesized value on the histogram.
  - Calculate and display the **p-value** based on the simulations.
  - Add a fun message when the p-value is extremely small (p ≤ 0.0001).

### 2. Confidence Intervals

- **User Inputs**:
  - **Parameter for Confidence Interval**: Allow the user to select the **slope** or **intercept**.
  - **Confidence Level**: Allow the user to select a confidence level (e.g., 90%, 95%, 99%).

- **Simulation**:
  - Use the stored simulations from data generation to compute the confidence interval for the mean estimate.
  - Compute the mean and standard error of the simulated estimates.
  - Calculate the confidence interval using the t-distribution.
  - Plot the individual simulated estimates as gray points.
  - Plot the mean estimate as a colored point.
  - Plot the confidence interval as a horizontal line.
  - Mark the true parameter value on the plot.
  - Display whether the confidence interval includes the true parameter.

## Instructions

1. **Extend Your Existing Code**:
   - Copy relevant code from your Assignment 6 to the starter code provided.
   - **Add new input fields for users to specify the intercept (β₀) and slope (β₁)**, along with the mean (μ), variance (σ²), sample size (N), and number of simulations (S).
   - Update the data generation to use these user-specified values.
   - Store the simulated slopes and intercepts from the data generation step for later use.

2. **Modify the Webpage Workflow**:

   - **Data Generation**:
     - Users input parameters for data generation and click a **"Generate Data"** button.
     - Display the plots related to data generation (scatter plot, histograms).

   - **Hypothesis Testing**:
     - After generating data, users can input parameters for hypothesis testing.
     - Provide a **"Run Hypothesis Testing"** button under the data generation results.
     - The hypothesis testing should use the stored simulations from the data generation.

   - **Confidence Intervals**:
     - Provide options for generating confidence intervals.
     - Include a **"Calculate Confidence Interval"** button.
     - The confidence interval calculation should use the stored simulations.

3. **Hypothesis Testing Implementation**:

   - **Simulation**:
     - Use the slopes or intercepts from the stored simulations as the distribution under the null hypothesis.
     - For each simulation:
       - Generate a dataset using `Y = β₀ + β₁ * X + μ + error`.
       - Compute the slope or intercept for each simulated dataset.
     - Store these values to create the distribution under the null hypothesis.

   - **Calculating p-value**:
     - Based on the type of test ( > , < , ≠ ), calculate the proportion of simulated statistics that are as extreme or more extreme than the observed statistic from your sample.
     - **For example**:
       - **Greater than**: `p-value = (number of simulated stats ≥ observed stat) / S`
       - **Less than**: `p-value = (number of simulated stats ≤ observed stat) / S`
       - **Not equal to**: `p-value = (number of simulated stats as extreme as observed stat) / S`
     - **Display the calculated p-value on your webpage.**

   - **Handling Small p-values**:
     - Add code to display a fun message when the p-value is extremely small (e.g., ≤ 0.0001).
     - This message should inform the user that they have encountered a rare event.

   - **Visualization**:
     - Plot a histogram of the simulated statistics.
     - Mark the observed statistic and the hypothesized value on the histogram.
     - See below for an example of a histogram with a p-value calculation.

      ![Hypothesis Testing](../assets/images/assignment7-image-1.png)

4. **Confidence Intervals Implementation**:

   - **Simulation**:
     - Use the stored simulations to calculate the confidence interval for the mean estimate.
     - Compute the mean and standard error of the simulated estimates.
     - Calculate the confidence interval using the t-distribution.

   - **Visualization and Analysis**:
     - Plot the individual simulated estimates as gray points.
     - Plot the mean estimate as a colored point.
     - Plot the confidence interval as a horizontal line.
     - Mark the true parameter value on the plot.
     - Display whether the confidence interval includes the true parameter by changing its color.
     - See below for an example of confidence intervals with the true parameter value marked.

      ![Confidence Intervals](../assets/images/assignment7-image-2.png)

5. **New User Inputs**:

   - Update your webpage to include new input fields and options for:
     - Selecting the parameter to test (slope or intercept).
     - Choosing the type of hypothesis test.
     - Selecting the confidence level for intervals.

6. **Create a Short Demo Video (2-3 minutes)**:

   - Explain the new additions to the webpage.
     - Demonstrate your application with different inputs.
     - Interpret the p-values obtained.
     - Describe how the confidence intervals are constructed and their significance.
     - Share any interesting patterns or observations from your experiments.
   - Record your screen while doing a voiceover narrating the above content.

7. **Submission**:

   - **Code**:
     - Submit your completed code as a GitHub repository on your portfolio website as you have done for previous assignments.

   - **Demo Video**:
     - Embed your video in your portfolio website either directly or from YouTube.
     - Include the link to the video in your assignment repository's README file.
