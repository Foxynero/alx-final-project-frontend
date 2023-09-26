# ALX Portfolio Project

Job board for ALX students to find jobs and for companies to find ALX students

## Problem we are trying to solve

1. ALX students have a hard time finding jobs
2. Companies have a hard time finding ALX students

## Solution

- Create a job board for ALX students to find jobs

## Features for the App

1. Being able to add a new job post when logged in as an admin
2. Being able to auto generate a new job post from a template when logged in as an admin so they dont have to fill in the same information over and over again
3. Being able to auto suggest a job post based on the information provided by the user(preferably using machine learning)

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
