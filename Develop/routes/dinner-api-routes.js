let db = require("../models");
const axios = require("axios");
const { response } = require("express");
const router = express.Router();
let food_api_key = process.env.FOOD_API_KEY;
let movie_api_key = process.env.MOVIE_API_KEY;


module.exports = (app) => {
  app.get("/api/dinners", (req, res) => {
    db.Dinner.findAll({
      include: [db.Dinner],
    }).then((dbDinner) => {
      res.render("favorites", dbDinner);
    });
  });

 
  // router.get("/api/dinners", (req, res, next)  => {
  //   axios.get(`https://www.themealdb.com/api/json/v1/${food_api_key}/random.php`);
  //   .then((response) => {
  //     let apiDinnersArray = []
  //     console.log(response);
  //     response.data.map((apiDinners) => {
  //       apiDinnersArray.push(apiDinners);
  //     });
  //     res.render("apiDinners", {
  //       apiDinners: apiDinnersArray
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //    });
  //    ;
     
  app.get("/api/:movies/:dinners", (req, res) => {
    axios.all([
      axios.get(`https://www.omdbapi.com/?apikey=${movie_api_key}&${movieInput}`),
      axios.get(`https://www.themealdb.com/api/json/v1/${food_api_key}/random.php`)
    ])
      
    //  movieURL = baseURL+req.params.movie;
    //  dinnerURL = baseURL2+req.params.dinner;

    //  let obj = movieapicall;
    //  let otherobject = dinnerapicall;

    //  res.json([obj, otherobject]);
    .then((param) => { 
      param.render('pairings', {movieApi: movie_name, dinnerApi: dinner_name}) 
    }
      ).then((res) => {
        if (userFavorite === "true")
      } let Favorite = sequelize.define('Favorite', {
        movie_name: Sequelize.STRING,
        dinner_name: Sequelize.STRING,
      }, {
        tableName: 'favorites',
        timestamps: false
      }));
      
      Favorites
        .create({
          movie_name: movie_name,
          dinner_name: dinner_name
        
        })
        .complete((err, favorite) => {
          if (err) {
           console.log(err);
           res.response("Error adding pairing to Favorites")
          } else {
           res.response("Pairing added to Favorites!")
          }
        })
    })


  app.get("/api/dinners/:id", (req, res) => {
    db.Dinner.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Movie],
    }).then((dbDinner) => {
      res.render("favorites", dbDinner);
    });
  });

  app.post("/api/dinners", (req, res) => {
    db.Dinner.create(req.body).then((dbDinner) => {
      res.render("favorites", dbDinner);
    });
  });

  app.delete("/api/dinners/:id", (req, res) => {
    db.Dinner.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbDinner) => {
      res.render("favorites", dbDinner);
    });
  })};

