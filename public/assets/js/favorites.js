$(() => {
  $.get("/All", (resp) => {
    console.log(resp);
    renderMovie(resp.movie);
    renderDinner(resp.dinner);
  });
  function renderMovie(movie) {
    $("#movieInfo").append(`<p>${movie.Title}</p>`);
  }
  function renderDinner(dinner) {
    $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
  }
});
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
