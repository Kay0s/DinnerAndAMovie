// Dependencies
// =============================================================
const router = require("express").Router();
let path = require("path");

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/pairings.html"));
});

// favorites route loads favorites.html
router.get("/favorites", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/favorites.html"));
});


// router.get("/", (req, res) => {
//   burger.all(data => {
//     const indexObj = {
//       burgers: data
//     };
//     console.log(indexObj);
//     res.render("index", indexObj);
//   });
// });


module.exports = router;
