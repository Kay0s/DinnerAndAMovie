const { decodeBase64 } = require("bcryptjs");
const express = require("express");
let router = express.Router();
const connection = require("../config/connection.js");

// Import the model (dinner.js) to use its database functions
let movie = require("../models/movie.js");

router.post("/api/movie/:id", (req, res) => {
  db.movies.create(req.body).then((dbMovie) => {
    res.json(dbMovie);
  });
});

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  movie.selectAll((data) => {
    let hbsObject = {
      movies: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/movie/:id", (req, res) => {
  db.movie
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbMovie) {
      res.render("movie", {
        movieSearchTerm: dbMovie,
      });
    });
});

router.post("/api/movie", (req, res) => {
  dinner.insertOne(["movie_name"], [req.body.movie_name], (result) => {
    console.log(req.body);
    // Send back the ID of the new movie
    res.json({ id: result.insertId });
  });
});

router.put("/api/movie/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  movie.updateOne("favorited", 1, condition, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Delete a movie
router.delete("/api/movie/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  db.movie
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbMovie) {
      res.json(dbMovie);
    })
    .catch(function (err) {
      console.log("Error" + err);
    });
});

module.exports = router;
