<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

# CookWithDal

CookWithDal is an innovative recipe-sharing app designed for Dalhousie students. With a focus on ease and convenience, this app allows students to share recipes, create shopping lists based on the ingredients needed for each recipe, and even track the nutritional information of the dishes they prepare. Students can discover new, quick-to-make recipes with minimal ingredients or share their favourite regional delicacies with fellow students.

- _Date Created_: 13 APR 2023
- _Last Modification Date_: 13 APR 2023

* FrontEnd Deployed URL_: https://web-cs-dal-ca-cwd-csci5709-group4.netlify.app/
* BackEnd Deployed URL_: https://cook-with-dal-final.onrender.com
* GitLab Main Repo URL_ : https://git.cs.dal.ca/anujd/winter-2023-csci-5709-group-04
* Gitlab Frontend Repository URL: https://git.cs.dal.ca/raich/winter2023-csci-5709-group04-frontend.git 
* Gitlab Backend Repository URL: https://git.cs.dal.ca/ruchika/csci-5709-group04.git 


## Authors

- [Anuj Dawar](an877696@dal.ca) - _(Full Stack Developer)_
- [Faiza Umatiya](faizaumatiya@dal.ca) - _(Full Stack Developer)_
- [Parul Raich](pr678267@dal.ca) - _(Full Stack Developer)_
- [Ruchika](rc315087@dal.ca) - _(Full Stack Developer)_
- [Saif Ali Prasla](sf527330@dal.ca) - _(Full Stack Developer)_
- [Sagarkumar Vaghasia](sg682034@dal.ca) - _(Full Stack Developer)_

## Getting Started

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this lab / assignment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

You will need to install any web browser (Chrome, Firefox etc).  
You will also need to install nodeJs.

### Installing

A step-by-step series of steps that tell you how to get a development env running:

1. Clone GIT repo

a. Firstly clone the GIT repository to your local machine.
b. Take the code of the main branch.

2. Install nodejs

a. Install nodejs from https://nodejs.org/en/.

3. Run the application.

a. Go to the directory of the app where package.json lies.
b. Run the command "npm install". It will install dependencies. It will build the node_modules folder.
c. Then run the command "npm start". It will run on localhost and you would be able to see the staff management page in the web browser.

4. Production-ready build.

a. Run command "npm run build". It will create a build folder.

### To run the backend code,

1. Clone the git repo
2. go to the backend folder
3. run npm install to install the dependencies
4. run npm start to run the server

## Deployment

For deployment, frontend was deployed on netlify. Same steps were followed as they were in tutorial 2.
The backend is deployed in render.com

### Coding style tests

- W3 Complience check - Passed (Tested on this [site](https://validator.w3.org/))

## Built With

[React] (https://reactjs.org/) - The web framework.
[MaterialUI] ( https://mui.com) -Material UI library
[Node] (https://nodejs.org/en) - NodeJs
[Express] (https://expressjs.com/) - Express
[MongoDB] (https://www.mongodb.com/) - mongo db
[ReactBootstrap] (https://react-bootstrap.github.io/) - React Bootstrap

## Features

## Features Developed - Likes and Comments, Meal Planner, In-app Notification (Owner - Anuj Dawar)

This feature enables anyone and everyone to like/unlike a recipe and even add them comments. The likes and comments posted will be publicly visible. This feature will help boost the confidence of the author and feed them genuine feedback. This will make users feel confident in trying their recipes is by looking at the likes and comments on the recipe.

### Tasks

1. Like
2. Unlike
3. Add comment
4. View comments
5. Update comment
6. Delete comment

#### Front-end Files

1. `src\Components\LikesComments\LikesComments.css`
2. `src\Components\LikesComments\LikesComments.js`

#### Back-end Files

1. `src\controllers\RecipeController.js`
2. `src\controllers\RecipeLikedByUserController.js`
3. `src\models\Recipe.js`
4. `src\models\RecipeLikedByUser.js`
5. `src\routes\RecipeLikedByUserRoutes.js`
6. `src\routes\RecipeRoutes.js`
7. `src\models\MealPlan.js`
8. `src\models\Notification.js`
9. `src\controllers\NotificationController.js`
10. `src\controllers\MealPlannerController.js`
11. `src\routes\MealPlannerRoutes.js`
12. `src\routes\NotificationRoutes.js`
13. `src\services\NotificationService.js`
14. `src\services\MealPlannerService.js`

## Features Developed - Profile Account Management (Owner - Faiza Umatiya)

Profile Account Management feature enables user to make changes in their personal information/user details. I implemented this feature which allows users to do various task like update user details, display their profile on profile page and also gives privilege to delete the user account. One can see this feature under profile page on "CookWithDal". On Profile page, user clicks on "Edit profile" to update details such as First name, Last name, Bio (about user such as hobby, location etc) and profile picture. Apart from this, user can see his/her "created" and "saved" recipes. "Created" recipes can be seen after user adds the recipe (dependent feature - Add Recipe). "Saved" recipes is visible once the user bookmarks/saved recipe (dependent feature - Bookmark Recipe). Lastly, the user can delete the profile from the profile page. So if user wants to login, he/she can't do that because that account does'nt exist anymore.

## Tasks

1. Update user profile.
2. Delete user profile.
3. Display user profile (List of recipes ("Created" and "Saved")).

### Front-end files

1. `src\Components\AddRecipe\AddRecipe.css`
2. `src\Components\Profile Management\DisplayProfile.css`
3. `src\Components\Profile Management\DisplayProfileDemo3.js`
4. `src\Components\Profile Management\UpdateProfile.css`
5. `src\Components\Profile Management\UpdateProfile.js`
6. `src\Components\UpdateRecipe\UpdateRecipe.css`
7. `src\Components\UpdateRecipe\UpdateRecipePage.js`

### Back-end files

1.  `src\controllers\RecipeController.js`
2.  `src\controllers\UserController.js`
3.  `src\models\Recipe.js`
4.  `src\models\User.js`
5.  `src\routes\RecipeRoutes.js`
6.  `src\routes\UserRoutes.js`
7.  `src\services\RecipeService.js`
8.  `src\services\UserService.js`

# Features Developed - Feed Page, Search & Filter, Bookmark, Navbar, and Meal Planner (Owner - Parul Raich)

I created the front of the feed page and integrated it with backend data and added functionality to the bookmark button, Also developed the code to get images stored in the backend server to the frontend. Integrated the Likes and comments features to the feed Page and Linked the view recipe page with the feed. For the bookmark feature, developed the save and remove bookmark feature.

I have created a basic calender ui with static images in for meal planner. This is a bonus feature and will be integrated during the final submission.

## Tasks

1. Feed Page (Display recipes details(including image) in card components and integrate with data from backend and integrate with functions)
2. Add Bookmark
3. Remove Bookmark
4. Planner Static Display

### Front-end files

1. `src\Components\Feed\FeedPage.js`
2. `src\Components\Feed\MyCardComponent.js`
3. `src\Components\Profile Management\DisplayProfileDemo3.js`
4. `src\Components\Planner\MealPlanner.js`
5. `src\Components\Planner\MealPlanner.css`
6. `src\Components\Navbar\Navbar.js`
7. `src\Components\Navbar\Navbar.css`

### Back-end files

1. `src\controllers\BookmarkController.js`
2. `src\controllers\ImageController.js`
3. `src\models\Bookmark.js`
4. `src\routes\BookmarkRoutes.js`
5. `src\routes\ImageRoutes.js`
6. `src\services\BookmarkService.js`

# Features Developed - Shopping List for Missing Items, In-app Notification and Navbar (Owner - Ruchika)

I have implemented this feature with which users can create a shopping list for themselves where they can maintain a list of missing ingredients of recipes by adding and removing them. Users can create multiple shopping lists for different recipes. Users also have the option to remove the entire shopping list once that list is complete so that they don’t need to remove items one-by-one. This feature helps the users to maintain the shopping list at one place which can be retrieved in a single click and doesn’t need paper or any other apps.

## Tasks

1. Create Shopping List
2. Add ingredients to Shopping List
3. Remove Ingredients from Shopping List
4. Delete Shopping List

### Front-end files

1. `src\Components\Shopping-List\Shopping-List.css`
2. `src\Components\Shopping-List\Shopping-List.jsx`
3. `src\Components\Shopping-List\Selected-Panel-List\Selected-Panel-List.css`
4. `src\Components\Shopping-List\Selected-Panel-List\Selected-Panel-List.jsx`
5. `src\Components\Shopping-List\Selection-Panel-List\Selection-Panel-Reducer.js`
6. `src\Components\Shopping-List\Selection-Panel-List\Selection-Panel.css`
7. `src\Components\Shopping-List\Selection-Panel-List\Selection-Panel.jsx`
8. `src\Components\api-handler.js`
9. `src\Components\Navbar\Notification.js`
10. `src\Components\Navbar\Navbar.js`
11. `src\Components\Navbar\Navbar.css`

### Back-end files

1. `src\controllers\IngredientController.js`
2. `src\controllers\ShoppingListController.js`
3. `src\models\Ingredient.js`
4. `src\models\ShoppingList.js`
5. `src\routes\ShoppingListRoutes.js`
6. `src\services\IngredientService.js`
7. `src\services\ShoppingListService.js`

# Features Developed - Recipe Management (Owner - Sagarkumar Vaghasia)

I have implemented the Recipe Management with which users can create a new recipe which can be viewed by others and this can also be reflected under "created" recipes under profile section. Users can view the recipe details by clicking on the recipe from feed page or from profile page. If user is the owner of the recipe i.e. if user has created the recipe then sers can update the details of their created recipes by clicking on "Update Recipe" from view recipe page. If user wish to delete the recipe then user can delete the recipe from view recipe page by clicking on "Delete Recipe" from view recipe page.

## Tasks

1. Add Recipe
2. Update Recipe
3. Delete Recipe
4. View Recipe

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

# Features Developed - User Management module and Navbar (Owner - Saifali Prasla)

I have implemented this feature with which users are created and they are authenticated with the application. If the user forgets their password, they can reset their password. In order to reset the password, user would require to answer a security question which was asked during the signup page. The password and answer are stored in the database in the encrypted format. Once the user with their work , they can logout of the application. In order to scope the styling to a specific component, I have used CSS modules

## Tasks

1. Create User
2. Login and Reset Password
3. Logout

### Front-end files

1. `src\Components\User Management\Signup.module.css`
2. `src\Components\User Management\Signup.js`
3. `src\Components\User Management\Login.js`
4. `src\Components\User Management\Login.module.css`
5. `src\Components\User Management\ForgetPassword.js`
6. `src\Components\User Management\ForgetPassword.module.css`
7. `src\Components\User Management\NewPassword.js`
8. `src\Components\User Management\NewPassword.module.css`
9. `src\Components\User Management\SecurityQuestion.js`
10. `src\Components\User Management\SecurityQuestion.module.css`
11. `src\Components\Navbar\Navbar.js`
12. `src\Components\Navbar\Navbar.css`

### Back-end files

1. `src\controllers\UserController.js`
2. `src\models\User.js`
3. `src\routes\UserRoutes.js`
4. `src\services\UserService.js`

## Sources Used

1.  We implemented our application by referring official documentation of React at https://reactjs.org/docs/getting-started.html.
2.  For styling the react components, we used various material components from https://mui.com/material-ui/getting-started/overview/ like Card, Image List, select, textfield, checkbox, table, pagination, Grid, Container, Box etc.
3.  For uploading image and retrieving from the mongoDB, we used https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
4.  Mongo search query - https://stackoverflow.com/questions/72989213/
5.  API call at page load - https://stackoverflow.com/questions/67670799/react-js-call-api-on-page-load
6.  Search API for mulitple fields - https://stackoverflow.com/questions/36568585/how-to-construct-query-to-filter-by-pairs-of-keys-in-mongodb
7.  Add key value pair in array - https://stackoverflow.com/questions/39827087/add-key-value-pair-to-all-objects-in-array
8.  Delete docuement from mongodb - https://www.mongodb.com/docs/manual/tutorial/remove-documents/
9.  For updating child object in mongo document - https://www.mongodb.com/community/forums/t/updating-a-nested-object-in-a-document-using-mongoose/141865
10. For mongodb crud - https://www.dotnettricks.com/learn/react/mern-stack-crud-operations-example
11. Used the base React materialUI components from Google - https://www.npmjs.com/package/@mui/material

## References

1. https://fullcalendar.io/docs/react
2. https://dev.to/eichgi/react-fullcalendar-snippet-ka3
3. https://dev.to/lberge17/fullcalendar-with-react-3hnl
4. https://www.npmjs.com/package/react-calendar
5. https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/
6. https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
7. https://stackoverflow.com/questions/56957863/material-ui-popover-how-to-anchor-to-another-element-different-from-event-targe
8. https://blog.logrocket.com/mern-stack-tutorial/
9. https://react-hook-form.com/
10. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
11. https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
12. https://axios-http.com/docs/intro
13. https://www.digitalocean.com/community/tutorials/react-axios-react
14. https://medium.com/@mridu.sh92/a-quick-guide-for-authentication-using-bcrypt-on-express-nodejs-1d8791bb418f
15. https://jasonwatmore.com/post/2020/07/20/nodejs-hash-and-verify-passwords-with-bcrypt
16. https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
17. https://dev.to/franciscomendes10866/setup-mongodb-with-mongoose-and-express-4c58
18. https://dribbble.com/session/new
19. https://codesandbox.io/s/0nrho?file=/src/App.js
