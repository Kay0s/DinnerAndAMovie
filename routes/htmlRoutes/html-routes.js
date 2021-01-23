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
});
module.exports = router;
