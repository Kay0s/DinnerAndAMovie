//Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function () {


  router.get("/All", (req, res) => {
    db.Movie.findAll({
      include: [db.Dinner],
    }).then(response(db.Movie, db.Dinner)) => {

      renderMovie(db.Movie);
      renderDinner(db.Dinner);

    });
  }
      function renderMovie(db.Movie) {
        $("#movieInfo").append(`<p>${movie.Title}</p>`);
      }
      function renderDinner(db.Dinner) {
        $("#dinnerInfo").append(`<p>${dinner.strMeal}</p>`);
      }
      


      
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
})
