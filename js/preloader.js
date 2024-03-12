$(window).on('load', function() {
    console.log("Page fully loaded");
    $('#preloader').delay(350).fadeOut('slow', function() {
        $('#preloader').remove();
    }); 
});
