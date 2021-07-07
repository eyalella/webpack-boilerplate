var parse_query_string = require('../common/common').parse_query_string;

$(document).ready(function() {
    if (!$(".signin").length){
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

    // var query = window.location.search.substring(1);
    // var qs = parse_query_string(query);
    
    // if (qs.hasOwnProperty('error')) {
    //     if (qs.error === 'true') {
    //         $('#invalidModal').modal('toggle')
    //     }
    // }
    var result = window.location.hash.slice(1)
    
    if (result === 'invalid') {
        $('#invalidModal').modal('toggle')
    } else if (result === 'blocked') {
        $('#blockedModal').modal('toggle')
    }
});