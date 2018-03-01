require('../common/common');

$(document).ready(function() {
	    new Swiper('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,

	    pagination: {
	        el: '.main-pagination.swiper-pagination',
	        clickable: true
	    }
	});
});