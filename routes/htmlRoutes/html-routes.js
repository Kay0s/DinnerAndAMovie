// Dependencies
// =============================================================
const router = require("express").Router();

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/homepage", (req, res) => {
  res.render("homepage");
});
// favorites route loads favorites.html
router.get("/favorites", (req, res) => {
  res.render("favorites");
});

module.exports = router;
