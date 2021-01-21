// let router = require("express").Router();
// router.use("/api/dinner", require("./apiRoutes/dinner-routes"));
// router.use("/api/movie", require("./apiRoutes/movie-routes"));
// router.use("/", require("./htmlRoutes/html-routes"));

let express = require("express");
let router = express.Router();
// Dependencies
// =============================================================

// let path = require("path");

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", (req, res, next) => {
  res.render("main", { layout: "main", template: "main-template" });
});

// favorites route loads favorites.html
router.get("/favorites", function (req, res, next) {
  res.render("favorites", { layout: "favorites", template: "favorites-template" });
});

module.exports = router;
