
# CSCI5709-W23-A3

<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# ASSIGNMENT 3

* *Date Created*: 05 APR 2023
* *Last Modification Date*: 05 APR 2023

* *GitLab Main Repo URL* = https://git.cs.dal.ca/anujd/winter-2023-csci-5709-group-04

* *GitLab Front-end Group's URL*: https://git.cs.dal.ca/raich/winter2023-csci-5709-group04-frontend
* *GitLab Back-end Group's URL*: https://git.cs.dal.ca/ruchika/csci-5709-group04/

* *FrontEnd Deployed Link* = https://web-cs-dal-ca-cwd-group04-csci5709-a3.netlify.app/
* *Backend Deployed Link* = https://cook-with-dal-a3.onrender.com

## Author

* [ANUJ DAWAR](an877696@dal.ca) - *(OWNER)*

## Features Developed - Likes and Comments

This feature enables anyone and everyone to like/unlike a recipe and even add them comments. The likes and comments posted will be publicly visible. This feature will help boost the confidence of the author and feed them genuine feedback. This will make users feel confident in trying their recipes is by looking at the likes and comments on the recipe.

### Tasks
1. Like
2. Unlike
3. Add comment
4. View comments
5. Update comment
6. Delete comment

### Files created for Likes and Comments Feature

#### Front-end Files
LikesComments/LikesComments.css
LikesComments/LikesComments.js

#### Back-end Files
src/controllers/RecipeController.js
src/controllers/RecipeLikedByUserController.js
src/controllers/models/Recipe.js
src/controllers/models/RecipeLikedByUser.js
src/controllers/routes/RecipeLikedByUserRoutes.js
src/controllers/routes/RecipeRoutes.js

## Getting Started

## TOOLS

VSCode [1] is used as a development IDE.
Postman [2] is used for testing backend APIs.

## Deployment

The react app is deployed on Netlify[3]. 
Netlify account is linked to Netlify and observer is set on the repository for automatic deployment.
Backend is deployed on render[4].

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [NodeJs] [5] - Backend
* [Express] [6] - Backend server
* [Reactjs] [7] - The web framework used
* [MongoDB] [8] - Database

## Sources Used

Boilerplate code is referenced from [7]. 

## Acknowledgments

References :

[1] Microsoft, "Visual studio code - code editing. redefined," RSS, 03-Nov-2021. [Online]. Available: https://code.visualstudio.com/. [Accessed: 05-April-2023]. 

[2] Postman, "Postman" [Online]. Available: https://www.postman.com/. [Accessed: 05-April-2023]. 

[3] "Develop and deploy websites and apps in record time," Netlify. [Online]. Available: https://www.netlify.com/. [Accessed: 05-April-2023].

[4]	“Cloud application hosting for developers,” Render. [Online]. Available: https://render.com/. [Accessed: 05-April-2023]. 

[5] Node.js, Node.js. [Online]. Available: https://nodejs.org/en/. [Accessed: 05-April-2023]. 

[6] “Node.js web application framework,” Express. [Online]. Available: https://expressjs.com/. [Accessed: 05-April-2023]. 

[7] "Create a new react app," Reactjs.org. [Online]. Available: https://reactjs.org/docs/create-a-new-react-app.html. [Accessed: 05-April-2023].

[8] “The developer Data Platform,” MongoDB. [Online]. Available: https://www.mongodb.com/. [Accessed: 05-Apr-2023].

[9] “Dotenv,” npm. [Online]. Available: https://www.npmjs.com/package/dotenv. [Accessed: 05-April-2023]. 

[10] “Mongoose crash course - beginner through advanced,” YouTube, 23-Nov-2021. [Online]. Available: https://www.youtube.com/watch?v=DZBGEVgL2eE&amp;list=LL&amp;index=1&amp;ab_channel=WebDevSimplified. [Accessed: 05-April-2023].  