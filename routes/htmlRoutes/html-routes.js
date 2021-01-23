// Dependencies
// =============================================================
const router = require("express").Router();
const path = require("path");

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
<<<<<<< HEAD
router.get("/", (req, res, next) => {
  res.render("index");
=======
router.get("/", (req, res) => {
  res.render("index")
>>>>>>> e84c9390b80e8d4963cda6537ad4d46aadb53b35
});
router.get("/homepage", (req, res) => {
  res.render("homepage")
});
// favorites route loads favorites.html
<<<<<<< HEAD
router.get("/favorites", (req, res, next) => {
  res.render("favorites");
=======
router.get("/favorites", function (req, res) {
  res.render("favorites")
>>>>>>> e84c9390b80e8d4963cda6537ad4d46aadb53b35
});

module.exports = router;
