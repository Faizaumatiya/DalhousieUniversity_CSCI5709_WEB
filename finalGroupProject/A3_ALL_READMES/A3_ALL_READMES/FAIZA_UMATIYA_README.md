# CSCI-5709 : Assignment 3

# CookWithDal

CookWithDal is an innovative recipe-sharing app designed for Dalhousie students. With a focus on ease and convenience, this app allows students to share recipes, create shopping lists based on the ingredients needed for each recipe, and even track the nutritional information of the dishes they prepare. Students can discover new, quick-to-make recipes with minimal ingredients or share their favourite regional delicacies with fellow students.

- _Date Created_: 05 APR 2023
- _Last Modification Date_: 05 APR 2023
- _Feature Completed_: - Profile Account Management

* _GitLab Main Repo URL_ = https://git.cs.dal.ca/anujd/winter-2023-csci-5709-group-04

* _GitLab Front-end Group's URL_: https://git.cs.dal.ca/raich/winter2023-csci-5709-group04-frontend
* _GitLab Back-end Group's URL_: https://git.cs.dal.ca/ruchika/csci-5709-group04/

* _FrontEnd Deployed URL_: https://web-cs-dal-ca-cwd-group04-csci5709-a3.netlify.app/
* _BackEnd Deployed URL_: https://cook-with-dal-a3.onrender.com

## Authors

- [Faiza](faizaumatiya@dal.ca) - _Developer_

# Features Developed - Profile Account Management

Profile Account Management feature enables user to make changes in their personal information/user details. I implemented this feature which allows users to do various task like update user details, display their profile on profile page and also gives privilege to delete the user account. One can see this feature under profile page on "CookWithDal". On Profile page, user clicks on "Edit profile" to update details such as First name, Last name, Bio (about user such as hobby, location etc) and profile picture. Apart from this, user can see his/her "created" and "saved" recipes. "Created" recipes can be seen after user adds the recipe (dependent feature - Add Recipe). "Saved" recipes is visible once the user bookmarks/saved recipe (dependent feature - Bookmark Recipe). Lastly, the user can delete the profile from the profile page. So if user wants to login, he/she can't do that because that account does'nt exist anymore.

## Tasks

1. Update user profile.
2. Delete user profile.
3. Display user profile (List of recipes ("Created" and "Saved")).

## Files Created by Me for Shopping List feature

### Front-end files

1. `src\Components\AddRecipe\AddRecipe.css`
2. `src\Components\Profile Management\DisplayProfile.css`
3. `src\Components\Profile Management\DisplayProfileDemo3.js`
4. `src\Components\Profile Management\UpdateProfile.css`
5. `src\Components\Profile Management\UpdateProfile.js`
6. `src\Components\UpdateRecipe\UpdateRecipe.css`
7. `src\Components\UpdateRecipe\UpdateRecipePage.js`
8. `src\App.js`

### Back-end files

1.  `src\controllers\ImageController.js`
2.  `src\controllers\RecipeController.js`
3.  `src\controllers\UserController.js`
4.  `src\models\Recipe.js`
5.  `src\models\User.js`
6.  `src\routes\ImageRoutes.js`
7.  `src\routes\RecipeRoutes.js`
8.  `src\routes\UserRoutes.js`
9.  `src\services\RecipeService.js`
10. `src\services\UserService.js`

# Getting Started

## Tools

1.  [VSCode](https://visualstudio.microsoft.com/) - Development IDE is used for coding both the frontend and backend of the application.
2.  [Postman](https://www.postman.com/) - It is used for testing backend APIs.

## Deployment

### FrontEnd Deployment

- Frontend is deployed on [Netlify](https://www.netlify.com/)

### BackEnd Deployment

- Backend is deployed on [Render](https://render.com/).

## Built With

- [ReactJS](https://reactjs.org/docs/create-a-new-react-app.html) - The core frontend library used to develop modular components as part of the semi-functional prototype.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Used the core router package to configure routing of the SPA.
- [@mui/material](https://www.npmjs.com/package/@mui/material) - Used the base React materialUI components from Google.
- [NodeJS](https://nodejs.org/en/) - It is a Backend Javascript engine.
- [ExpressJS](https://expressjs.com/) - It is a lightweight HTTP server used to create the backend in Node JS.
- [MongoDB](https://www.mongodb.com/) - NoSQL Database used for storing data in form of collections.
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) - Used the base React boostrap components from Google.

## Sources Used

1. To update user details i referred https://blog.logrocket.com/mern-stack-tutorial/ and react official document https://reactjs.org/docs/getting-started.html which helped me learn how to fetch using axios.

2. For styling i used material with react at https://mui.com/material-ui/getting-started/overview/ which made my profile page quite responsive. I used components such as Image List, Card, Box, Table, Grid, Container, etc.

3. For form validation, i referred https://react-hook-form.com/.

4. In Model, for user mongoose schema and recipe mongoose schema, i used date setting component to add recipe/update recipe and update recipe by react date.now() from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now.

5. For retrieving images from mongoDB, i used "multer" by referring https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d

6. To make API calls from front-end to back-end, I used AXIOS referred from https://axios-http.com/docs/intro , https://www.digitalocean.com/community/tutorials/react-axios-react.
