$(document).ready(function () {
    if (window.location.pathname === "/shelter") {
        $("#shelForm").on("submit", function () {
            var newData =
                {
                    name: $("#name").val().trim(),
                    breed: $("#breed").val().trim(),
                    age: $("#age").val().trim(),
                    gender: $("#gender").val().trim(),
                    image: $("#imgURL").val().trim(),
                    info: $("#info").val().trim()
                };
            // var currentURL = window.location.origin;
            $.ajax({ url: "/api/puppies", type: "POST", data: newData }).done(function (res) {
                console.log(res)
            });
        })
    }
}); 
