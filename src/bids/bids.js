require("../common/common");

$(document).ready(function() {
  new Swiper(".swiper-container.related-documents-swiper", {
    spaceBetween: 10,
    speed: 1000,
    slidesPerView: "auto",

    pagination: {
      el: ".related-document-pagination.swiper-pagination",
      clickable: true
    }
  });

  $(".swiper-container")
    .not(".related-documents-swiper")
    .not(".related-bids-swiper")
    .each(function() {
      new Swiper(this, {
        slidesPerView: "auto",
        slidesOffsetBefore: "-45",
        loop: true,
        spaceBetween: 10,
        breakpoints: {
          3000: {
            spaceBetween: 15
          },
          992: {
            spaceBetween: 10,
            slidesOffsetBefore: "0"
          }
        },
        pagination: {
          el: $(this).siblings(".swiper-pagination"),
          clickable: true
        },
        navigation: {
          nextEl: $(this).siblings(".swiper-button-prev"),
          prevEl: $(this).siblings(".swiper-button-next")
        }
      });
    });

  new Swiper(".swiper-container.related-bids-swiper", {
    spaceBetween: 10,
    direction: "horizontal",
    loop: true,
    //speed: 1000,
    slidesPerView: "auto",
    slidesOffsetBefore: "20",

    pagination: {
      el: ".related-bids-pagination.swiper-pagination",
      clickable: true
    }
  });

  $(".related-documents-container-close").click(function() {
    $(".related-documents-container").toggleClass("hidden border");
    $(this).toggleClass("border-none");
    $(this)
      .find($(".grey-arrow"))
      .toggleClass("rotate");
  });

  $(".winning-bidders-container-close").click(function() {
    $(".winning-bidders-main-container").toggleClass("hidden");
    $(this).toggleClass("border-none");
    $(this)
      .find($(".grey-arrow"))
      .toggleClass("rotate");
  });

  $(".subjects-container-close").click(function() {
    var subject = $(".subject-wrapper");

    $(".subjects-container").toggleClass("d-flex");
    $(this).toggleClass("border-none");
    $(this)
      .find($(".grey-arrow"))
      .toggleClass("rotate");
  });

  $(".subjects-container-close").one('click', function(e){
    e.preventDefault();
    $(".subject-wrapper").each(function() {
      var $this = $(this);
      var nextItem = $this.next();

      if ($this.innerWidth() > 165) {
        $this.addClass("w-100");
      } else if ($this.innerWidth() <= 165 && nextItem.innerWidth() <= 165) {
        //$this.css("margin", "0 0 5px 5px");
        $this.addClass("add-margin");
      } else if ($this.hasClass("add-margin")){
        return;
      } else {
        return;
      }
    }); 
  });

  // $(".subject-wrapper").each(function() {
  //   if ($(this).innerWidth() > 190){
  //     $(this).addClass("w-100");
  //   }
  // });  

  $(".related-bids-container-close").click(function() {
    $(".related-bids-container").toggleClass("hidden");
    $(this).toggleClass("border-none");
    $(this)
      .find($(".grey-arrow"))
      .toggleClass("rotate");
    $(".bids-footer").toggleClass("footer-border");
    $(".related-bids-main-container").toggleClass("margin-open");
  });
  var isMobile = $(window).width() < 996
  $(window).on("resize", function() {
    if ($(window).width() < 996 && !isMobile) {
      $(".winning-bidders-main-container, .related-bids-container").addClass(
        "hidden");
    }
    if ($(window).width() >= 996){
      $(".winning-bidders-main-container, .related-bids-container").removeClass(
        "hidden");
    }
    isMobile = $(window).width() < 996;
  });

  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww > 992) {
      $(".winning-bidders-main-container").removeClass("hidden");
      $(".subjects-container").removeClass("d-none");
    } else if (ww <= 992) {
      $(".subjects-container").addClass("d-none");
    }
  };
});
