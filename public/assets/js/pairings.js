const movie_api_key = process.env.MOVIE_API_KEY;
const dinner_api_key = process.env.DINNER_API_KEY;

// $(".change-pairingsSearched").on("click", (event) => {
//   let id = $(this).data("id");
//   let newPairingsSearched = $(this).data("newPairingsSearched");

//   let newPairingsSearchedState = {
//     favorited: newPairingsSearched,
//   };

//   // Send the PUT request.
//   $.ajax("/api/pairings" + id, {
//     type: "PUT",
//     data: newPairingsSearchedState,
//   }).then(() => {
//     console.log("changed favorited to", newFavorite);
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });

// $(".create-form").on("submit", (event) => {
//   // Make sure to preventDefault on a submit event.
//   event.preventDefault();
//   //Get Movie title
//   //if movie exists in db, don't write it
//   //else POST new movie
//   //then post new dinner with movie's id as MovieID attribute
//   let newPairingsInputed = {
//     movie_name: $("#npi").val().trim(),
//   };
//   // Send the POST request.
//   $.ajax("/api/movie/", {
//     type: "POST",
//     data: newPairingsInputed, //movie title
//   }).then(function () {
//     console.log("created new favorite");
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });

// // Function for handling what to render when a movie title isn't entered
// function renderEmpty() {
//   let alertDiv = $("<div>");
//   alertDiv.addClass("alert alert-danger");
//   alertDiv.text("You must type in a move name before pressing the search button.");
//   movieContainer.append(alertDiv);
// }

// $(".change-liked").on("click", (event) => {
//   let id = $(this).data("id");
//   let newLiked = $(this).data("newLiked");

//   let newLikedState = {
//     favorited: newFavorite,
//   };
// } let Favorite = sequelize.define('Favorite', {
//   movie_name: Sequelize.STRING,
//   dinner_name: Sequelize.STRING,
// }, {
//   tableName: 'favorites',
//   timestamps: false
// }));

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

$("#submit").on("click", (event) => {
  searchMovieGetMeal($("#movie_name").val());
  event.preventDefault();
});
function searchMovieGetMeal(movie) {
  let movieQuery = `http://www.omdbapi.com/?apikey=${movie_api_key}=${movie}`;
  let mealQuery = `https://www.themealdb.com/api/json/v1/${dinner_api_key}/search.php?f=${res.Title[0]}`;

  let movieObj;
  let mealObj;

  ajax.get(movieQuery).then((response) => {
    movieObj = res;
    console.log(movieObj);
  });
  ajax.get(mealQuery).then((response) => {
    mealObj = res.meals[Math.floor(Math.random() * res.meals.length)];
    console.log(mealObj);
    renderMovie(movieObj);
    renderDinner(mealObj);
  });
}
function renderMovie(movie) {
  $("#movieInfo").append(`<p>${movie.Title}</p>`);
}
function renderDinner(dinner) {
  $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
}

function renderDinner(dinner) {
  $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
}
//   $.ajax({
//     url: `http://www.omdbapi.com/?apikey=${movie_api_key}=${movie}`,
//     method: "GET",
//   }).then((res) => {

//     $.ajax({
//       url: ,
//       method: "GET",
//     }).then((res) => {
//       mealObj = res.meals[Math.floor(Math.random() * res.meals.length)];
//       console.log(mealObj);
//       renderMovie(movieObj);
//       renderDinner(mealObj);
//     });
//   });
// }

// function renderMovie(movie){
//   $("#movieInfo").append(`<p>${movie.Title}</p>`);
// }

// function renderDinner(dinner){
//   $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
// }

//  $("#npi").on("click", (event) => {
//    searchMovieGetMeal($("#movie_name").val());
//   event.preventDefault();
//  });

// function searchMovieGetMeal(movie) {
//   let one = `http://www.omdbapi.com/?apikey=${movie_api_key}=${movie}`;
//   let two = `https://www.themealdb.com/api/json/v1/${dinner_api_key}/search.php?f=${res.Title[0]}`;
//   const requestOne = axios.get(one);
//   const requestTwo = axios.get(two);

//   axios
//     .all([requestOne, requestTwo])
//     .then(
//       axios.spread((...responses) => {
//         const responseOne = responses[0];
//         const responseTwo = responses[1];

//         // use/access the results
//         renderMovie(reponseOne);
//         function renderMovie(responseOne) {
//           $("#movieInfo").append(`<p>${movie.Title}</p>`);
//         }

//         function renderDinner(responseTwo) {
//           mealObj = res.meals[Math.floor(Math.random() * res.meals.length)];
//           $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
//         }
//       })
//     )
//     .catch((errors) => {
//       // react on errors.
//       return res.status(404).end();
//     });
// }
