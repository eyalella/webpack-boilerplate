require('../common/common');
var stickybits = require('stickybits');

$(document).ready(function() {

	var width = $( window ).width();
  	if(width > 992){
		stickybits.default('.options-container', { 
			useStickyClasses: true
		});
	};
	
	$('.icheck').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            $(this).click();
            event.preventDefault();
            return false;
        }
	});

	$('.filter-mobile-wrapper').click(function() {
		$('.options-container').toggleClass('d-block');
		$('.grey-overlay').toggleClass('d-block');
		$(this).find($('.mobile-filter-arrows-wrapper')).toggleClass('rotate');
		$(".filter-mobile-container").toggleClass('border-b');
	});
});
