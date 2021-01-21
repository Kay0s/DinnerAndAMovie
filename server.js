// Requiring necessary npm packages
const express = require("express");
// const session = require("express-session");
// // Requiring passport as we've configured it
// const passport = require("./config/passport");
require("dotenv").config();
const axios = require("axios");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");
const { sequelize } = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set Handlebars.

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
// app.use(HTMLRoutes);
const routes = ("./controllers/index.js")
app.use(require(routes));

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

module.exports = app;
