const { decodeBase64 } = require("bcryptjs");
const express = require("express");
let router = express.Router();
const connection = require("../config/connection.js");

// Import the model (dinner.js) to use its database functions
let dinner = require("../models/dinner.js");

router.post("/api/dinner/:id", (req, res) => {
  db.dinners.create(req.body).then((dbDinner) => {
    res.json(dbDinner);
  });
});

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  dinner.selectAll((data) => {
    let hbsObject = {
      dinners: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/dinner/:id", (req, res) => {
  db.dinner
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbDinner) {
      res.render("dinner", {
        dinnerSearchTerm: dbDinner,
      });
    });
});

router.post("/api/dinner", (req, res) => {
  dinner.insertOne(["dinner_name"], [req.body.dinner_name], (result) => {
    console.log(req.body);
    // Send back the ID of the new dinner
    res.json({ id: result.insertId });
  });
});

router.put("/api/dinner/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  dinner.updateOne("favorited", 1, condition, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Delete a dinner
router.delete("/api/dinner/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  db.dinner
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbDinner) {
      res.json(dbDinner);
    })
    .catch(function (err) {
      console.log("Error" + err);
    });
});

module.exports = router;
