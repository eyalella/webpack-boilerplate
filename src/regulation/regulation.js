require('../common/common');

$(document).ready(function() {
    new Swiper('.swiper-container.tutorials-swiper', {
	    spaceBetween: 10,
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,
	    slidesPerView: 'auto',

	    pagination: {
	        el: '.tutorials-pagination.swiper-pagination',
	        clickable: true
	    }
	});

	$('.tutorials-head').on('click', function () {
		$(".tutorials-arrow").toggleClass("rotate");
		$(".tutorials-wrapper-mobile").toggleClass("hidden");
	});
});