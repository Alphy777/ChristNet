$(document).ready(function() {
    $("h5").click(function() {
      $(this).siblings("h6,p").toggle(); // Toggle visibility of all sibling p tags
    });
  });