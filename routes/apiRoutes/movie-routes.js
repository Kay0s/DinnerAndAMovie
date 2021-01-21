let db = require("../../models");
const axios = require("axios");
const router = require("express").Router();
let movie_api_key = process.env.MOVIE_API_KEY;

//succesful Postman call http://localhost:8080/api/movie/All
router.get("/All", (req, res) => {
  db.Movie.findAll({
    include: [db.Dinner],
  }).then((dbMovie) => {
    res.json(dbMovie);
  });
});

//succesfull Postman call http://localhost:8080/api/movie/:
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

//succesfull Postman call http://localhost:8080/api/movie/
router.post("/", (req, res) => {
  db.Movie.create(req.body).then((dbMovie) => {
    res.json(dbMovie);
  });
});

//unsuccesfull Postman call http://localhost:8080/api/movie/:1
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
