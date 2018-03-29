var dataID = sessionStorage.getItem('key'); 

$.get("/api/puppies", function (data) {
    addSlides(data);
    $('.likeButton').on('click', function (evt) {
        evt.preventDefault();
        sessionStorage.setItem('key', (this.id)); 
    });
})

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
        likeButton.addClass('likeButton uk-button uk-button-default').attr('id', data[i].id).attr('aria-hidden', 'false').text('Choose me!');
        likeButton.attr('onclick', "location.href='../adopt';");
        likeButton.appendTo(nameDiv);
    }
}

$.get("/api/puppies/" + dataID, function(data) {
    test(data); 
    console.log(data);
}) 

function test(data) {
    let heading = $('<h1>'); 
    let photo = $('<img>'); 
    heading.text(data.name).appendTo($('.profilePhoto')); 
    photo.attr('src', data.image).css('width', '300px').attr('id', 'profileImageOnPage').appendTo($('.profilePhoto')); 
}