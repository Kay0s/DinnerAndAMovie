let db = require("../models");

module.exports = (app) => {
  app.get("/api/favorites", (req, res) => {
    db.Movie.findAll({
      include: [db.Recipe],
    }).then((dbMovie) => {
      res.json(dbMovie);
    });
  });

  app.get("/api/favorites/:id", (req, res) => {
    db.Movie.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Recipe],
    }).then((dbMovie) => {
      res.json(dbMovie);
    });
  });

  app.post("/api/favorites", (req, res) => {
    db.Movie.create(req.body).then((dbMovie) => {
      res.json(dbMovie);
    });
  });

  app.delete("/api/favorites/:id", (req, res) => {
    db.Movie.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbMovie) => {
      res.json(dvMovie);
    });
  });
};
