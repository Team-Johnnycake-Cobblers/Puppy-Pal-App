// TEST SECTION FOR API REQUESTS - REMOVE ONCE FUNCTIONAL

$.get("/api/puppies", function (data) {
    $("#test").html(data);
});

$("#shelSubmit").on("click", function () {
    var newData =
        {
            name: $("#name").val().trim(),
            breed: $("#breed").val().trim(),
            age: $("#age").val().trim(),
            gender: $("#gender").val().trim(),
            image: $("#imgURL").val().trim(),
            info: $("#info").val().trim()
        };
    var currentURL = window.location.origin;
    $.ajax({ url: currentURL + "/api/puppies", method: "POST" }).done(function (res) {
        console.log(res)
    });
})