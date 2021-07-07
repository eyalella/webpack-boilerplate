require('../common/common');

$(document).ready(function() {

    if(!$(".forgot-password-c").length){
        return;
    }

    var passwordInputs = [
        {
            input: '#inputPassword',
            inactiveEye: '#showPasswordEye',
            activeEye: '#showPasswordEyeShow'
        },
        {
            input: '#inputPasswordConfirm',
            inactiveEye: '#showPasswordEyeConfirm',
            activeEye: '#showPasswordEyeConfirmShow'
        }
    ]

    $('#inputPassword').keyup(function() {
        //debugger
        if( $(this).val().length === 0 ) {
            $('html').find($('.password-placeholder')).show();
        } else {
            $('html').find($('.password-placeholder')).hide(); 
        }
    });

    $('#inputPasswordConfirm').keyup(function() {
        //debugger
        if( $(this).val().length === 0 ) {
            $('html').find($('.password-confirm-placeholder')).show();
        } else {
            $('html').find($('.password-confirm-placeholder')).hide(); 
        }
    });

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
            $(window).keydown(function(event){
                if(event.keyCode == 13) {
                    event.preventDefault();
                    return false;
                    event.returnValue = false;
                }
            });
        });

        input.focusin(function() {
            $('#hint').show();
        }).focusout(function () {
            $('#hint').hide();
        });

    //  $('#inputPassword').on('change', function () {
    //     var inputVal = $('#inputPassword').val();
    //     var inputLength = inputVal.length()
 
    //     if (inputLength > 0) {
    //         debugger
    //         $('html').find($('.password-placeholder')).hide();
    //     } else {
    //         $('html').find($('.password-placeholder')).show();
    //     }
    // })
    });
});




	