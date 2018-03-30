$(document).ready(function () {
    if (window.location.pathname === "/shelter") {
        $("#shelForm").on("submit", function () {
            let newData =
            {
                name: $("#name").val().trim(),
                breed: $("#breed").val().trim(),
                gender: $("#gender").val().trim(),
                age: $("#age").val().trim(),
                info: $("#info").val().trim(),
                location: $("#location").val().trim(), 
                image: $("#image").val().trim()
                
            };
            $.ajax({
                type: "POST", 
                url: "api/puppies", 
                data: newData
            });
            alert("Your form was submitted succesfully")

        }); 
        
    }
}); 