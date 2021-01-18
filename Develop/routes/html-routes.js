// Dependencies
// =============================================================
let path = require("path");

// Routes
// =============================================================
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pairings.html"));
  });

  // favorites route loads favorites.html
  app.get("/favorites", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/favorites.html"));
  });
};
