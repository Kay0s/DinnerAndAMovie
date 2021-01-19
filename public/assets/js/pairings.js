let db = require("../../models");
const axios = require("axios");
const { response } = require("express");
const router = express.Router();
let movie_api_key = process.env.MOVIE_API_KEY;
let food_api_key = process.env.FOOD_API_KEY;

// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {
  $(".change-pairingsSearched").on("click", (event) => {
    let id = $(this).data("id");
    let newPairingsSearched = $(this).data("newPairingsSearched");

    let newPairingsSearchedState = {
      favorited: newFavorite,
    };

    // Send the PUT request.
    $.ajax("/api/pairings" + id, {
      type: "PUT",
      data: newPairingsSearchedState,
    }).then(() => {
      console.log("changed favorited to", newFavorite);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newPairingsInputed = {
      name: $("#npi").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/:movies/:dinners", {
      type: "POST",
      data: newPairingsInputed,
    }).then(() => {
      console.log("created new favorite");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

// $(".change-pairingsSearched").on("click", (event) => {
//   let id = $(this).data("id");
//   let newPairingsSearched = $(this).data("newPairingsSearched");

//   let newPairingsSearchedState = {
//     favorited: newFavorite,
//   };
// } let Favorite = sequelize.define('Favorite', {
//   movie_name: Sequelize.STRING,
//   dinner_name: Sequelize.STRING,
// }, {
//   tableName: 'favorites',
//   timestamps: false
// }));

// $('#button').click(() => {
//   $.when(
//       $.ajax({
//           url: `https://www.omdbapi.com/?apikey=${movie_api_key}&${movieInput}`,
//           success: (data) => {
//               alert('request complete')
//           }
//       }),
//       $.ajax({
//           url: `https://www.themealdb.com/api/json/v1/${food_api_key}/random.php`,
//           success: (data) => {
//               alert('request complete')
//           }
//       })
//   ).then( () => {
//       alert('all complete');
//   });
// });

// $('#favorites').click(() => {
// Favorites
//   .create({
//     movie_name: movie_name,
//     dinner_name: dinner_name

//   })
//   .complete((err, favorite) => {
//     if (err) {
//      console.log(err);
//      res.response("Error adding pairing to Favorites")
//     } else {
//      res.response("Pairing added to Favorites!")
//     }
//   })

// app.get("/api/:movies/:dinners", (req, res) => {
//   axios
//     .all([
//       axios.get(`https://www.omdbapi.com/?apikey=${movie_api_key}&${movieInput}`),
//       axios.get(`https://www.themealdb.com/api/json/v1/${food_api_key}/random.php`),
//     ])

//      movieURL = baseURL+req.params.movie;
//      dinnerURL = baseURL2+req.params.dinner;

//      let obj = movieapicall;
//      let otherobject = dinnerapicall;

//      res.json([obj, otherobject]);
//     .then((param) => {
//       param.render("pairings", { movieApi: movie_name, dinnerApi: dinner_name });
//     });
// });

// $('#button').click(() => {
//   $.when(
//       $.ajax({
//           url: `https://www.omdbapi.com/?apikey=${movie_api_key}&${movieInput}`,
//           success: (data) => {
//               alert('request complete')
//           }
//       }),
//       $.ajax({
//           url: `https://www.themealdb.com/api/json/v1/${food_api_key}/random.php`,
//           success: (data) => {
//               alert('request complete')
//           }
//       })
//   ).then( () => {
//       alert('all complete');
//   }).then (render()) {
//   return  (
//        <div>
//            <button onClick={this.click} disabled={this.state.isLoading}> Add to Favorites </button>
//            {this.state.data}
//        </div>
//   )};
// });
// })
