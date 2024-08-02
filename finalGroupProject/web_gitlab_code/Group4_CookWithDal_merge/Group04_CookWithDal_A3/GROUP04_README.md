<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

# CookWithDal

CookWithDal is an innovative recipe-sharing app designed for Dalhousie students. With a focus on ease and convenience, this app allows students to share recipes, create shopping lists based on the ingredients needed for each recipe, and even track the nutritional information of the dishes they prepare. Students can discover new, quick-to-make recipes with minimal ingredients or share their favourite regional delicacies with fellow students.

- Date Created: 05 APR 2023
- Last Modification Date: 05 APR 2023

* GitLab Main Repo URL = https://git.cs.dal.ca/anujd/winter-2023-csci-5709-group-04
* FrontEnd Deployed URL: https://web-cs-dal-ca-cwd-group04-csci5709-a3.netlify.app/
* BackEnd Deployed URL: https://cook-with-dal-a3.onrender.com

## Authors

- [Anuj Dawar](an877696@dal.ca) - (Full Stack Developer)
- [Faiza Umatiya](faizaumatiya@dal.ca) - (Full Stack Developer)
- [Parul Raich](pr678267@dal.ca) - (Full Stack Developer)
- [Ruchika](rc315087@dal.ca) - (Full Stack Developer)
- [Saif Ali Prasla](sf527330@dal.ca) - (Full Stack Developer)
- [Sagarkumar Vaghasia](sg682034@dal.ca) - (Full Stack Developer)

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
11. Used the base React materialUI components from Google - https://www.npmjs.com/package/@mui/material
