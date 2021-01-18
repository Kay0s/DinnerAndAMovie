let db = require("../models");
const axios = require("axios");
const { response } = require("express");
const router = express.Router();
let movie_api_key = process.env.MOVIE_API_KEY;

module.exports = (app) => {
  app.get("/api/movies", (req, res) => {
    db.Movie.findAll({
      include: [db.Dinner],
    }).then((dbMovie) => {
      res.render("favorites", dbMovie);
    });
  });

  app.get("/api/movies/:id", (req, res) => {
    db.Movie.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Dinner],
    }).then((dbMovie) => {
      res.render("favorites", dbMovie);
    });
  });

  app.post("/api/movies", (req, res) => {
    db.Movie.create(req.body).then((dbMovie) => {
      res.render("favorites", dbMovie);
    });
  });

  app.delete("/api/movies/:id", (req, res) => {
    db.Movie.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbMovie) => {
      res.render("favorities", dbMovie);
    });
  });
};
module.exports = router;
