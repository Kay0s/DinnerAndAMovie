// Dependencies
// =================================
const router = require("express").Router();
const db = require("../../models/");

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html

// router.get("/", (req, res) => {
//   res.render("index");
// });

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/homepage", (req, res) => {
  res.render("homepage");
});
// favorites route loads favorites.html

router.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "/public/test.html"));
});

// favorites route loads favorites.html
router.get("/favorites", (req, res) => {
  console.log("we're just gonna send it");
  db.Dinner.findAll({}).then((dbDinner) => {
    db.Movie.findAll({}).then((dbMovies) => {
      console.log("Get", dbDinner, dbMovies);
      res.render("favorites", { movies: dbMovies, dinner: dbDinner });
      // res.json(dbDinner);
    });
  });
});
module.exports = router;
