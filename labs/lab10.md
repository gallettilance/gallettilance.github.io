---
layout: page
title: Lab 10 - Dimensionality Reduction and Image Retrieval with PCA
nav_exclude: true
---

# Lab 10: Dimensionality Reduction and Image Retrieval with PCA

## Overview

In this lab, you will implement a simplified image search system using **Principal Component Analysis (PCA)** for dimensionality reduction. You will:
- Convert images into grayscale and normalize their pixel values.
- Apply PCA to reduce the dimensionality of image embeddings.
- Use nearest-neighbor search to find the most similar images based on PCA embeddings.
- Visualize the results.

In this lab, you will train PCA on first 2000 images and then transform the first 10,000 images based on the PCA trained on first 2000 images. This is a common strategy used when we have a large dataset (we train PCA on a smaller sample and transform the remaining data based on the training done on the smaller sample.)

First download the dataset (same dataset as in assignment 10) from [here](https://drive.google.com/file/d/1eNQIUlIKqOg-3e205YIMyUnfTTaOIspP/view?usp=sharing.)
Now, please complete the Python notebook [here](lab10.ipynb).