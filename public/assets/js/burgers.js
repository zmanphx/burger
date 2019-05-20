// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    
    $(document).on("click",  ".btn", function(event){
        event.preventDefault();
        event.stopPropagation();
      var id = $(this).data("myval");
      var devourState = {devoured:1};
        
      //$("#"+ id).appendTo($("#devouredBurgers"));


  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function() {
          console.log("Just devoured my burger", );
          // Reload the page to get the updated list
         location.reload();
        }
      );
  
});
    $(".newBurgerForm").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      event.stopPropagation();
      var newBurger = {
       burger_name: $("#inputBurger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });



    $(".resetForm").on("reset", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        event.stopPropagation();
        var devourState = {devoured:0} ;
    
        $.ajax("/api/burgers/" + 0, {
            type: "PUT",
            data:devourState
          }).then(
            function() {
              console.log("Just devoured my burger", );
              // Reload the page to get the updated list
             location.reload();
            }
          );
        });
       
      

});
  