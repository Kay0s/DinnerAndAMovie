// let router = require("express").Router();
// router.use("/api/dinner", require("./apiRoutes/dinner-routes"));
// router.use("/api/movie", require("./apiRoutes/movie-routes"));
//router.use("/", require("./htmlRoutes/html-routes"));

const express = require("express");
const router = express.Router();

router.use("/api/movie", require("./apiRoutes/movie-routes"));
router.use("/api/dinner", require("./apiRoutes/dinner-routes"));
router.use("/", require("./htmlRoutes/html-routes"));

// =============================================================

// let path = require("path");

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", (req, res) => {
  res.render("index");
});

// favorites route loads favorites.html
router.get("/favorites", (req, res) => {
  res.render("favorites");
});

module.exports = router;
