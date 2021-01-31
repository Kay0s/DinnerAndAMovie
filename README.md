<h1 align= "center"> :movie_camera: Dinner And A Movie :popcorn: <h1> 

![badge](https://img.shields.io/badge/License-mit-blue)
![Language](https://img.shields.io/badge/Languages-HTML,CSS,Jquery,Nodes-brightgreen.svg)
![Command-line](https://img.shields.io/badge/Command-line-blueviolet.svg)
![Express](https://img.shields.io/badge/Express-turquoise.svg)
![npm](https://img.shields.io/badge/npm-red.svg)
![npm](https://img.shields.io/badge/npm-install-grey.svg)
![node](https://img.shields.io/badge/node-green.svg)
![handlebars](https://img.shields.io/badge/handlebars-yellow.svg)
![Travis](https://img.shields.io/badge/Travis-critical.svg)
![Eslint](https://img.shields.io/badge/Eslint-blue.svg)
![Prettierrc](https://img.shields.io/badge/Prettierrc-orange.svg)
![ENV](https://img.shields.io/badge/ENV-informational.svg)
![MysQl](https://img.shields.io/badge/MySQL-brightgreen.svg)
![Sequelize](https://img.shields.io/badge/Sequelize-yellowgreen.svg)
![API](https://img.shields.io/badge/API-yellow.svg)
![JSON](https://img.shields.io/badge/JSON-9cf.svg)
![Made-For-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)
![Deployment-Heroku](https://img.shields.io/badge/Heroku-blueviolet.svg)



## Overview

An app that uses TheMealDB API to generate meal recommendations based on user's inputed movie, that then also gathers data about the movie from the OMDb API.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Deployed](#deployed)
- [Tools](#tools)
- [Research](#research)
- [Contributors](#contributors)
- [License](#license)

## Description

With this app your able to search a movie and it will automatically pick a meal to match, including the recipe to that meal!

## User's Needs/Expectations

The user, a movie and food enthusiast, wants to a meal recommendation based on the movie input in order to make a quick decision in a fun experience. The app must also allow the user to "like" their searched movie and dinner. The liked pairings are required to viewable on a history page the is rendered using handlebars and is retrieving data from the Sequelized MySQL database.

- The movie and dinner recommendation application must allow the user to search for the movie info by their
  name.
- The meal recommendation must load on search of a movie title and present the name of the meal recommendation, image and recipe of the meal.
- The app will be served by Heroku and feature dynamically updated HTML, CSS and Handlebars powered by JQuery.
- Axios calls to the OMDb API is used to retrieve data for movies and TheMealDB API is employed to generate meal recommendations.
- The user's searched movie and dinner recommendation can be "liked" which saves the data to the movie and dinner tables. Then the liked parings
  will be retrived from the tabales using a join on the dinnerId and rendered to the history page with handlebars.


##  Installation
1. Create a folder which will contain our app and within it type the following command to create the JSON file containing all the information and dependencies:
2. Use the command-line, ```npm i```, to ```install Express, Express-Handlebars, and mysql npm````.
3. Now we create our main js file which will contain our application's logic and name it ```"index.js"```
4. To start creating movie and dinner pairing, using Express, use the command, node server.js and navigate in the
   web browser to ***localhost:8080***.
5. Finally, let's create a folder by the name of ```public``` in which we create a ```.css file``` and let's call it ```"style.css".```

## Usage

- Express and Heroku and used to serve and display to the the user Handlebars HTML templated info of their searched and
  favorited dinner and a movie pairings.
- Handlebars is used to render the HTML.
- Once the user's information regarding:
  - searched movie is inputed into the input box:
- An Handlebars file with the user's added movie and dinner along with their unique id is created.



## Test
Test the different HTML pages/positions on the local host using Postman, to ensure that the data is saving and the MySQL
database is accessed.

## :clapper: Deployed

Overall Deployment of Dinner and a Movie

On load of page: a search input and search button are present to enter a movie name in order to obtain its information using an Axios call to the OMDb API.

When the user inputs the movie name into the text box and clicks the search button, event listeners and functions are triggered for:

The movie name inputed into the text box.
A first Axios call is made to the OMDb API to obtain the movie poster and descritption.
The last Axios call is made to TheMealDB using the first leter of the movie title from the first call to obtain a meal recommendation.

Math.floor(Math.random()) is used with the first letter of the response from the OMDb API passed to the TheMealDB to create a randomized meal recommendation.

When the user clicks the like button for the retrieved movie and meal, then the movie is saved to the movie database and the dinner is saved to the dinner database.

The liked pairings are are viewable on a history page the is rendered using handlebars and is retrieving data from the Sequelized MySQL database by joining the tables on the movieId.

- \*[Deployed website](https://mysterious-retreat-01401.herokuapp.com)
- \*[Portfolio](https://github.com/DaronSchmit/DinnerAndAMovie)
- \*[GitHub Repository](https://github.com/DaronSchmit/DinnerAndAMovie) <br>

## :camera: Visuals:
 
![image](./public/assets/image/ScreenShot.png)<br>
![image](./public/assets/image/3screenshoot.png)<br>
![image](./public/assets/image/ScreenShot2.png)<br>



## :computer: Tools

- Axios
- Dotenv
- Express
- Express-handlebars
- Handlebars.js
- MySQL
- Sequelize
- HTML
- CSS
- JavaScript
- Heroku
- node.js

## :file_folder: Research

- [Sequelize CLI](https://sequelize.org/master/manual/migrations.html)
- [TheMealDB](https://www.themealdb.com)
- [OMDb API](http://www.omdbapi.com)
- [axios](https://www.npmjs.com/package/axios)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Handlebars](https://handlebarsjs.com/)
- [Deplo ying with MySQL- Heroku](https://devcenter.heroku.com/articles/jawsdb)


## :raised_hands: Contributors  :octocat: Profiles
- [Alice GitHub Profile](https://github.com/adpir)
- [Darron GitHub Profile](https://github.com/DaronSchmit)
- [Kristina GitHub Profile](https://github.com/Kay0s)
- [Suhir GitHub Profile](https://github.com/suhirsaleh)



##  :copyright: License

![badge](https://img.shields.io/badge/License-mit-blue)

© 2021 Alice Piar, Daron Schmit, Kristina Hamilton, Suhir Saleh and Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved. Permission is hereby
granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
