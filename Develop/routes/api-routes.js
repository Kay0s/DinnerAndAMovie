// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  //Make a GET that gets all the stored dinnerandamovie pairings

  //Make a POST that will save a pairing to the db (when the like button is clicked)

  //Make an UPDATE that will update the likes by 1 if it is pressed

  //Make a DELETE that will delete a pairing (if it loses all of its likes)

};
