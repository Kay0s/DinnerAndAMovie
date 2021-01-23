// Dependencies
// =============================================================
const router = require("express").Router();
 let path = require("path");
 const axios = require("axios");
 const db = require("../../models");


// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", (req, res) => {
  res.render("index")
});
<<<<<<< HEAD
router.get("/homepage", (req, res) => {
  res.render("homepage")
});
// favorites route loads favorites.html
router.get("/favorites", function (req, res) {
  res.render("favorites")
=======

router.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname,  "..", "..", "/public/test.html"));
})

// favorites route loads favorites.html
router.get("/favorites", (req, res) => {
  db.Movie.findAll({
    include: [db.Dinner],
  }).then((dbMovie) => {
    favesObj = {movies: dbMovie}
    console.log(favesObj)
    res.render("favorites", favesObj);
  }); //url.whatever/api/movie/All
>>>>>>> moreOnclicks
});
module.exports = router;
