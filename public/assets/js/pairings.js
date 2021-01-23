<<<<<<< HEAD
//   //Make sure we wait to attach our handlers until the DOM is fully loaded.
//  $(function () {
//    $(".change-pairingsSearched").on("click", (event) => {
//      let id = $(this).data("id");
//      let newFavorite = $(this).data("newFavorite");

//      let newPairingsSearchedState = {
//        favorited: newFavorite,
//      };

//       //Send the PUT request.
//      $.ajax("/api/pairings" + id, {
//        type: "PUT",
//        data: newPairingsSearchedState,
//      }).then(function () {
//        console.log("changed favorited to", newFavorite);
//        // Reload the page to get the updated list
//        location.reload();
//      });
//    });

//    $("movie-title").on("click",(event) => {
// let id = $(this).data("id");
// let title = $(this).data("title")

//     let newPairingsInputed = {
//       movieTitle: title,
//     };
// //  Make sure to preventDefault on a submit event.
//   event.preventDefault();
// //   //   //Get Movie title
// //   //   //if movie exists in db, don't write it
// //   //   //else POST new movie
//   //     //then post new dinner with movie's id as MovieID attribute
    // let newPairingsInputed = {
    //   name: $("#npi").val().trim(),
      
    // };

    $("#search").on("click", function () {
      searchMovieGetMeal($("#movietitle").val());
    });

    $("#doStuff").on("click", doStuff);

    function searchMovieGetMeal(title) {
      axios({
        url: `/api/movie/pairing/${title}`,
        method: "get",
        response: "json",
      }).then((response) => {
        console.log(response); //includes a bunch of stuff you don't care about
        console.log(response.data); //give you just the stuff you care about
        console.log(response.data[0]); //since this call returns an array, we get the first index
        console.log(response.data[1]); // second index
        renderMovieAndDinner(response.data[0], response.data[1]);
      });
    }

    function renderMovieAndDinner(movie, dinner) {
      $("#movieInfo").append(`<p>${movie.Title}</p>`);
      let elementID = movie.Title.replace(/\s/g, '')+"+"+dinner.strMeal.replace(/\s/g, '');
      let newDinner = $(`<p id="${elementID}">${dinner.strMeal}</p>`);
      dinner.movieTitle = movie.Title;
      newDinner.data("dinner", dinner);
      newButton = $(`<button>Like</button>`);
      newButton.on("click", () => {likeButton(movie.Title, dinner.strMeal)});
      $(newDinner).append(newButton);
      $("#dinnerInfo").append(newDinner);
    }

    function doStuff() {
      searchMovieGetMeal("big");
    }

    function deleteAThing(someMovieTitle) {
      //sequelize stuff
      axios({
        url: `/api/movie/1`,
        method: "get",
        response: "json",
      }).then((response) => {
        console.log(response.data);
      });
      db.movie.destroy({
        where: {
          title: someMovieTitle,
        },
      });
    }
    function likeButton(movieTitle, dinnerName) {
      console.log("checking like button");
      //check if combo exists in db
      //get all from db
      axios({
        url: "/api/movie/All",
        method: "get",
        response: "json"
      }).then((response) => {
        //console.log(response.data);
        response.data.forEach((movie) => { //check each db entry for a matching title
          if (movie.title === movieTitle) { //if it exists, check its dinners
            console.log("found one: ", movie);
            movie.Dinners.forEach((dinner) => {
                if (dinner.mealSTR === dinnerName) { //if a dinner matches, update its likes with a put request
                  console.log(dinner.mealSTR, dinnerName);
                console.log("got a dinner: ", dinner);
                axios({
                    url: `/api/dinner/like/${movie.id}/${dinner.id}`,
                    method: 'put',
                    response: 'json'
                })
                .then(response => {
                    console.log(`success! like added to ${movieTitle} and ${dinnerName}`);
                    return response.data;
                })
              }
            });
          }
          else{
              console.log("nothing found");
          }
        });
        axios({
            url:"/api/movie/",
            method: "post",
            data: {
              title: movieTitle
            },
            response: "json"
        })
        .then(response => {
          axios({
              url:"api/dinner/",
              method: "post",
              data: {
                  mealSTR: dinnerName,
                  likes: 1,
                  MovieId: response.data.id
              },
              response: "json"
          })
          .then(response => {
              console.log("made a new Movie and Dinner Pairing");
          })
        })
      });
      //if so, put another like
      //if not, post new Dinner
    };
 

//     // Send the POST request.
  //   $.ajax("/api/movie/", {
  //      type: "POST",
  //      data: newPairingsInputed, //movie title
  //    }).then(function () {
  //      console.log("created new favorite");
  //      // Reload the page to get the updated list
  //      location.reload();
  //    });
  //  });
    //function renderEmpty() {
      //  let alertDiv = $("<div>");
//   //     alertDiv.addClass("alert alert-danger");
//   //     alertDiv.text("Check the spelling");
//   //     movieContainer.append(alertDiv);
//   //    }
//   //    renderEmpty();





// // $(".change-pairingsSearched").on("click", (event) => {
// //   let id = $(this).data("id");
// //   let newPairingsSearched = $(this).data("newPairingsSearched");

// //   let newPairingsSearchedState = {
// //     favorited: newFavorite,
// //   };
// // } let Favorite = sequelize.define('Favorite', {
// //   movie_name: Sequelize.STRING,
// //   dinner_name: Sequelize.STRING,
// // }, {
// //   tableName: 'favorites',
// //   timestamps: false
// // }));

// // Favorites
// //   .create({
// //     movie_name: movie_name,
// //     dinner_name: dinner_name

// //   })
// //   .complete((err, favorite) => {
// //     if (err) {
// //      console.log(err);
// //      res.response("Error adding pairing to Favorites")
// //     } else {
// //      res.response("Pairing added to Favorites!")
// //     }
// //   })
  
=======
$("#search").on("click", function () {
  searchMovieGetMeal($("#movietitle").val());
});

$("#doStuff").on("click", doStuff);

function searchMovieGetMeal(title) {
  axios({
    url: `/api/movie/pairing/${title}`,
    method: "get",
    response: "json",
  }).then((response) => {
    console.log(response); //includes a bunch of stuff you don't care about
    console.log(response.data); //give you just the stuff you care about
    console.log(response.data[0]); //since this call returns an array, we get the first index
    console.log(response.data[1]); // second index
    renderMovieAndDinner(response.data[0], response.data[1]);
  });
}

function renderMovieAndDinner(movie, dinner) {
  //console.log("rendering into html")
  $("#movie-title").text(movie.Title);
  let newMovie = $("#movie-card");
  let elementID = movie.Title.replace(/\s/g, '')+"+"+dinner.strMeal.replace(/\s/g, '');
  let newDinner = $(`#dinner-card`);
  dinner.movieTitle = movie.Title;
  newDinner.data("dinner", dinner);
  newButton = $(`<button>Like</button>`);
  newButton.on("click", () => {likeButton(movie.Title, dinner.strMeal)});
  $(newDinner).append(newButton);
  $("#dinnerInfo").append(newDinner);
  $("#meal-name").text(dinner.strMeal);
}

function doStuff() {
  searchMovieGetMeal("big");
}

function deleteAThing(someMovieTitle) {
  //sequelize stuff
  axios({
    url: `/api/movie/1`,
    method: "get",
    response: "json",
  }).then((response) => {
    console.log(response.data);
  });
  db.movie.destroy({
    where: {
      title: someMovieTitle,
    },
  });
}
function likeButton(movieTitle, dinnerName) {
  console.log("checking like button");
  //check if combo exists in db
  //get all from db
  axios({
    url: "/api/movie/All",
    method: "get",
    response: "json"
  }).then((response) => {
    //console.log(response.data);
    response.data.forEach((movie) => { //check each db entry for a matching title
      if (movie.title === movieTitle) { //if it exists, check its dinners
        console.log("found one: ", movie);
        movie.Dinners.forEach((dinner) => {
            if (dinner.mealSTR === dinnerName) { //if a dinner matches, update its likes with a put request
              console.log(dinner.mealSTR, dinnerName);
            console.log("got a dinner: ", dinner);
            axios({
                url: `/api/dinner/like/${movie.id}/${dinner.id}`,
                method: 'put',
                response: 'json'
            })
            .then(response => {
                console.log(`success! like added to ${movieTitle} and ${dinnerName}`);
                return response.data;
            })
          }
        });
      }
      else{
          console.log("nothing found");
      }
    });
    axios({
        url:"/api/movie/",
        method: "post",
        data: {
          title: movieTitle
        },
        response: "json"
    })
    .then(response => {
      axios({
          url:"api/dinner/",
          method: "post",
          data: {
              mealSTR: dinnerName,
              likes: 1,
              MovieId: response.data.id
          },
          response: "json"
      })
      .then(response => {
          console.log("made a new Movie and Dinner Pairing");
      })
    })
  });
  //if so, put another like
  //if not, post new Dinner
}
>>>>>>> moreOnclicks
