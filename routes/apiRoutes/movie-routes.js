let db = require("../../models");
const axios = require("axios");
const { response } = require("express");
const router = express.Router();
let movie_api_key = process.env.MOVIE_API_KEY;

router.get("/All", (req, res) => {
  db.Movie.findAll({
    include: [db.Dinner],
  }).then((dbMovie) => {
    res.json(dbMovie);
  });
});

router.get("/:id", (req, res) => {
  db.Movie.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Dinner],
  }).then((dbMovie) => {
    res.json(dbMovie);
  });
});

router.post("/", (req, res) => {
  db.Movie.create(req.body).then((dbMovie) => {
    res.json(dbMovie);
  });
});

router.delete("/:id", (req, res) => {
  db.Movie.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbMovie) => {
    res.json(dbMovie);
  });
});

module.exports = router;
