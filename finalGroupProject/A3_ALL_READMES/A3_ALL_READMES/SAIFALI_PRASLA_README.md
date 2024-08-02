# CSCI-5709 : Assignment 3

# CookWithDal

CookWithDal is an innovative recipe-sharing app designed for Dalhousie students. With a focus on ease and convenience, this app allows students to share recipes, create shopping lists based on the ingredients needed for each recipe, and even track the nutritional information of the dishes they prepare. Students can discover new, quick-to-make recipes with minimal ingredients or share their favourite regional delicacies with fellow students.

- Date Created: 05 APR 2023
- Last Modification Date: 05 APR 2023
- GitLab Main Repo URL = https://git.cs.dal.ca/anujd/winter-2023-csci-5709-group-04
- GitLab Front-end Group's URL: https://git.cs.dal.ca/raich/winter2023-csci-5709-group04-frontend
- GitLab Back-end Group's URL: https://git.cs.dal.ca/ruchika/csci-5709-group04/
- FrontEnd Deployed Link = https://web-cs-dal-ca-cwd-group04-csci5709-a3.netlify.app/
- BackEnd Deployed URL: "https://cook-with-dal-a3.onrender.com"

## Authors

- [Saifali Prasla](sf527330@dal.ca) - Full Stack Developer

# Features Developed - User Management module

I have implemented this feature with which users are created and they are authenticated with the application. If the user forgets their password, they can reset their password. In order to reset the password, user would require to answer a security question which was asked during the signup page. The password and answer are stored in the database in the encrypted format. Once the user with their work , they can logout of the application. In order to scope the styling to a specific component, I have used CSS modules

## Tasks

1. Create User
2. Login and Reset Password
3. Logout

## Files Created by Me for User Management feature

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

### Back-end files

1. `src\controllers\UserController.js`
2. `src\models\User.js`
3. `src\routes\UserRoutes.js`
4. `src\services\UserService.js`

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

- [ReactJS](https://react.dev/blog/2023/03/16/introducing-react-dev)
- [Material UI](https://www.npmjs.com/package/@mui/material)
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Sources Used

As required by the assignment submission requirement, I used the boilerplate code for creating the react project [1]. For my feature, I took reference from [1], [2], [3], [4], [5], [6], [7], [8], [9], [10]. In order to create the forms for the user management module, I have used Material UI components such as Select, Grid, Container, Box, Stack, Form Helper Text. For first name, last name, email and password validation, I have used regex referenced from [4] [5] [6]. To send a post request using axios, I have referenced [7] and the for building API's using Mongo DB and Express JS, I took reference from [8]. For encypting password and the security answer, I took reference from [9] and to verify the encrypted data with the data entered by user, I took reference from [10]. In order to scope styles to a specific modules, I have used CSS modules [11].

##References

[1] “Create a new react app,” Reactjs.org. [Online]. Available: https://reactjs.org/docs/create-a-new-react-app.html. [Accessed: 06-Apr-2023].
[2] “Introducing react.dev,” React.dev. [Online]. Available: https://react.dev/blog/2023/03/16/introducing-react-dev. [Accessed: 06-Apr-2023].
[3]“Overview - material UI,” Mui.com. [Online]. Available: https://mui.com/material-ui/getting-started/overview/. [Accessed: 06-Apr-2023].
[4] “Regex with space and letters only?,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/12778083/regex-with-space-and-letters-only. [Accessed: 06-Apr-2023].
[5] Regexr.com. [Online]. Available: https://regexr.com/3e48o. [Accessed: 06-Apr-2023].
[6] “Regex for password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a. [Accessed: 06-Apr-2023].
[7]“Axios post request to send form data,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data. [Accessed: 06-Apr-2023].
[8]F. Mendes, “How to build an API with mongoose and express.Js,” DEV Community, 08-Dec-2021. [Online]. Available: https://dev.to/franciscomendes10866/setup-mongodb-with-mongoose-and-express-4c58. [Accessed: 06-Apr-2023].
[9]M. Shankar, “A quick guide for Authentication using ‘bcrypt’ on Express/NodeJs,” Medium, 19-Jun-2018. [Online]. Available: https://medium.com/@mridu.sh92/a-quick-guide-for-authentication-using-bcrypt-on-express-nodejs-1d8791bb418f. [Accessed: 06-Apr-2023].
[10]J. Watmore, “Node.Js - hash and verify passwords with bcrypt,” Jasonwatmore.com, 20-Jul-2020. [Online]. Available: https://jasonwatmore.com/post/2020/07/20/nodejs-hash-and-verify-passwords-with-bcrypt. [Accessed: 06-Apr-2023].
[11]“Adding a CSS modules stylesheet,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/. [Accessed: 06-Apr-2023].
