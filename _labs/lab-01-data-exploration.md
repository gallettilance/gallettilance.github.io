---
title: Lab 1 - Data Exploration with Pandas
lab_number: 1
topics: [data_exploration, pandas, visualization, data_cleaning]
difficulty: beginner
estimated_time: 2-3 hours
prerequisites: [python_basics, jupyter_notebooks]
learning_objectives:
  - Load and explore datasets using pandas
  - Create basic visualizations with matplotlib
  - Identify and handle missing data
  - Perform basic statistical analysis
---

# Lab 1: Data Exploration with Pandas

## Overview
In this lab, you'll learn the fundamentals of data exploration using pandas and matplotlib. You'll work with a real-world dataset to practice loading data, examining its structure, creating visualizations, and handling common data issues.

## Learning Objectives
- Load and explore datasets using pandas
- Create basic visualizations with matplotlib
- Identify and handle missing data
- Perform basic statistical analysis

## Dataset
We'll be working with the **Boston Housing Dataset**, a classic dataset containing information about housing prices in Boston suburbs. This dataset is perfect for learning data exploration techniques.

## Setup Instructions

### 1. Environment Setup
```bash
# Install required packages
pip install pandas numpy matplotlib seaborn scikit-learn
```

### 2. Download the Dataset
```python
from sklearn.datasets import load_boston
import pandas as pd

# Load the dataset
boston = load_boston()
data = pd.DataFrame(boston.data, columns=boston.feature_names)
data['PRICE'] = boston.target
```

## Lab Exercises

### Exercise 1: Data Loading and Initial Exploration
**Goal**: Load the dataset and perform initial exploration

```python
# Your code here
# 1. Load the dataset
# 2. Display the first 5 rows
# 3. Check the data types of each column
# 4. Get basic information about the dataset
```

**Questions to Answer**:
- How many rows and columns does the dataset have?
- What are the data types of each column?
- Are there any missing values?

### Exercise 2: Statistical Summary
**Goal**: Understand the statistical properties of the data

```python
# Your code here
# 1. Generate descriptive statistics
# 2. Check for outliers using box plots
# 3. Examine the distribution of key variables
```

**Questions to Answer**:
- What is the average house price?
- Which variables have the most variation?
- Are there any obvious outliers?

### Exercise 3: Data Visualization
**Goal**: Create meaningful visualizations to understand the data

```python
# Your code here
# 1. Create a histogram of house prices
# 2. Create scatter plots of price vs key features
# 3. Create a correlation heatmap
```

**Questions to Answer**:
- What is the distribution of house prices?
- Which features are most strongly correlated with price?
- Are there any interesting patterns in the data?

### Exercise 4: Data Cleaning
**Goal**: Handle missing data and data quality issues

```python
# Your code here
# 1. Check for missing values
# 2. Handle any data quality issues
# 3. Create a cleaned version of the dataset
```

**Questions to Answer**:
- Are there any missing values that need to be handled?
- Are there any data quality issues?
- How did you decide to handle missing data?

## Submission Requirements

### Code Notebook
Submit a Jupyter notebook containing:
- All code with clear comments
- Answers to all questions
- Visualizations with proper titles and labels
- Summary of findings

### Written Report (1-2 pages)
Include:
- **Data Overview**: Summary of the dataset and its key characteristics
- **Key Findings**: Most important insights from your exploration
- **Data Quality Issues**: Any problems you found and how you handled them
- **Recommendations**: Suggestions for further analysis

## Grading Criteria
- **Code Quality** (30%): Clean, well-commented code
- **Analysis Depth** (40%): Thorough exploration and insights
- **Visualizations** (20%): Clear, informative plots
- **Documentation** (10%): Clear explanations and conclusions

## Resources
- [Pandas Documentation](https://pandas.pydata.org/docs/)
- [Matplotlib Tutorial](https://matplotlib.org/stable/tutorials/index.html)
- [Data Cleaning Guide](https://pandas.pydata.org/pandas-docs/stable/user_guide/missing_data.html)

## Tips for Success
1. **Start Simple**: Begin with basic exploration before diving into complex analysis
2. **Document Everything**: Comment your code and explain your reasoning
3. **Ask Questions**: Don't just plot data - think about what patterns you're looking for
4. **Iterate**: Refine your visualizations based on what you discover

## Next Steps
After completing this lab, you'll be ready for:
- Lab 2: Feature Engineering and Preprocessing
- Lab 3: Clustering Analysis
- Lab 4: Classification Models

---

**Due Date**: Week 2 | **Points**: 100 | **Submission**: Gradescope 