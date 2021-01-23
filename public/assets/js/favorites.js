// // Make sure we wait to attach our handlers until the DOM is fully loaded.
 $(function () {
     $(".delete-favorite").on("click", function (event) {
       let id = $(this).data("id");
  
       // Send the DELETE request.
       $.ajax("/api/:movies/:dinners" + id, {
         type: "DELETE",
       }).then(function () {
         console.log("deleted favorite", id);
//         // Reload the page to get the updated list
         location.reload();
       });
     });
   });
  