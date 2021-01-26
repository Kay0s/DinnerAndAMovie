//Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(() => {
  $.get("/api/dinner/All", (resp) => {
    console.log("All",resp);
    renderMovie(resp.movie);
    renderDinner(resp.dinner);
  });
  function renderMovie(movie) {
    $("#movieInfo").append(`<p>${movie.Title}</p>`);
  }
  function renderDinner(dinner) {
    $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
  }

// axios.get("/All", (req, res) => {
//   db.Movie.findAll({
//     include: [db.Dinner],
//   }).then((response) => {
//     let movie = response.db.Movie;
//     let dinner = response.db.Dinner;
//     renderMovie(movie);
//     renderDinner(dinner);
//   });

// });

//RenderMovieAndDinners

// 
$(".delete").on("click", function(event) {
  let id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("movies/dinner", {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted movie", id);
      // Reload the page to get the updated list
      
    }
  );
});
  });

