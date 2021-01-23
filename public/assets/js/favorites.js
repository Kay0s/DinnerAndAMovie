//Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function () {

router.get("/All", (req, res) => {
  db.Movie.findAll({
    include: [db.Dinner],
  }).then((response) => {
    let movie = response.db.Movie;
    let dinner = response.db.Dinner;
    renderMovie(movie);
    renderDinner(dinner);
  });
  function renderMovie(movie) {
    $("#movieInfo").append(`<p>${movie.Title}</p>`);
  }
  function renderDinner(dinner) {
    $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
  }
});

//RenderMovieAndDinners

$(".delete-favorite").on("click", function (event) {
  let id = $(this).data("id");
  // Send the DELETE request.
  router.delete("/bytitle/:title", (req, res) => {
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
