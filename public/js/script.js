// TEST SECTION FOR API REQUESTS - REMOVE ONCE FUNCTIONAL

$.get("/api/puppies", function(data) {
    $("#test").html(data);
      }); 