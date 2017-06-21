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
})
