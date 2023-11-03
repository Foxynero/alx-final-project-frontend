# FeFHub - ALX Portfolio Project

FeFHub is a web application designed to help ALX students find job opportunities and assist companies in connecting with ALX students. This README provides an overview of the project and how to get it up and running.

Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

ALX students often face challenges when searching for job opportunities, and companies struggle to find suitable ALX student candidates. FeFHub is our solution to bridge this gap. It offers a job board platform where ALX students can explore job postings, and companies can easily share their openings.

## Features

### Admin Dashboard

Admin users can log in and add new job posts.

### Auto-Generation

Admins can generate job posts from templates to streamline the posting process.

### Job Suggestion

Utilizing machine learning, the app suggests job posts based on user information.

1. Being able to add a new job post when logged in as an admin
2. Being able to auto generate a new job post from a template when logged in as an admin so they dont have to fill in the same information over and over again
3. Being able to auto suggest a job post based on the information provided by the user(preferably using machine learning)

## Problem we are trying to solve

1. ALX students have a hard time finding jobs
2. Companies have a hard time finding ALX students

## Solution

- Create a job board for ALX students to find jobs and connect to companies

## Technologies

- Node.js - For the backend
- React.js - For the frontend
- MongoDB - For the database storage

## Architecture

| Plan                                      | Solution (Yes)                                                                                                                              | Solution (No)                                 |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| First time visitor on Home page           | first time visitors will be greeted with a landing page that will have a preview of the job posts available and ask about his/her interests | ----                                          |
| User interested in a particular job field | if the user is interested in a particular job field, he/she will be fed with more job posts related to that field                           | Else he/she will be fed with random job posts |
| User interested in a particular company   | if the user is interested in a particular company, he/she will be fed with more job posts related to that company                           | Else he/she will be fed with random job posts |

---

## Technologies

- **Node.js**: Backend development.
- **React.js**: Frontend development.
- **MongoDB**: Database storage.
- **Bootstrap**: Used for styling.
- **Material Design Icons and Font Awesome**: Icons and fonts.
- **Selectize.js**: For enhanced dropdowns.
- **Owl Carousel**: For image carousels.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.

   ```bash
   cd FeFHub-alx-project
   Install the necessary dependencies.
   ```

bash
Copy code
npm install
Start the development server.

bash
Copy code
npm start
Usage
Once the project is running locally, you can access it in your web browser at http://localhost:3000. Here are some basic usage instructions:

Register or log in to your account.
Explore job postings and apply for positions.
If you are an admin, log in to the admin dashboard to add new job posts or use the auto-generation feature.
Contributing
We welcome contributions from the community to make FeFHub even better. To contribute:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with clear, descriptive commit messages.
Push your changes to your fork.
Create a pull request to the main repository.

Please refer to our Contributing Guidelines for more details.

## Team Members

- [Asare Felix](https://github.com/flexywork327/)
- [Foster Adu Gyamfi](https://github.com/Foxynero/)
- [Esther Ademipe](https://github.com/legacycodine/)
