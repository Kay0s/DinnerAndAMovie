const express = require("express");
// const session = require("express-session");
// // Requiring passport as we've configured it
// const passport = require("./config/passport");
if (process.env.NODE_ENV) {
  require("dotenv").config({
    path: `${__dirname}/.env.${process.env.NODE_ENV}`,
  });
} else {
  require("dotenv").config();
}
// const axios = require("axios");

console.log(process.env.DB_PASS);

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const host = process.env.HOST;

const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Requiring our routes
// app.use(HTMLRoutes);
const routes = "./routes";
app.use(require(routes));

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, host, () => {
    console.log("App listening on PORT " + PORT);
  });
});
module.exports = app;
