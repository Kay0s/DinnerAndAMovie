// Dependencies
// =============================================================
const router = require("express").Router();
 let path = require("path");

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", (req, res, next) => {
  res.render("index")
});

router.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname,  "..", "..", "/public/test.html"));
})

// favorites route loads favorites.html
router.get("/favorites", function (req, res, next) {
  res.render("favorites")
});

module.exports = router;
