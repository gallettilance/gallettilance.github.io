---
layout: page  
title: Assignment 4 - Latent Semantic Analysis (LSA) Search Engine Webpage
nav_exclude: true
---

# **Latent Semantic Analysis (LSA) Search Engine Webpage**

## Objective
In this assignment, you will develop an interactive web application that implements a basic search engine using **Latent Semantic Analysis (LSA)**. The search engine will take a user's query, perform LSA on a pool of documents, and return the top documents based on cosine similarity.

## Description

You will create a simple webpage where users can type queries and retrieve documents from a predefined dataset. The task involves applying **LSA** to reduce the dimensionality of the document-term matrix and using **cosine similarity** to measure the relevance of documents to the user’s query. 

The webpage MUST include the following functionality:

## Functionality
#### 1. Document Retrieval:
   - Users can enter a text query.
   - The system returns the top 5 documents based on their similarity to the query.
   
#### 2. Visualization:
   - Display a bar chart showing the cosine similarity of the top documents to the query.

#### 3. User Interface:
   - Input field for the user to type their query.
   - A "Search" button to perform the document retrieval.
   - A results section displaying the top 5 documents with their similarity scores.
   - A bar chart that shows the cosine similarity of the top documents to the query.

## Demo Video

<video width="600" controls>
  <source src="./../assets/videos/assignment4_demo_video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Additional Requirements

#### 1. Dataset:
You must use the Scikit-learn version of the **20 Newsgroups** dataset:

```python
from sklearn.datasets import fetch_20newsgroups
newsgroups = fetch_20newsgroups(subset='all')

```

#### 2. LSA Implementation:
   - **Term-Document Matrix**: Create a term-document matrix from the predefined dataset.
   - **Singular Value Decomposition (SVD)**: Apply SVD to the matrix to reduce the dimensionality.
   - **Query Handling**: Process the user's query and represent it in the reduced space to compute the cosine similarity between the query and documents.

#### 3. Project Structure
- Implement LSA from scratch using Python. You may use libraries like Scikit-learn for **SVD** and **TF-IDF** transformation but not for direct LSA.
- Once you have implemented LSA and cosine similarity calculations, integrate this logic into your web app, allowing for real-time querying and document retrieval.

#### 4. Makefile:
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
     While automated tests are not required, you must set up a GitHub Actions workflow (similar to [Lab 0](https://github.com/Chris210634/CS506-Lab0)) to ensure that your code is tested and run in the same way as the graders will. This workflow will ensure your project builds and runs correctly by running `make install` and `make run`.

     1. Follow the instructions [here](https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-python#using-a-python-workflow-template) to create a python workflow template.
     2. Edit your newly created `.github/workflows/python-app.yml` file on Github to make sure it runs `make install` and `make run` as part of the workflow.
     3. Set the `make run` command to sleep after running the server for a few seconds to ensure the server has time to start up before the tests run.
     4. You should see a green check mark next to your commit when the workflow passes.

     This workflow will simulate how the graders will test your project, so it's important to ensure it runs successfully.

## Example Workflow

1. **Input Query**: The user types a query such as "machine learning".
2. **LSA Processing**: The query is processed using LSA, and the cosine similarity between the query and all documents is computed.
3. **Result Display**: The top 5 most relevant documents are displayed with their cosine similarity scores.
4. **Visualization**: A bar chart visualizes the cosine similarity of the top 5 documents.

## Submission

#### 1. Add the Repository to Your Portfolio:
   - You **MUST** add this project to your portfolio site with a link to the GitHub repository with your project following the [guidelines outlined on the course website for assignment submission](https://gallettilance.github.io/assignment/#assignments) so that it can be graded properly.

#### 2. Demo Video:
   - Instead of a description (or in addition to, if you wish), you **MUST** embed a demo video accompanying the link to your project's repository that showcases the functionality of your project on your portfolio site. The video will demonstrate all the functionality you have built into your website (as listed in the [Description](#description)), similar to how [our example video](#demo-video) does. If you do not wish to add a video file to your portfolio, you may embed a YouTube link to your video instead.

## Additional Notes

#### 1. This Project is a Dynamic Site Separate From Your Portfolio:
   - This dynamic web application **must be in a separate repository** from your static portfolio website. You need to create a dedicated repository for this project that allows for running the web application using `make run`. This must serve the web application on `http://localhost:3000`, ensuring the app is properly isolated from your static GitHub Pages site.

#### 2. Technologies:
   - If you want, you can use the starter code [here](assignment4_starter_code.zip). In these files, the web app has been set up for you using Flask. You have to complete the missing code in `app.py` and `static/main.js`. Using the starter code is **NOT** mandatory.
   - You may use any libraries you wish to create your webpage such as React.js, Flask, Plotly, etc. Ensure the interface is responsive and intuitive.
   - Although not required, we encourage you to get creative with your CSS styling and HTML structure to make the interface visually appealing.

## Evaluation Criteria

Projects will be graded based on the following criteria (which can also be found [here](https://gallettilance.github.io/assignment/#assignments)):
   - 0/2: code did not run / little to no completion of the assignment
   - 1/2: code runs and assignment is complete but is missing specific requirements
   - 2/2: code runs and all requirements are met
   
---