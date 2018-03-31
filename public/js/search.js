$(document).ready(function () {
    if (window.location.pathname === "/search") {
        $("#searchForm").on("submit", function () {
            let id = parseInt($("#idNumber").val().trim());
            sessionStorage.setItem('id', id);
        }); 
        let call = sessionStorage.getItem('id');
        $.get("/api/puppies/" + call, function (data) {
            console.log(data);
            });
    }
}); 

function showSearch() {
    let searchCard = $('<div>').addClass('uk-grid-small uk-child-width-1-6@s uk-flex-center uk-text-center'); 
    let searchData = $('<div>').addClass('uk-card uk-card-default uk-card-body').attr('id', 'searchCard');
    let deleteButton = $('<button>').addClass('uk-button uk-button-secondary').attr('id', 'delete').text('Delete');
}
