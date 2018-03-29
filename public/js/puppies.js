// TODO: Add functionality to like button

$.get("/api/puppies", function (data) {
    addSlides(data);
    });

function addSlides(data) {
    for (let i = 0; i < data.length; i++) {
        let likeButton = $('<button>');
        let slides = $('<li>');
        let image = $('<img>');
        let nameDiv = $('<div>');
        let nameText = $('<h3>');
        slides.addClass('photoSlides').appendTo($('#slideshow'));
        image.attr('uk-cover', '').attr('src', data[i].image).addClass('slideshowPhotos');
        image.appendTo(slides);
        nameDiv.addClass('uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom').attr('id', 'overlay');
        nameDiv.appendTo(slides);
        nameText.addClass('uk-margin-remove').text(data[i].name);
        nameText.appendTo(nameDiv);
        likeButton.addClass('likeButton uk-button uk-button-default').attr('id', data[i].id).attr('aria-hidden', 'false').attr('onclick', "location.href='../adopt';").text('Choose me!');
        likeButton.appendTo(nameDiv);
    }
}