// make the header stick to the top of the page when scrolling
function navScroll() {
	var menu = $(".navbar");

	if ($(window).scrollTop() > 50) {
		menu.addClass("nav-scroll");
	} else {
		menu.removeClass("nav-scroll");
	}
}

//make the page scroll slowly
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

	$('.toggle-nav').click(function(e) {
		$(this).toggleClass('active');
		$('.main-nav ul').toggleClass('active');
		e.preventDefault();
	});
});
