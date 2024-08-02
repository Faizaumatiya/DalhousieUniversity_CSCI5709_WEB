# CSCI-5709 : ASSIGNMENT 3

# CookWithDal
CookWithDal is an innovative recipe-sharing app designed for Dalhousie students. With a focus on ease and convenience, this app allows students to share recipes, create shopping lists based on the ingredients needed for each recipe, and even track the nutritional information of the dishes they prepare. Students can discover new, quick-to-make recipes with minimal ingredients or share their favourite regional delicacies with fellow students. 


* *Date Created*: 05 APR 2023
* *Last Modification Date*: 05 APR 2023
* *Feature Completed*: - Recipe Management (AddRecipe, UpdatRecipe, DeleteRecipe, ViewRecipe)

* *GitLab Main Repo URL* = https://git.cs.dal.ca/anujd/winter-2023-csci-5709-group-04

* *GitLab Front-end Group's URL*: https://git.cs.dal.ca/raich/winter2023-csci-5709-group04-frontend
* *GitLab Back-end Group's URL*: https://git.cs.dal.ca/ruchika/csci-5709-group04/

* *FrontEnd Deployed URL*: https://web-cs-dal-ca-cwd-group04-csci5709-a3.netlify.app/
* *BackEnd Deployed URL*: https://cook-with-dal-a3.onrender.com

## Authors

* [Sagarkumar Vaghasia](sg682034@dal.ca) - *(Full-Stack Developer)*

# Features Developed - Recipe Management (AddRecipe, UpdatRecipe, DeleteRecipe, ViewRecipe)

I have implemented the Recipe Management with which users can create a new recipe which can be viewed by others and this can also be reflected under "created" recipes under profile section. Users can view the recipe details by clicking on the recipe from feed page or from profile page. If user is the owner of the recipe i.e. if user has created the recipe then sers can update the details of their created recipes by clicking on "Update Recipe" from view recipe page. If user wish to delete the recipe then user can delete the recipe from view recipe page by clicking on "Delete Recipe" from view recipe page. 

## Tasks
1. Add Recipe
2. Update Recipe
3. Delete Recipe
4. View Recipe

## Files Created by Me for Recipe Managment Feature

### Front-end files
1. `src\Components\AddRecipe\AddRecipe.js`
2. `src\Components\AddRecipe\AddRecipe.css`
3. `src\Components\UpdateRecipe\UpdateRecipePage.js`
4. `src\Components\UpdateRecipe\UpdateRecipe.css`
5. `src\Components\ViewRecipe\ViewRecipe.js`
6. `src\Components\ViewRecipe\viewRecipe.css`


### Back-end files
1. `src\controllers\RecipeController.js`
2. `src\models\Recipe.js`
3. `src\routes\RecipeRoutes.js`
4. `src\services\RecipeService.js`

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
* [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) - Used the base React boostrap components from Google.

## Sources Used
1. Official documentation of Material with React at https://mui.com/material-ui/getting-started/overview/ has been used for learning purposes to implement the web page's styling and components. Used various components of material like Card, Box, Card.Img, table, Grid, Container, etc.
2. Official documentation of React at https://reactjs.org/docs/getting-started.html has been used for learning purposes to implement this web application in react. 
3. For form validation, react hook form is used at https://react-hook-form.com/.
4. For date setting component in add recipe and update recipe, react date.now() was used at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now.
5. For CRUD in MongoDB - https://www.dotnettricks.com/learn/react/mern-stack-crud-operations-example 
6. For upload/store images in MongoDB using Node.js & Multer is learned using https://www.bezkoder.com/node-js-upload-store-images-mongodb/.
7. For making API calls from front-end to backend we have used AXIOS which can be found at https://axios-http.com/docs/intro , https://www.digitalocean.com/community/tutorials/react-axios-react.


