$(document).ready(function(){
	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$("#project_pic1").on({
        mouseenter: function() {
            $("#project_pic1").attr("src", "../images/gif/simon_game.gif"); //on hover replace pic.png to pic.gif(animation
          },
          mouseleave: function() {
            $("#project_pic1").attr("src", "../images/screenshots/simon_game.png"); //change pic.gif to pic.png
          }
        });
    $("#project_pic2").on({
        mouseenter: function() {
            $("#project_pic2").attr("src", "../images/gif/travel_dairy.gif"); //on hover replace pic.png to pic.gif(animation
          },
          mouseleave: function() {
            $("#project_pic2").attr("src", "../images/screenshots/travel_dairy.png"); //change pic.gif to pic.png
          }
        });
    $("#project_pic3").on({
        mouseenter: function() {
            $("#project_pic3").attr("src", "../images/gif/weatro.gif"); //on hover replace pic.png to pic.gif(animation
          },
          mouseleave: function() {
            $("#project_pic3").attr("src", "../images/screenshots/weatro.png"); //change pic.gif to pic.png
          }
        });
    $("#project_pic4").on({
        mouseenter: function() {
            $("#project_pic4").attr("src", "../images/gif/tick_tac_toe.gif"); //on hover replace pic.png to pic.gif(animation
          },
          mouseleave: function() {
            $("#project_pic4").attr("src", "../images/screenshots/tick_tac_toe.png"); //change pic.gif to pic.png
          }
        });
});

$(function() {
	var documentEl = $(document),
			fadeElem = $(".fade-scroll");

			documentEl.on("scroll", function() {
				var currScrollPos = documentEl.scrollTop();

				fadeElem.each(function() {
					var $this = $(this),
							elemOffsetTop = $this.offset().top;
					if (currScrollPos > elemOffsetTop) $this.css("opacity", 1 -(currScrollPos-elemOffsetTop)/100);
				});
			});
});

$(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation_slide');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});
