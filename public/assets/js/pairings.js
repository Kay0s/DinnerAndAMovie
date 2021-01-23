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
