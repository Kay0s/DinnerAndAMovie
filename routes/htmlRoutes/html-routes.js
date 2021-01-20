// Dependencies
// =============================================================
const router = require("express").Router();

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", (req, res, next) => {
  // res.render(path.join(__dirname, "../../public/pairings.html"));
  res.render("main", { layout: "main", template: "main-template" });
});

// favorites route loads favorites.html
router.get("/favorites", function (req, res, next) {
  // res.sendFile(path.join(__dirname, "../../public/favorites.html"));
  res.render("favorites", { layout: "favorites", template: "favorites-template" });
});

module.exports = router;
