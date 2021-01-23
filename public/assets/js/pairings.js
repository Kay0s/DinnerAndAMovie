// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function () {
//   $(".change-pairingsSearched").on("click", (event) => {
//     let id = $(this).data("id");
//     let newFavorite = $(this).data("newFavorite");

//     let newPairingsSearchedState = {
//       favorited: newFavorite,
//     };

//     // Send the PUT request.
//     $.ajax("/api/pairings" + id, {
//       type: "PUT",
//       data: newPairingsSearchedState,
//     }).then(function () {
//       console.log("changed favorited to", newFavorite);
//       // Reload the page to get the updated list
//       location.reload();
//     });
//   });

// $("movie-title").on("click", (event) => {
//   let id = $(this).data("id");
//   let title = $(this).data("title");

//   let newPairingsInputed = {
//     movieTitle: title,
//   };
//   //Make sure to preventDefault on a submit event.
//   //  event.preventDefault();
//   //Get Movie title
//   //if movie exists in db, don't write it
//   //else POST new movie
//   //then post new dinner with movie's id as MovieID attribute

//     name: $("#npi").val().trim(),
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
// // function renderEmpty() {
// //     let alertDiv = $("<div>");
// //     alertDiv.addClass("alert alert-danger");
// //     alertDiv.text("Check the spelling");
// //     movieContainer.append(alertDiv);
// //    }
// //    renderEmpty();
// function searchMovieGetMeal(movie) {
//   let movieQuery = `http://www.omdbapi.com/?apikey=${movie_api_key}=${movie}`;
//   let mealQuery = `https://www.themealdb.com/api/json/v1/${dinner_api_key}/search.php?f=${res.Title[0]}`;

//   let movieObj;
//   let mealObj;

//   ajax.get(movieQuery).then((response) => {
//     movieObj = res;
//     console.log(movieObj);
//   });
//   ajax.get(mealQuery).then((response) => {
//     mealObj = res.meals[Math.floor(Math.random() * res.meals.length)];
//     console.log(mealObj);
//     renderMovie(movieObj);
//     renderDinner(mealObj);
//   });
// }
// function renderMovie(movie) {
//   $("#movieInfo").append(`<p>${movie.Title}</p>`);
// }
// function renderDinner(dinner) {
//   $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
// }

// $(".change-pairingsSearched").on("click", (event) => {
//   let id = $(this).data("id");
//   let newPairingsSearched = $(this).data("newPairingsSearched");

//   let newPairingsSearchedState = {
//     favorited: newPairingsSearched,
//   };

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
