require('../common/common');
var stickybits = require('stickybits');

$(document).ready(function() {

	var width = $( window ).width();
  	if(width > 992){
		stickybits.default('.options-container', { 
			useStickyClasses: true,
			customVerticalPosition: true,
			//stickyBitStickyOffset: 20,
			verticalPosition: 'top' 
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

	$('.select-all-checkbox').on('change', function() {
		if (this.checked) {
			$('input[type=checkbox]').not(this).not($('input[disabled]')).prop('checked', true);
		} else {
			$('input[type=checkbox]').prop('checked', false);
		}      
	});

	$('input.example').on('change', function() {
	     
	});

	$('.search-for-others .filter-mobile-wrapper').click(function() {
		$('.options-container').toggleClass('d-block');
		$('.grey-overlay').toggleClass('d-block');
		//$(this).parent().toggleClass('add-border');
		$(this).find($('.mobile-filter-arrows-wrapper')).toggleClass('rotate');
		//$(".facet").css("margin-top", "90px");
		//$('.mobile-filter-arrows-wrapper').hasClass('rotate');
	});
});