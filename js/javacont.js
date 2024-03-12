$(document).ready(function() {

  // Form validation with jQuery Validate plugin
  $("#submit-form").validate({ // Change to your form's ID if different
    rules: {
      fname: {
        required: true
      },
      mail: {
        required: true,
        email: true,
        domain: true //  custom domain validation
      },
      msg: {
        required: true
      }
    },
    messages: {
      fname: {
        required: "Please enter your fullname"
      },
      mail: {
        required: "Please enter your Christ University email",
        email: "Please enter a valid email address",
        domain: "Please enter a valid Christ University email"
      },
      msg: {
        required: "Please enter your message"
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).css({
        "color": "red",
        "border-color": "red"
      });
      // Highlight the corresponding i tag
      $(element).prevAll('i.cus').css('color', 'red'); // Adjust selector if needed
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).css({
        "color": "#000",
        "border-color": "#ccc"
      });
      // Reset color of the i tag
      $(element).prevAll('i.cus').css('color', '#000'); // Adjust selector if needed
    }
  });

  // Custom domain validation:
  $.validator.addMethod("domain", function(value, element) {
    return this.optional(element) || /^[\w-]+(\.[\w-]+)*@(.*\.)?(christuniversity\.in)$/.test(value);
  }, "*");

  // Handle contact link click with appropriate mailto URL based on platform
  $('#contact-link').click(function(event) {
    event.preventDefault(); // Prevent default link behavior

    if (/android/i.test(navigator.userAgent)) {
      window.location.href = "mailto:email@christuniversity.in"; // Use mailto for Android
    } else {
      window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=email@christuniversity.in"; // Open Gmail web app for others
    }
  });
});

// For sending the data from the website
$("#submit-form").submit(function(e){
  e.preventDefault();
  
  // Check if the form is valid
  if($(this).valid()){
    $.ajax({
      url:"https://script.google.com/macros/s/AKfycbz4Cs83XvRjgjmklDDMXtmM2l3dLo8bQfzBm9qSb1OkPMz_4Y6sy96bBNcBmLNEEuCURA/exec",
       data:$(this).serialize(),
      method:"post",
      success:function (response){
        window.location.href = "https://alphy777.github.io/Faith-Compas/success.html";
      },
      error:function (err){
        alert("Something Error")
      }
    });
  }
});
  