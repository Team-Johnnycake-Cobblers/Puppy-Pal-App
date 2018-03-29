// TEST SECTION FOR API REQUESTS - REMOVE ONCE FUNCTIONAL

$.get("/api/puppies", function(data) {
    for (let i = 0; i < data.length; i ++) {
        let slides = $('<li>'); 
        let image = $('<img>'); 
        let nameDiv = $('<div>');
        let nameText = $('<h3>');  


        slides.addClass('photoSlides').appendTo($('#slideshow')); 
        image.attr('uk-cover', '').attr('src', data[i].image).addClass('slideshowPhotos').attr('max-height', '300px'); 
        image.appendTo(slides);
        nameDiv.addClass('uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom'); 
        nameDiv.appendTo(slides); 
        nameText.addClass('uk-margin-remove').text(data[i].name); 
        nameText.appendTo(nameDiv);  
    }
      }); 

$("#shelSubmit").on("click", function(){
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
	$.post(currentURL + "/api/puppies", newData,
					function (data) { });
})
