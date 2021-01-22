let express = require("express");
let router = express.Router();

// index route loads view.html
router.get("/", (req, res, next) => {
  res.render("index", index.js);
});

// favorites route loads favorites.html
router.get("/favorites",(req, res, next) => {
  res.render("favorites")});
module.exports = router;
