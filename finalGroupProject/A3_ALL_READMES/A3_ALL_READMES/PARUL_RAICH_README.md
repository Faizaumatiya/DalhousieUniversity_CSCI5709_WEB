# CSCI-5709 : Assignment 3

# CookWithDal
CookWithDal is an innovative recipe-sharing app designed for Dalhousie students. With a focus on ease and convenience, this app allows students to share recipes, create shopping lists based on the ingredients needed for each recipe, and even track the nutritional information of the dishes they prepare. Students can discover new, quick-to-make recipes with minimal ingredients or share their favourite regional delicacies with fellow students. 


* *Date Created*: 05 APR 2023
* *Last Modification Date*: 05 APR 2023
* *Feature Completed*: - Feed and Bookmark and Planner

* *GitLab Main Repo URL = https://git.cs.dal.ca/anujd/winter-2023-csci-5709-group-04

* *GitLab Front-end Group's URL: https://git.cs.dal.ca/raich/winter2023-csci-5709-group04-frontend
* *GitLab Back-end Group's URL: https://git.cs.dal.ca/ruchika/csci-5709-group04/

* *FrontEnd Deployed URL: "https://web-cs-dal-ca-cwd-group04-csci5709-a3.netlify.app/"
* *BackEnd Deployed URL: "https://cook-with-dal-a3.onrender.com"

## Authors

* [Parul Raich](pr678267@dal.ca) - *(Full-Stack Developer)*

# Features Developed - Feed Page and Bookmark

I created the front of the feed page and integrated it with backend data and added functionality to the bookmark button, Also developed the code to get images stored in the backend server to the frontend. Integrated the Likes and comments features to the feed Page and Linked the view recipe page with the feed. For the bookmark feature, developed the save and remove bookmark feature.

I have created a basic calender ui with static images in for meal planner. This is a bonus feature and will be integrated during the final submission. 

## Tasks
1. Feed Page (Display recipes details(including image) in card components and integrate with data from backend and integrate with functions)
2. Add Bookmark
3. Remove Bookmark
4. Planner Static Display

## Files Created by Me Feed and bookmark Feature

### Front-end files
1. `src\Components\Feed\FeedPage.js`
2. `src\Components\Feed\MyCardComponent.js`
3. `src\Components\Profile Management\DisplayProfileDemo3.js`
4. `src\Components\Planner\MealPlanner.js`

### Back-end files
1. `src\controllers\BookmarkController.js`
2. `src\controllers\ImageController.js`
3. `src\models\Bookmark.js`
4. `src\routes\BookmarkRoutes.js`
5. `src\routes\ImageRoutes.js`
6. `src\services\BookmarkService.js`

# Getting Started

## Tools

1.  [VSCode](https://visualstudio.microsoft.com/) - Development IDE is used for coding both the frontend and backend of the application.
2.  [Postman](https://www.postman.com/) - It is used for testing backend APIs.

## Deployment

### FrontEnd Deployment

* Frontend is deployed on [Netlify](https://www.netlify.com/)

### BackEnd Deployment

* Backend is deployed on [Render](https://render.com/).

## Built With

* [ReactJS](https://reactjs.org/docs/create-a-new-react-app.html) - The core frontend library used to develop modular components as part of the semi-functional prototype.
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Used the core router package to configure routing of the SPA.
* [@mui/material](https://www.npmjs.com/package/@mui/material) - Used the base React materialUI components from Google.
* [NodeJS](https://nodejs.org/en/) - It is a Backend Javascript engine. 
* [ExpressJS](https://expressjs.com/) - It is a lightweight HTTP server used to create the backend in Node JS.
* [MongoDB](https://www.mongodb.com/) - NoSQL Database used for storing data in form of collections.


