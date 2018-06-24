require('../common/common');

$(document).ready(function() {
    if(!$(".registration").length){
        return;
    }
    
    var result = window.location.hash.slice(1)
    
    if (result === 'fail') {
        $('#modalFail').modal('toggle')
    } else if (result === 'success') {
        $('#modalSuccess').modal('toggle')
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

    passwordInputs.map(function (pwdBundle) {
        var input = $(pwdBundle.input)

        $(pwdBundle.inactiveEye).on('click', function () {
            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
                $(this).toggleClass('d-none');
                $('html').find($(pwdBundle.activeEye)).toggleClass('d-none');
            } else {
                input.attr('type', 'password');
            }
        })

        $(pwdBundle.activeEye).on('click', function() {
            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
            } else {
                input.attr('type', 'password');
            }
    
            $('html').find($(pwdBundle.inactiveEye)).toggleClass('d-none');
            $(this).toggleClass('d-none');
        });

        input.focusin(function() {
            $('.hint').show();
        }).focusout(function () {
            $('.hint').hide();
        });
    })
});

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}