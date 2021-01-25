const express = require("express");
const router = express.Router();

// Import the model (dinner.js) to use its database functions
const movie = require("../models/movie.js");

router.post("/api/movie/:id", (req, res) => {
  db.movies.create(req.body).then((dbMovie) => {
    res.json(dbMovie);
  });
});

// Create all our routes and set up logic within those routes where required.
router.get("/favorites", (req, res) => {
  movie.selectAll((data) => {
    const hbsObject = {
      movies: data,
    };
    console.log(hbsObject);
    res.render("favorites", hbsObject);
  });
});

router.get("/movie/:id", (req, res) => {
  db.movie
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((dbMovie) => {
      res.render("movies", {
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
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  movie.updateOne("favorited", 1, condition, (result) => {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Delete a movie
router.delete("/api/movie/:id", (req, res) => {
  const condition = "id" + req.params.id;
  console.log("condition", condition);

  db.movie
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbMovie) => {
      res.json(dbMovie);
    })
    .catch((err) => {
      console.log("Error" + err);
    });
});

module.exports = router;
