require('../common/common');

$(document).ready(function() {
    new Swiper('.swiper-container.main-gallery-swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,

        pagination: {
            el: '.main-pagination.swiper-pagination',
            clickable: true,
        }
    });

    $('.sign-up-a').keydown(function (e) {
        var key = e.which;
        if (key == 13) {
            $(this).click();
            return false;
        }
    });

 //    $("a").keydown(function (e) {    
	//   if (e.which == 9) {      
	//     $(this).focus();
	//     e.preventDefault();
	//   }
	// });
});