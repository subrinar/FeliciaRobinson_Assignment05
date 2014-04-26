$(document).ready(function() {
	$('#drag').draggable();
	$('#drop').droppable({
		drop: function(event, ui) {
			$('#drop').css("backgroundColor", "#95a5a6");
			$('#result').css("backgroundColor", "#dda93e");
			$('#para').text("your javasrcript code is: (function(z,v){function la(){.ready()}}").css("font-size", "1.25em").css("color","#fff");
			$('#drag').css("backgroundColor", "#e74c3c");
			$("#drag").html("<p>refresh the browser to reset me</p>").css("color", "#fff");

		}
	});

	// scroll to TOP 
   // Show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });
    
  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
  })





});
