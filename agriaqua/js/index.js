$(document).ready(function() {
    // Load the default section on page load
    $('#content').load('index.html');
  
    // Handle navigation clicks
    $('.nav-link').click(function(event) {
      event.preventDefault();
      var section = $(this).attr('href');
      $('#content').load(section + '.html');
    });
  });
  