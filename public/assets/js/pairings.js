// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-pairingsSearched").on("click", (event) => {
    let id = $(this).data("id");
    let newFavorite = $(this).data("newFavorite");

    let newPairingsSearchedState = {
      favorited: newFavorite,
    };

    // Send the PUT request.
    $.ajax("/api/pairings" + id, {
      type: "PUT",
      data: newPairingsSearchedState,
    }).then(function () {
      console.log("changed favorited to", newFavorite);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("movie-title").on("click",(event) => {
    let id = $(this).data("id");
    let title = $(this).data("title")

    let newPairingsInputed = {
      movieTitle: title,
    };
    //Make sure to preventDefault on a submit event.
    //  event.preventDefault();
    //Get Movie title
    //if movie exists in db, don't write it
    //else POST new movie
      //then post new dinner with movie's id as MovieID attribute
    let newPairingsInputed = {
      name: $("#npi").val().trim(),
      
    };
    // Send the POST request.
    $.ajax("/api/movie/", {
      type: "POST",
      data: newPairingsInputed, //movie title
    }).then(function () {
      console.log("created new favorite");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  // function renderEmpty() {
  //     let alertDiv = $("<div>");
  //     alertDiv.addClass("alert alert-danger");
  //     alertDiv.text("Check the spelling");
  //     movieContainer.append(alertDiv);
  //    }
  //    renderEmpty();

});



// $(".change-pairingsSearched").on("click", (event) => {
//   let id = $(this).data("id");
//   let newPairingsSearched = $(this).data("newPairingsSearched");

//   let newPairingsSearchedState = {
//     favorited: newFavorite,
//   };
// } let Favorite = sequelize.define('Favorite', {
//   movie_name: Sequelize.STRING,
//   dinner_name: Sequelize.STRING,
// }, {
//   tableName: 'favorites',
//   timestamps: false
// }));

// Favorites
//   .create({
//     movie_name: movie_name,
//     dinner_name: dinner_name

//   })
//   .complete((err, favorite) => {
//     if (err) {
//      console.log(err);
//      res.response("Error adding pairing to Favorites")
//     } else {
//      res.response("Pairing added to Favorites!")
//     }
//   })
