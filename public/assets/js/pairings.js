// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-pairingsSearched").on("click", (event) => {
      let id = $(this).data("id");
      let newPairingsSearched = $(this).data("newPairingsSearched");
  
      let newPairingsSearchedState = {
        favorited: newPairingsSearched,
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
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newPairingsInputed = {
        name: $("#npi").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/:movies/:dinners", {
        type: "POST",
        data: newPairingsInputed,
      }).then(function () {
        console.log("created new favorite");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
  // Function for handling what to render when a movie title isn't entered
// function renderEmpty() {
//   let alertDiv = $("<div>");
//   alertDiv.addClass("alert alert-danger");
//   alertDiv.text("You must type in a movie name before pressing the search button.");
//   movieContainer.append(alertDiv);
// }
  
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
  