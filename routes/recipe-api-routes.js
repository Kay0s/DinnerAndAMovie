let db = require("../models");

module.exports = (app) => {
  app.get("/api/favorites", (req, res) => {
    db.Recipe.findAll({
      include: [db.Movie],
    }).then((dbRecipe) => {
      res.json(dbRecipe);
    });
  });

  app.get("/api/favorites/:id", (req, res) => {
    db.Recipe.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Movie],
    }).then((dbRecipe) => {
      res.json(dbRecipe);
    });
  });

  app.post("/api/favorites", (req, res) => {
    db.Recipe.create(req.body).then((dbRecipe) => {
      res.json(dbRecipe);
    });
  });

  app.delete("/api/favorites/:id", (req, res) => {
    db.Recipe.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbRecipe) => {
      res.json(dbRecipe);
    });
  });
};
