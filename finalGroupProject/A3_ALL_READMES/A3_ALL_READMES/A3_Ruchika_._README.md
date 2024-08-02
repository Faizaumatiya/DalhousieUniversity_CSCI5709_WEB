# CSCI-5709 : Assignment 3

# CookWithDal
CookWithDal is an innovative recipe-sharing app designed for Dalhousie students. With a focus on ease and convenience, this app allows students to share recipes, create shopping lists based on the ingredients needed for each recipe, and even track the nutritional information of the dishes they prepare. Students can discover new, quick-to-make recipes with minimal ingredients or share their favourite regional delicacies with fellow students. 

* *Date Created*: 05 APR 2023
* *Last Modification Date*: 05 APR 2023

* *GitLab Main Repo URL = https://git.cs.dal.ca/anujd/winter-2023-csci-5709-group-04
* *GitLab FrontEnd Code URL*: https://git.cs.dal.ca/raich/winter2023-csci-5709-group04-frontend
* *GitLab BackEnd Code URL*: https://git.cs.dal.ca/ruchika/csci-5709-group04

* *FrontEnd Deployed URL*: https://web-cs-dal-ca-cwd-group04-csci5709-a3.netlify.app/
* *BackEnd Deployed URL*: https://cook-with-dal-a3.onrender.com

## Authors

* [Ruchika](rc315087@dal.ca) - *Developer*

# Features Developed - Shopping List for Missing Items

I have implemented this feature with which users can create a shopping list for themselves where they can maintain a list of missing ingredients of recipes by adding and removing them. Users can create multiple shopping lists for different recipes. Users also have the option to remove the entire shopping list once that list is complete so that they don’t need to remove items one-by-one. This feature helps the users to maintain the shopping list at one place which can be retrieved in a single click and doesn’t need paper or any other apps.

## Tasks
1. Create Shopping List
2. Add ingredients to Shopping List
3. Remove Ingredients from Shopping List
4. Delete Shopping List

## Files Created by Me for Shopping List feature

### Front-end files
1. `src\Components\Shopping-List\Shopping-List.css`
2. `src\Components\Shopping-List\Shopping-List.jsx`
3. `src\Components\Shopping-List\Selected-Panel-List\Selected-Panel-List.css`
4. `src\Components\Shopping-List\Selected-Panel-List\Selected-Panel-List.jsx`
5. `src\Components\Shopping-List\Selection-Panel-List\Selection-Panel-Reducer.js`
6. `src\Components\Shopping-List\Selection-Panel-List\Selection-Panel.css`
7. `src\Components\Shopping-List\Selection-Panel-List\Selection-Panel.jsx`
8. `src\Components\api-handler.js`
9. `src\App.css`

### Back-end files
1. `src\controllers\IngredientController.js`
2. `src\controllers\ShoppingListController.js`
3. `src\models\Ingredient.js`
4. `src\models\ShoppingList.js`
5. `src\routes\ShoppingListRoutes.js`
6. `src\services\IngredientService.js`
7. `src\services\ShoppingListService.js`

## Frontend and backend integration
The frontend interacts with the backend over HTTP through the REST API exposed by the backend. The API handler declared in `src\Components\api-handler.js` has the responsibility of handling these API calls and contains all config items such as the `BASE_URL` of the backend. For development, this usually points to the `localhost:8080` whereas for production, we point it to the deployed link as mentioned above.

# Getting Started

## Tools

1.  [VSCode](https://visualstudio.microsoft.com/) is used as a development IDE.
2.  [Postman](https://www.postman.com/) is used for testing backend APIs.

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


