//Make sure we wait to attach our handlers until the DOM is fully loaded.

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

$(".delete-favorite").on("click", function (event) {
  const id = $(this).data("id");
  console.log(id, event);
  // Send the DELETE request.
  $.delete("/bytitle/:title", (req, res) => {
    //findall where title=req.params.title
    //attributes:id
    db.Movie.findOne({
      where: {
        title: req.params.title,
      },
      attributes: ["id"],
    }).then((dbMovieID) => {
      db.Movie.destroy({
        where: {
          id: dbMovieID.id,
        },
      }).then((dbMovie) => {
        res.json(dbMovie);
      });
    });
  });
});
