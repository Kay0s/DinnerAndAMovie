const express = require("express");
const router = express.Router();

// index route loads view.html
router.get("/", (req, res) => {
  res.render("index");
});

// favorites route loads favorites.html
router.get("/favorites", (req, res) => {
  res.render("favorites");
});

module.exports = router;
