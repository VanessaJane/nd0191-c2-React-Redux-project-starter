# Employee-Poll Project

Employee-Poll is a simple web application that I completed as the second project during the React nanodegree course on Udacity.

This application includes login and logout functions. After successful login, users can create, display and answer a question in the form of a poll including 2 options.

This project is completely built on the foundation powered by Udacity, which can find [here](https://reactjs.org/docs/create-a-new-react-app.html).

## How to build

1. Pre-requisites:
   To be able to run this source code, please make sure the following stuffs are installed on your device:
   - git
   - node.js and npm (or yarn)
2. Clone repo:

   ```bash
   git clone https://github.com/VanessaJane/nd0191-c2-React-Redux-project-starter.git
   ```

3. Install and run the app:

   - Using npm

   ```bash
   cd employee-polls

   npm install #install all dependencies

   npm start #start the app
   ```

   - Using yarn

   ```bash
   cd employee-polls

   yarn install #install  all dependencies

   yarn start #start the app
   ```

## Source code architecture

```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── .gitignore
├── LICENSE.txt
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions # define actions represent the actions this application can perform
    │   ├── authedUser.js
    │   ├── questions.js
    │   ├── shared.js
    │   ├── users.js
    ├── components
    │   ├── App.js # This is the root of the app.
    │   ├── LoginPage.js # reader a login form that allows user authenticate.
    │   ├── Dashboard.js # render the main page after user logged in, which displays all question as new or done.
    │   ├── GridQuestions.js # render a grid contains all questions.
    │   ├── QuestionCard.js # render question card corresponds to 1 item displayed in the questions grid.
    │   ├── Leaderboard.js # leaderboard component, showing list of users in order of most created and answered questions.
    │   ├── NewQuestion.js # render the form to create new question.
    │   ├── QuestionDetails.js # the question detail page.
    │   ├── Poll.js # render the poll that allows user answer.
    │   ├── AnsweredPoll.js # render the answered poll.
    │   ├── NavigationBar.js # the navigation bar on the top of screen
    │   ├── Profile.js # the div display user's avatar and name.
    │   ├── NotFoundPage.js # the page is displayed when user input an invalid url.
    ├── middleware
    │   ├── index.js
    │   ├── logger.js
    ├── reducers # contains functions that handle state and update the store based on actions.
    │   ├── authedUser.js
    │   ├── questions.js
    │   ├── shared.js
    │   ├── users.js
    ├── resources
    │   ├── app_logo.jpg # the app logo that I taken from Udacity.
    ├── utils
    │   ├── _DATA.js # this file is provided by Udacity. Contains the users/questions data in JSON format and the functionalities for interacting with this data.
    │   ├── apis.js # export the necessary methods from _DATA.js.
    │   ├── helpers.js # contains function which formats timestamp to date string.
    ├── App.css # Styles for the app. Feel free to customize this as you desire.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is my second project using ReactJS, and was an exercise during my participation in [React Udacity NanoDegree](https://learn.udacity.com/nanodegrees/nd019). After the review is approved, I will not continue working, maintain this repository any more.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## License

See [Udacity's license](starter/LICENSE.txt).
