let db = require("../../models/");
let food_api_key = process.env.FOOD_API_KEY;
let movie_api_key = process.env.MOVIE_API_KEY;
let router = require("express").Router();

//unsuccesful Postman call http://localhost:8080/api/dinner/All
router.get("/All", (req, res) => {
  db.Dinner.findAll({
    include: [db.Dinner],
  }).then((dbDinner) => {
    res.json(dbDinner);
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
//unsucessful Postman call http://localhost:8080/api/dinner/:
router.get("/:id", (req, res) => {
  db.Dinner.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Movie],
  }).then((dbDinner) => {
    res.json(dbDinner);
  });
});

//unsucessfull Postman call http://localhost:8080/api/dinner/:
router.post("/", (req, res) => {
  db.Dinner.create(req.body).then((dbDinner) => {
    res.json(dbDinner);
  });
});

//unsucessfull Postamn call http://localhost:8080/api/dinner/:
router.delete("/:id", (req, res) => {
  db.Dinner.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbDinner) => {
    res.json(dbDinner);
  });
});

module.exports = router;
