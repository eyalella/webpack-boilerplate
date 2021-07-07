require('../common/common');

$(document).ready(function() {

    var passwordInputs = [
        {
            input: '#inputPasswordAcc',
            inactiveEye: '#showPasswordEye',
            activeEye: '#showPasswordEyeShow'
        },
        {
            input: '#inputPasswordConfirmAcc',
            inactiveEye: '#showPasswordEyeConfirm',
            activeEye: '#showPasswordEyeConfirmShow'
        }
    ]

    passwordInputs.map(function (pwdBundle) {
        var input = $(pwdBundle.input)

        $(pwdBundle.inactiveEye).on('click keyup', function (e) {
            if (e.keyCode && e.keyCode !== 13) {
                return;
            }
            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
                $(this).toggleClass('d-none');
                $('html').find($(pwdBundle.activeEye)).toggleClass('d-none');
            } else {
                input.attr('type', 'password');
            }
        })

        $(pwdBundle.activeEye).on('click keyup', function(e) {
            if (e.keyCode && e.keyCode !== 13) {
                return;
            }
            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
            } else {
                input.attr('type', 'password');
            }
    
            $('html').find($(pwdBundle.inactiveEye)).toggleClass('d-none');
            $(this).toggleClass('d-none');
        });

        input.focusin(function() {
            $('#hint').show();
        }).focusout(function () {
            $('#hint').hide();
        });
    });

    $("#activeAccount").on('click', function(){
        $("html").find($(".input-first-label")).toggleClass("input-first-label-active");
        $("html").find($(".input-label-active-wrapper")).toggleClass("d-none");
        $("html").find($(".input-label-not-active-wrapper")).toggleClass("d-none");
        // isChecked = $('#activeAccount').is(':checked');

        // if (isChecked === "true") {
        //     $("html").find($(".input-first-label")).addClass("background-color");
        // } else {
        //     input.attr("type", "password");
        // }
    });

    $('#activeAccount').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            $('input[name= check]').click();
            event.preventDefault();
            return false;
        }
    });  

    // $( document ).on( 'keydown', function(e) {
    //     if ( e.keyCode === 27 ) { // ESC
    //          $('.main-nav-item-dropdown').removeClass('focus');
    //     }
    // }); 
});



    



