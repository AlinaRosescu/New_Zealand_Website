function navScroll() {
	var menu = $(".main-nav");

	if ($(window).scrollTop() > 50) {
		menu.addClass("nav-scroll");
	} else {
		menu.removeClass("nav-scroll");
	}
}

function smoothScroll() {
	var link = $(this).attr("href");
	$("html, body").animate({scrollTop:$(link).offset().top}, "slow");
	return false;
}


$(document).ready(function() {
	if ($(window).scrollTop() > 50) {
		navScroll();
	}
	$(window).scroll(navScroll);

	$("a").click(smoothScroll);

});