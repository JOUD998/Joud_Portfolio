
$(document).ready(function () {
    // Hide additional information initially
    $('.additional-info').hide();
  
    // Toggle additional information on button click
    $('#toggleInfoBtn').on('click', function () {
      $('.additional-info').toggle();
    });
  });
  