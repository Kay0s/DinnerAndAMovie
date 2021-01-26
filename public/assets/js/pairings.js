$("#search").on("click", () => {
  searchMovieGetMeal($("#movietitle").val());
});

$("#like-button").on("click", () => {
  likeButton(
    $("#like-button").data().movieTitle,
    $("#like-button").data().dinnerName
  );
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
  $("#like-button").data({
    movieTitle: movie.Title,
    dinnerName: dinner.strMeal,
  });

  $("#poster").attr("src", movie.Poster);
  $("#movie-header").text(movie.Title);
  $("#plot").text(movie.Plot);
  $("genre").text(movie.Genre);
  $("#actors").text(movie.Actors);
  $("#directors").text(movie.Directors);

  $("#dinner-header").text(dinner.strMeal);
  $("#mealpic").attr("src", dinner.strMealThumb);

  //ingredients, iterate through all attributes until we find ingredients
  $("#ingredients").empty();
  for (attribute in dinner) {
    if (attribute.length >= 13) {
      if (attribute.slice(0, 13) === "strIngredient") {
        if (dinner[attribute] === "") {
          //there's always 20 ingredients returned from the api, if a recipe only needs 5, 6-20 will be empty strings
          console.log("empty string alert");
          break; //if the attributes are empty, we bail
        }
        const index = attribute.slice(13);
        $("#ingredients").append(
          `<li class="ingredient-li">${dinner[attribute]} - ${
            dinner["strMeasure" + index]
          }</li>`
        ); //add the ingredients and amounts to the ingredients
      }
    }
  }
  $("#instructions").empty();
  dinner.strInstructions.split(".").forEach((instruction) => {
    if (instruction === "") {
      //if for whatever reason, the instructions are split so there's an empty space, we'll fill it in with an "enjoy!"
      instruction = "Enjoy!";
    } else {
      $("#instructions").append(
        `<li class="instruction-li">${instruction}.</li>`
      );
    }
  });

  $(".invisible").removeClass("invisible");
}

function doStuff() {
  searchMovieGetMeal("big");
}

// function deleteAThing(someMovieTitle) {
//   //sequelize stuff
//   axios({
//     url: `/api/movie/1`,
//     method: "get",
//     response: "json",
//   }).then((response) => {
//     console.log(response.data);
//   });
//   db.movie.destroy({
//     where: {
//       title: someMovieTitle,
//     },
//   });
// }
function likeButton(movieTitle, dinnerName) {
  //check for movie
  axios({
    url: `/api/movie/byTitle/${movieTitle}`,
    method: "get",
    response: "json",
  }).then((response) => {
    const movieRes = response.data;
    if (movieRes === null) {
      //if there is no movie, then post it
      axios({
        url: "/api/movie/",
        method: "post",
        response: "json",
        data: {
          title: movieTitle,
        },
      }).then((response1) => {
        console.log("Movie Posted");
        axios({
          url: "/api/dinner/",
          method: "post",
          response: "json",
          data: {
            mealSTR: dinnerName,
            likes: 1,
            MovieId: response1.data.id,
          },
        }).then((response2) => {
          console.log("posted dinner to movie", response.data);
          return response2;
        });
      });
    } else {
      //else if there is a movie, check for matching dinners
      console.log("movie found");
      let found = false;
      let dinnerId;
      movieRes.Dinners.forEach((dinner) => {
        console.log(dinner.mealSTR, dinnerName);
        if (dinner.mealSTR === dinnerName) {
          //if there is a matching dinner, like it
          found = true;
          console.log("found a dinner match");
          dinnerId = dinner.id;
        }
      });
      if (found) {
        console.log("liking", movieRes.id, dinnerId);
        axios({
          url: `/api/dinner/like/${movieRes.id}/${dinnerId}`,
          method: "put",
          response: "json",
        }).then((response) => {
          console.log("liked movie", response.data);
          return response.data;
        });
      } else {
        //if there's not a matching dinner, post one
        axios({
          url: "/api/dinner/",
          method: "post",
          response: "json",
          data: {
            MovieId: movieRes.id,
            mealSTR: dinnerName,
            likes: 1,
          },
        }).then((response) => {
          console.log(`Posting new dinner: ${dinnerName} to ${movieTitle}`);
          return response.data;
        });
      }
    }
  });
}
