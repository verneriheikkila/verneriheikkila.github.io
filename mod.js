$("document").ready(function () {
    $('[data-type="vitamin"]').css("background-color", "yellow");
    $('[data-type="proteinbar"]').css("background-color", "black");
    $('[data-type="mineral-water"]').css("background-color", "red");
    $('.product-item').css("cursor", "pointer");
 })
 var x = $('#history').clone().prop({
    'id': 'history-clone'
 })
 $('#history').after(x)
 $('#history').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit,");
 $('.navbar a[href*="#"]').on('click', function (event) {
    event.preventDefault();
 
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
 });