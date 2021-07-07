require('../common/common');

$('#accordion .collapse-button').on('click', function () {
    var toggleClass;
    if (this.classList.contains('collapse-button-open')) {
    	$('.collapse').collapse('show');
    } else {
    	$('.collapse').collapse('hide');
    }

    if ($('.collapsed-p').attr('aria-expanded') == 'true') {
    	$('.collapse-button-open').attr('aria-expanded', 'true');
    	$('.collapse-button-close').attr('aria-expanded', 'fulse');
    } else {
    	$('.collapse-button-open').attr('aria-expanded', 'fulse');
    	$('.collapse-button-close').attr('aria-expanded', 'true');
    }
});