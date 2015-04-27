jQuery(document).ready(function() {
	jQuery('#nav').onePageNav();
	
	jQuery('[data-toggle="tooltip"]').tooltip();
	
	/* Back To Top */
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

jQuery(function(){
	jQuery(window).scroll(function() {
		var scroll = getCurrentScroll();
		if ( scroll == 0 ) {
			jQuery( "ul#nav li" ).removeClass('current');
		}
	});
	
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});