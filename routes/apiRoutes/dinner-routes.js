let db = require("../../models/");
let router = require("express").Router();

router.get("/All", (req, res) => {
  console.log("we're just gonna send it");
  db.Dinner.findAll({}).then((dbDinner) => {
    res.json(dbDinner);
  });
}); //url.whatever/dinner/All


router.get("/:id", (req, res) => {
  db.Dinner.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Movie],
  }).then((dbDinner) => {
    res.json(dbDinner);
  });
}); //call by url.whatever/dinner/<id>

//TO ADD TO ON-CLICK: check if movie title exists, if so, get id and pass in to write function. If not, write movie then write dinner with that movie's id as the MovieId
router.post("/", (req, res) => { 
  console.log(req.body);
  db.Dinner.create(req.body).then((dbDinner) => {
    res.json(dbDinner);
  });
});
//looks like this in POSTMAN
//POST url.whatever/api/dinner/  
// {
//   "mealSTR": "pickles",
//   "likes": 1,
//   "MovieId": 2
// }

router.delete("/:id", (req, res) => {
  db.Dinner.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbDinner) => {
    res.json(dbDinner);
  });
}); //DELETE url.whatever/api/dinner/ 

module.exports = router;
