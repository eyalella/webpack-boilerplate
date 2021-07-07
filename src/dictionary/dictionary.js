var Handlebars = require('handlebars');
require('../common/common')

$(document).ready(function () {

    $('.dictionary-body .collapse-button').on('click', function () {
        if ($(this).hasClass('collapse-button-open')) {
            $('.collapse').collapse('show');
        } else if ($(this).hasClass('collapse-button-close')) {
            $('.collapse').collapse('hide');
        }
    });

    // $('.dictionary-body .collapse-button').on('click', function() {
    //     $(this).toggleClass('button-active'); 
    // });

    // Show all the expressions which belong to the first available letter
    //var firstLetter = $('.expression-container').first().data('letter')
    $(".expression-container").show()

    // Highlight the first letter
    //$('.alphabet-item').first().addClass('active')

    // Highlight the first letter
    //$('.alphabet-mobile ul .alphabet-item').addClass('active')

    $('.alphabet-item').on('click', function () {
        $('.expression-container').hide();
        var letter = $(this).data('letter');
        $(`.expression-container[data-letter=${letter}]`).show();
        $('.alphabet-item').removeClass('active');
        $(this).addClass('active');
        $('.collapse-button-show-all').removeClass('button-active');
    });

    $('.collapse-button-show-all').on('click', function () {
        $('.expression-container').show();
        $('.alphabet-item.active').removeClass('active');
        $(this).addClass('button-active');
    });

    $('.alphabet-item').keydown(function (e) {
        var key = e.which;
        if (key == 13) {
            $(this).click();
            return false;
        }
    });
});