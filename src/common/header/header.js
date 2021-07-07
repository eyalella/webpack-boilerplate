require('../common');

$('#inputErrorP').hide();
$(document).ready(function() {


	$(window).resize(function(){
	    if ($(window).width() <= 992){  
	        $('.logged-in-name').on('click', function () {
				$(this).next('.ent-dropdown-items-container').toggleClass('none');
				$(this).clear();
			});
	    }   
	}); 


	$('.logged-in-name').keypress(function (e) {
	  var key = e.which;
	  if (key == 13) { 
	    $('html').find('.ent-dropdown-items-container').toggleClass('none');
		$(this).clear()
	  }
	}); 

	$( document ).on( 'keydown', function(e) {
        if ( e.keyCode === 27 ) { // ESC
             $('.main-nav-item-dropdown').removeClass('focus');
        }
    });  

    $('header .nav-item:not(:last-child) .main-nav-item-link').on( 'keyup', function(e) {
		if ( e.keyCode === 27 ) { // ESC
			$(this).focusout();

			const nextItem = $(this).parents('.nav-item').next()
			if (nextItem.find('.main-nav-item-dropdown').length) {
				nextItem.find('.nav-item-text').focus();
			} else {
				nextItem.find('a').focus();
			}
        }
    });  

    function handleFirstTab(e) {
	    if (e.keyCode === 9) { // the "Tab" key
	        document.body.classList.add('user-is-tabbing');
	        window.removeEventListener('keydown', handleFirstTab);
	    }
	}

	window.addEventListener('keydown', handleFirstTab);
});



$('#searchInput').on('click', function () {
	//debugger
	var Option0 = $(".input-dropdown-defult-item");
	var mainInput = $("#mainInput");


    if (mainInput.val().length && !$('.input-toggle-select').val()) {
    	//console.log('Entered if')
        // $(".input-error-p").removeClass("d-none");
        $("#inputErrorP").show();
    } else {
        $("#inputErrorP").hide();
    }

    $('.dictionary .card-block em').parents('.collapse').collapse('show');
});

$("#mainInput").on('keyup', function (e) {
    if (e.keyCode == 13) {
        $('#searchInput').click();
    }
});


