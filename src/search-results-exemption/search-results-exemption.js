
var Pikaday = require('pikaday');
require('pikaday/scss/pikaday.scss');
require('../common/common');

$(document).ready(function() {

	$('.close-filter-container').click(function() {
		$(this).next().toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate'); 
	});

	$('.filter-mobile-wrapper').click(function() {
		$('.search-results-filter-container').toggleClass('d-none');
		$('.search-results-content').toggleClass('d-none');
	});

 
	$('.datepicker').each(function() {
	    $(this).data('pikaday', new Pikaday({ field: this }));
	});

	$(".close-filter-container").keyup(function(event) {
	    if (event.keyCode === 13) {
	        $(this).click();
	    }
	});

	$('.icheck').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            $(this).click();
            event.preventDefault();
            return false;
        }
    });
});