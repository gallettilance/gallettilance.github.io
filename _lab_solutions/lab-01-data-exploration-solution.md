---
title: Lab 1 Solution - Data Exploration with Pandas
lab_number: 1
topics: [data_exploration, pandas, visualization, data_cleaning]
difficulty: beginner
solution_type: complete
learning_objectives:
  - Load and explore datasets using pandas
  - Create basic visualizations with matplotlib
  - Identify and handle missing data
  - Perform basic statistical analysis
---

# Lab 1 Solution: Data Exploration with Pandas

## Complete Solution Code

```python
# Import required libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_boston

# Set up plotting style
plt.style.use('default')
sns.set_palette("husl")

# Load the dataset
boston = load_boston()
data = pd.DataFrame(boston.data, columns=boston.feature_names)
data['PRICE'] = boston.target

print("Dataset loaded successfully!")
print(f"Shape: {data.shape}")
```

## Exercise 1: Data Loading and Initial Exploration

```python
# Display first 5 rows
print("First 5 rows:")
print(data.head())

# Check data types
print("\nData types:")
print(data.dtypes)

# Get basic information
print("\nDataset info:")
print(data.info())

# Check for missing values
print("\nMissing values:")
print(data.isnull().sum())

# Display basic statistics
print("\nBasic statistics:")
print(data.describe())
```

**Answers**:
- **Rows and Columns**: 506 rows, 14 columns (13 features + 1 target)
- **Data Types**: All columns are float64 (continuous variables)
- **Missing Values**: No missing values in this dataset

## Exercise 2: Statistical Summary

```python
# Generate descriptive statistics
print("Descriptive Statistics:")
print(data.describe())

# Create box plots for key variables
fig, axes = plt.subplots(2, 2, figsize=(12, 8))
fig.suptitle('Distribution of Key Variables', fontsize=16)

# Box plots for key features
key_features = ['CRIM', 'RM', 'AGE', 'PRICE']
for i, feature in enumerate(key_features):
    row = i // 2
    col = i % 2
    data.boxplot(column=feature, ax=axes[row, col])
    axes[row, col].set_title(f'{feature} Distribution')

plt.tight_layout()
plt.show()

# Check for outliers using IQR method
def detect_outliers(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    outliers = df[(df[column] < lower_bound) | (df[column] > upper_bound)]
    return outliers

print("\nOutlier Analysis:")
for feature in ['CRIM', 'RM', 'AGE', 'PRICE']:
    outliers = detect_outliers(data, feature)
    print(f"{feature}: {len(outliers)} outliers ({len(outliers)/len(data)*100:.1f}%)")
```

**Answers**:
- **Average House Price**: $22,533 (target variable)
- **Most Variation**: CRIM (crime rate) has the highest standard deviation
- **Outliers**: CRIM has many outliers due to its skewed distribution

## Exercise 3: Data Visualization

```python
# Create histogram of house prices
plt.figure(figsize=(10, 6))
plt.hist(data['PRICE'], bins=30, edgecolor='black', alpha=0.7)
plt.title('Distribution of House Prices', fontsize=14)
plt.xlabel('Price ($1000s)', fontsize=12)
plt.ylabel('Frequency', fontsize=12)
plt.grid(True, alpha=0.3)
plt.show()

# Create scatter plots of price vs key features
fig, axes = plt.subplots(2, 2, figsize=(12, 8))
fig.suptitle('Price vs Key Features', fontsize=16)

key_features = ['RM', 'LSTAT', 'PTRATIO', 'CRIM']
for i, feature in enumerate(key_features):
    row = i // 2
    col = i % 2
    axes[row, col].scatter(data[feature], data['PRICE'], alpha=0.6)
    axes[row, col].set_xlabel(feature)
    axes[row, col].set_ylabel('Price')
    axes[row, col].set_title(f'Price vs {feature}')
    axes[row, col].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Create correlation heatmap
plt.figure(figsize=(12, 8))
correlation_matrix = data.corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0,
            square=True, linewidths=0.5)
plt.title('Correlation Heatmap', fontsize=14)
plt.tight_layout()
plt.show()

# Show top correlations with price
price_correlations = correlation_matrix['PRICE'].sort_values(ascending=False)
print("\nTop correlations with PRICE:")
print(price_correlations)
```

**Answers**:
- **Price Distribution**: Slightly right-skewed, most houses between $10k-$30k
- **Strongest Correlations**: 
  - LSTAT (negative): Lower socioeconomic status → lower prices
  - RM (positive): More rooms → higher prices
  - PTRATIO (negative): Higher pupil-teacher ratio → lower prices
- **Interesting Patterns**: Clear negative correlation between LSTAT and price

## Exercise 4: Data Cleaning

```python
# Check for missing values
print("Missing values check:")
print(data.isnull().sum())

# Check for duplicate rows
print(f"\nDuplicate rows: {data.duplicated().sum()}")

# Check for infinite values
print(f"Infinite values: {np.isinf(data.select_dtypes(include=[np.number])).sum().sum()}")

# Create cleaned dataset (no missing values in this dataset, but here's the process)
data_cleaned = data.copy()

# Handle outliers if needed (example for CRIM)
Q1 = data_cleaned['CRIM'].quantile(0.25)
Q3 = data_cleaned['CRIM'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Cap outliers instead of removing them
data_cleaned['CRIM_capped'] = data_cleaned['CRIM'].clip(lower=lower_bound, upper=upper_bound)

print("\nData cleaning summary:")
print(f"Original shape: {data.shape}")
print(f"Cleaned shape: {data_cleaned.shape}")
print(f"CRIM outliers capped: {len(data[data['CRIM'] > upper_bound])} values")
```

**Answers**:
- **Missing Values**: None found in this dataset
- **Data Quality Issues**: CRIM has many outliers due to its nature (crime rates can be very high in some areas)
- **Handling Strategy**: Capped outliers rather than removing them to preserve data integrity

## Key Insights and Findings

### 1. Dataset Characteristics
- **Size**: 506 housing records with 13 features
- **Quality**: Clean dataset with no missing values
- **Target**: House prices ranging from $5k to $50k

### 2. Important Features
- **RM (Average Rooms)**: Strongest positive correlation with price
- **LSTAT (% Lower Status)**: Strongest negative correlation with price
- **PTRATIO (Pupil-Teacher Ratio)**: Moderate negative correlation
- **CRIM (Crime Rate)**: Weak negative correlation, many outliers

### 3. Data Quality
- No missing values or duplicates
- CRIM has many outliers (expected for crime data)
- All variables are continuous and properly scaled

### 4. Recommendations for Further Analysis
1. **Feature Engineering**: Create interaction terms (e.g., RM × LSTAT)
2. **Outlier Handling**: Consider robust statistical methods
3. **Model Selection**: Linear models should work well given the correlations
4. **Feature Selection**: Focus on RM, LSTAT, PTRATIO for initial models

## Common Mistakes to Avoid

1. **Not checking data types** - Always verify your data types
2. **Ignoring outliers** - Understand why outliers exist before removing them
3. **Poor visualization** - Always add titles, labels, and proper formatting
4. **No documentation** - Comment your code and explain your reasoning
5. **Rushing analysis** - Take time to understand the data before modeling

## Extension Activities

1. **Feature Engineering**: Create new features like price per room
2. **Advanced Visualizations**: Try 3D plots or pair plots
3. **Statistical Tests**: Perform correlation significance tests
4. **Data Transformation**: Try log transformations for skewed variables

---

**This solution demonstrates proper data exploration techniques and provides a foundation for more advanced analysis in subsequent labs.** 