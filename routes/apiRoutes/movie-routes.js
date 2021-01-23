let db = require("../../models");
const axios = require("axios");
const router = require("express").Router();
let movie_api_key = process.env.MOVIE_API_KEY;

router.get("/All", (req, res) => {
  db.Movie.findAll({
    include: [db.Dinner],
  }).then((dbMovie) => {
    res.json(dbMovie);
  }); //url.whatever/api/movie/All
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
}); //url.whatever/api/movie/someidnumber

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
}); //currently throws an error for movies with associated dinners, but works for movies without dinners

router.delete("/bytitle/:title", (req, res) => {
  //findall where title=req.params.title
  //attributes:id
  db.Movie.findOne({
    where: {
      title: req.params.title,
    },
    attributes: ['id']
  })
  .then(dbMovieID => {
    db.Movie.destroy({
      where: {
        id: dbMovieID.id,
      },
    }).then((dbMovie) => {
      res.json(dbMovie);
    });
  });
});

router.get("/pairing/:title", (req, res) => {
  axios({
    method: 'get',
    url: `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.MOVIE_API_KEY}&t=${req.params.title}`,
    responseType: 'json'
  })
    .then(response1 => {
      let movieObj = response1.data;
      axios({
        method: 'get',
        url: `https://www.themealdb.com/api/json/v1/1/search.php?f=${movieObj.Title[0]}`,
        responseType: 'json'
      })
      .then(response2 => {
        let mealObj = response2.data.meals[Math.floor(Math.random() * response2.data.meals.length)];
        res.json([movieObj, mealObj]);
      })
    });
  
})


module.exports = router;