<<<<<<< HEAD
// console.log("i exist");

// $("#search").on("click", function () {
//   console.log("$#search");
//   console.log("click ocurred");
//   searchMovieGetMeal($("#movietitle").val());
// });

// // function searchMovieGetMeal(movie) {
// //   let movieObj;
// //   let mealObj;
// //   $.ajax({
// //     url: `http://www.omdbapi.com/?apikey=25ecd94b&t=${movie}`,
// //     method: "GET",
// //   }).then((res) => {
// //     movieObj = res;
// //     console.log(movieObj);
// //     $.ajax({
// //       url: `https://www.themealdb.com/api/json/v1/1/search.php?f=${res.Title[0]}`,
// //       method: "GET",
// //     }).then((res) => {
// //       console.log("I work", res);
// //       // mealObj = res.meals[Math.floor(Math.random() * res.meals.length)]
// //       // console.log(mealObj);
// //       // renderMovie(movieObj);
// //       // renderDinner(mealObj);
// //     });
// //   });
// // }

// // function renderMovie(movie) {
// //   $("#movieInfo").append(`<p>${movie.Title}</p>`);
// // }

// // function renderDinner(dinner) {
// //   $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
// // }

// // $("#like").on("click", function () {
// //   likeButton(movie, dinner);
// // });

// // function doStuff() {
// //   searchMovieGetMeal("big");
// // }
=======
// $("#search").on("click", function(){
//     searchMovieGetMeal($("#movietitle").val());
// })

// function searchMovieGetMeal(movie){
//     let movieObj;
//     let mealObj;
//     $.ajax({
//         url: `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.MOVIE_API_KEY}=${movie}`,
//         method: 'GET'
//     })
//     .then( res => {
//         movieObj = res;
//         console.log(movieObj);
//         $.ajax({
//             url: `https://www.themealdb.com/api/json/v1/1/search.php?f=${res.Title[0]}`,
//             method: 'GET'
//         })
//         .then(res => {
//             mealObj = res.meals[Math.floor(Math.random() * res.meals.length)]
//             console.log(mealObj);
//             renderMovie(movieObj);
//             renderDinner(mealObj);
//         });
//     });
// }

// function renderMovie(movie){
//     $("#movieInfo").append(`<p>${movie.Title}</p>`);
// }

// function renderDinner(dinner){
//     $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
// }

// $("#like").on("click", function(){
//     likeButton(movie, dinner);
// })

// function doStuff(){
//     searchMovieGetMeal("big");
// }
>>>>>>> e84c9390b80e8d4963cda6537ad4d46aadb53b35
