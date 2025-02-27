$(window).on("load", function () { 
	$("#fx-overlay").fadeOut("slow");     
});


(function ($) {

	"use strict";

	/*--------------------- Site Loader --------------------*/

    // $(window).load(function () { 
        // $("#fx-overlay").fadeOut("slow");
		// $( ".mixitup-control-active" ).trigger( "click" );
    // });

	/*--------------------- Return To Top --------------------*/
	var btn = $('#return-to-top');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.fadeIn(500);
		} else {
			btn.fadeOut(500);
		}
	});

	btn.on('click', function (evnt) {
		evnt.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '500');
	});

	/*--------------------- Portfolio Section --------------------*/
	$(document).ready(function () {
		var mixer = mixitup('.portfolio-list');		
		$( ".filter" ).trigger( "click" );
	});
	
	/*--------------------- Scroll Top --------------------*/
	$(".btn-scroll").on('click', function() {
		$('html,body').animate({
			scrollTop: $("#demos").offset().top},
			'slow');
	});
	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
 
	$(".navbar-toggler").on('click', function () {
			$("#fx-mobile-menu").addClass("fx-mobile-menu-open");
			$(".fx-side-cart-overlay").fadeIn();
	});   
	$(".fx-side-cart-overlay, .fx-close").on('click', function () {
		$("#fx-mobile-menu").removeClass("fx-mobile-menu-open");
		$(".fx-side-cart-overlay").fadeOut();
	}); 

	$(document).ready(function() {
		$('.mn-nav').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 1000, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance+60) {
						$('.navbar-nav li.active').removeClass('active');
						$('.navbar-nav li').eq(i).addClass('active');
				}
		});
}).scroll();

})(jQuery);