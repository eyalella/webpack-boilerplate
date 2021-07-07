require('./header/header');

$(document).ready(function() {
    $("#mainMobileNavTrigger").off("click.toggleMenu").on("click.toggleMenu", function() {
        $("body").toggleClass("mobile-menu-open");
        $(".navbar-nav .nav-item").first().attr('tabindex',0).focus();
    })

    // $("#mainMobileNavTrigger").off("click.toggleMenu").on("click.toggleMenu", function() {

    // })

    $('.lng-btn.dropdown-toggle').dropdown();
    $('.input-toggle.dropdown-toggle').dropdown();
    $('.nav-toggle.dropdown-toggle').dropdown();

    $('.main-menu-mobile-container .nav-item').off("click.toggleNavItem").on("click.toggleNavItem", function(e) {
       this.classList.toggle("open");
    });

    // mobile tab navigation
    
    if ($(window).width() < 992) {
        $(document).on('focusin', function() {
            $('.main-menu-mobile-container .navbar-nav.open').removeClass('open');
        });
        $('.main-menu-mobile-container .navbar-nav .main-nav-item-dropdown a').focus(function() {
            $('.main-menu-mobile-container .navbar-nav .open').removeClass('open');
            $(this).parents('.nav-item').addClass('open')
        })
    }
 

    // $('.password-eye').keypress(function (e) {
    //     var key = e.which;
    //     if (key == 13) {
    //         $(this).click();
    //         return false;
    //     }
    // });

    //var listItem = $('.list-item')
    
    //$(".footer-nav > a li")

    function footerFunc (){

      let lastElement = false;
      let navItemLength = $('.footer-nav li a');

      $('.footer-nav > li').each(function() {
        //debugger
          if (lastElement && lastElement.offset().top != $(this).offset().top) {
              lastElement.addClass('last-in-line');
          }

          lastElement = $(this);

      }).last().addClass('last-in-line');
    }

    setTimeout(footerFunc, 50);
});


$(document).on('focusin', function() {
    $('.focus').removeClass('focus');
});

$('.main-nav-wrapper .main-nav-item-dropdown a').focus(function() {
    $('.focus').removeClass('focus');
    $(this).parent('.main-nav-item-dropdown').addClass('focus')
})



function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      // If first entry with this name
      if (typeof query_string[key] === "undefined") {
        query_string[key] = decodeURIComponent(value);
        // If second entry with this name
      } else if (typeof query_string[key] === "string") {
        var arr = [query_string[key], decodeURIComponent(value)];
        query_string[key] = arr;
        // If third or later entry with this name
      } else {
        query_string[key].push(decodeURIComponent(value));
      }
    }
    return query_string;
}

module.exports = {
    parse_query_string: parse_query_string
}