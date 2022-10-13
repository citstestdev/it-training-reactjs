$(window).on("load", function () {
  // $("#root").fadeOut("fast");
  $("#loadingdiv").show();
});

// $(document).ready(function () {
$(window).on("load", function () {
  // alert("jjassjj");
  // Wow Animation
  new WOW().init();
  setTimeout(function () {
    // $("#root").fadeIn();
    $("#loadingdiv").hide();
    $("#rootdiv").css("display", "block");
  }, 2500);

  setTimeout(function () {
    $(".student-placed-slider").bxSlider({
      slideWidth: 644,
      adaptiveHeight: "true",
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      controls: false,
    });
  }, 3500);
  // Explore categories slider
  var exploreMinSlide, exploreMaxSlide, exploreSlideWidth, exploreSlideMargin;
  function windowWidthExplore() {
    if ($(window).width() >= 1200 && $(window).width() <= 1400) {
      exploreMinSlide = 4;
      exploreMaxSlide = 4;
      exploreSlideWidth = 100;
      exploreSlideMargin = 36;
    } else if ($(window).width() >= 980 && $(window).width() <= 1199) {
      exploreMinSlide = 3;
      exploreMaxSlide = 3;
      exploreSlideWidth = 70;
      exploreSlideMargin = 36;
    } else if ($(window).width() >= 568 && $(window).width() <= 979) {
      exploreMinSlide = 2;
      exploreMaxSlide = 2;
      exploreSlideWidth = 150;
      exploreSlideMargin = 36;
    } else if ($(window).width() >= 320 && $(window).width() <= 567) {
      exploreMinSlide = 1;
      exploreMaxSlide = 1;
      exploreSlideWidth = 150;
      exploreSlideMargin = 36;
    } else {
      // alert("hd");
      exploreMinSlide = 5;
      exploreMaxSlide = 5;
      exploreSlideWidth = 150;
      exploreSlideMargin = 46;
    }
  }
  windowWidthExplore();
  setTimeout(function () {
    $(".explore-categories-slider").bxSlider({
      slideWidth: exploreSlideWidth,
      slideMargin: exploreSlideMargin,
      minSlides: exploreMinSlide,
      maxSlides: exploreMaxSlide,
      moveSlides: 1,
      pager: false,
      nextText: "<img src = 'assets/images/exolore-slider-next.svg'",
      prevText: "<img src = 'assets/images/exolore-slider-prev.svg'",
    });
  }, 3500);
  // our achievement counter
  var counted = 0;
  $(window).scroll(function () {
    if ($(".our-achievement-counter-blk").length) {
      var oTop =
        $(".our-achievement-counter-blk").offset().top - window.innerHeight;
    }
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      counted = 1;
    }
    //Back to top
    $(".back-to-top").click(function () {
      $(document).scrollTop(0);
    });
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
    // Fixed Header
    var currentWindowWidth = $(document).width();
    if (currentWindowWidth > 768) {
      $(".header-botttom").removeClass("fixed-header");
      if ($(document).scrollTop() > 100) {
        $(".header-botttom").addClass("fixed-header");
      } else {
        $(".header-botttom").removeClass("fixed-header");
      }
    }
    // Function for element in viewport
    $.fn.isInViewport = function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    // Back to top color change
    if ($(".footer-bottom").isInViewport()) {
      $(".back-to-top h4").css("color", "#ffffff");
    } else {
      $(".back-to-top h4").css("color", "#000000");
    }
  });
  //Video Popup
  setTimeout(function () {
    var popupwr = $(".popup-bg-wr");
    var popupOverlay = $(".popup-content");
    var popupVideo = $(".popup-video");
    var popupClose = $(".close-btn");
    var videoPlayBtn = $(".student-placed-play-btn");
    $(popupClose).on("click", function () {
      $(popupwr).css({ display: "none" });
      $(popupOverlay).fadeOut();
      $(".popup-video iframe").attr(
        "src",
        $(".popup-video iframe").attr("src", " ")
      );
      $(".video-block").get(0).pause();
      $("body").css({ overflow: "visible" });
    });
    $(".popup-bg-wr").on("click", function () {
      popupwr.fadeOut();
      $(popupOverlay).fadeOut();
      $(".popup-video iframe").attr(
        "src",
        $(".popup-video iframe").attr("src", " ")
      );
      if ($(".video-block").length) {
        $(".video-block").get(0).pause();
      }
      $("body").css({ overflow: "visible" });
    });
    videoPlayBtn.on("click", function () {
      $(popupwr).css({ display: "block" });
      $(popupOverlay).fadeIn();
      var data_target = $(this).attr("data-target");
      var data_v_id = $(this).attr("data-v-id");
      $(".popup-content").fadeIn();

      $("body").css({ overflow: "hidden" });

      if (data_target == "unknown") {
        $(".video-block").show();
        $(".popup-video iframe").hide();
        $(".popup-video iframe").attr("src", "");
        $(".video-block").attr("src", data_v_id);
        $(".video-block").get(0).currentTime = 0;
        $(".video-block").get(0).play();
      } else {
        data_v_id = data_v_id + "?autoplay=1";
        $(".video-block").get(0).pause();
        $(".video-block").hide();
        $(".popup-video iframe").show();
        $(".popup-video iframe").attr("src", data_v_id);
        $(".video-block").attr("src", data_v_id);
      }
    });

    $(".get-enquiry").click(function () {
      $(".popup-form").fadeIn();
      popupwr.fadeIn();
      $("body").css("overflow", "hidden");
    });
    popupwr.click(function () {
      $(".popup-form").fadeOut();
      $(this).fadeOut();
      $("body").css("overflow", "visible");
    });
    $(".popup-form-cross-btn").click(function () {
      $(".popup-form").fadeOut();
      popupwr.fadeOut();
      $("body").css("overflow", "visible");
    });
  }, 3500);

  // Courses Slider
  var minSlide, maxSlide, slideWidth, slideMargin;
  function windowWidth() {
    if ($(window).width() >= 980 && $(window).width() <= 1023) {
      minSlide = 2;
      maxSlide = 2;
      slideWidth = 200;
      slideMargin = 40;
    } else if ($(window).width() >= 768 && $(window).width() <= 979) {
      minSlide = 2;
      maxSlide = 2;
      slideWidth = 100;
      slideMargin = 40;
    } else if ($(window).width() >= 320 && $(window).width() <= 767) {
      minSlide = 1;
      maxSlide = 1;
      slideWidth = 200;
      slideMargin = 30;
    }
  }
  windowWidth();
  var currentWindowWidth = $(window).width();
  if (currentWindowWidth < 1023) {
    $(".courses-slider").bxSlider({
      pager: false,
      minSlides: minSlide,
      maxSlides: maxSlide,
      slideWidth: slideWidth,
      slideMargin: slideMargin,
      moveSlides: 1,
      abdptiveHeight: true,
      prevText: '<img src="assets/images/exolore-slider-prev.svg">',
      nextText: '<img src="assets/images/exolore-slider-next.svg">',
    });
  }

  setTimeout(function () {
    $(window).on("resize", function () {
      windowWidth();
      windowWidthPartners();
      windowWidthExplore();
    });
  }, 3500);
  // Job Program Tabber
  $(".tabber-mob-view ul li a").click(function () {
    $(".tabber-mob-view ul li a").removeClass("hover-active");
    $(this).addClass("hover-active");

    $(".job-program-tabber").click(function () {
      var value = $(this).attr("data-filter");

      if (value == "all") {
        $(".job-program-box").show();
      } else {
        $(".job-program-box")
          .not("." + value)
          .hide();
        $(".job-program-box")
          .filter("." + value)
          .show();
      }
    });
  });
  $(".slicknav_btn").click(function () {
    console.log("slicknav btn click");
    $(".header-top-content").slideUp(100);
  });
  $(".top-checklist-icon").click(function () {
    $(".header-top-content").slideToggle(200);
    $(".slicknav_menu ul").slideUp();
  });
  $(function () {
    $(".menu").slicknav({
      appendTo: ".header-botttom",
      label: "",
    });
  });
  $(".slicknav_menu a").focusout(function (event) {
    $(this).slicknav("close");
  });
});

$(window).on("load", function () {
  setTimeout(function () {
    var windowWidth = $(window).width();
    if (windowWidth > 1024) {
      //Testimonils Masonary
      if ($(".testimonials-all-cards").length) {
        $(".testimonials-all-cards").masonry({
          itemSelector: ".testimonials-card",
          gutter: 36,
          horizontalOrder: true,
        });
      }
    }
  }, 3500);
});

// Courses Grid List View
setTimeout(function () {
  $(".courses-grid-img").click(function () {
    // alert("public");
    $(".list-view-blk").fadeOut();
    $(".grid-view-blk").fadeIn();
    $(this).find("img").attr("src", "assets/images/course-grid-image.svg");
    $(this).addClass("course-grid-list-img active");
    $(".course-download-img").removeClass("course-grid-img active");
    $(".course-download-img")
      .find("img")
      .attr("src", "assets/images/filter-download.svg");
  });
  $(".course-download-img").click(function () {
    $(".list-view-blk").fadeIn();
    $(".grid-view-blk").fadeOut();
    $(this).find("img").attr("src", "assets/images/filter-download-white.svg");
    $(this).addClass("course-grid-list-img active");
    $(".courses-grid-img").removeClass("course-grid-img active");
    $(".courses-grid-img")
      .find("img")
      .attr("src", "assets/images/course-grid-image-blue.svg");
  });
}, 3500);

var minSlidePartners, maxSlidePartners;
function windowWidthPartners() {
  if ($(window).width() >= 980 && $(window).width() <= 1023) {
    minSlidePartners = 6;
    maxSlidePartners = 6;
  } else if ($(window).width() >= 650 && $(window).width() <= 979) {
    minSlidePartners = 5;
    maxSlidePartners = 5;
  } else if ($(window).width() >= 568 && $(window).width() <= 649) {
    minSlidePartners = 4;
    maxSlidePartners = 4;
  } else if ($(window).width() >= 375 && $(window).width() <= 567) {
    minSlidePartners = 3;
    maxSlidePartners = 3;
  } else if ($(window).width() >= 320 && $(window).width() <= 374) {
    minSlidePartners = 2;
    maxSlidePartners = 2;
  } else {
    minSlidePartners = 6;
    maxSlidePartners = 6;
  }
}
windowWidthPartners();
setTimeout(function () {
  $(".about-our-partners-slider").bxSlider({
    slideWidth: 178,
    minSlides: minSlidePartners,
    maxSlides: maxSlidePartners,
    moveSlides: 1,
    pager: false,
    controls: false,
    auto: true,
    pause: 2000,
  });
}, 3500);

setTimeout(function () {
  // alert("ddd");
  $(".our-alumni-slider").bxSlider({
    mode: "fade",
    slideWidth: 197,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    pager: false,
    nextText: "<img src = 'assets/images/our-alumni-slider-next.svg'",
    prevText: "<img src = 'assets/images/our-alumni-slider-prev.svg'",
  });
}, 3500);
setTimeout(function () {
  var url = window.location.pathname;

  var domain = url
    .replace("http://", "")
    .replace("https://", "")
    .split(/[/?#]/)[1];

  // alert(domain);
  $("#pagefevtitle").html("it-training/" + domain.toLowerCase());
  if (domain === "courses") {
    $("#courses").addClass("active");
  }
  if (domain === "blogsingle") {
    $("#blog").addClass("active");
  }

  urlRegExp = new RegExp(url.replace(/\/$/, "") + "$");
  // alert(urlRegExp);
  $(".menu li a ").each(function () {
    if (urlRegExp.test(this.href.replace(/\/$/, ""))) {
      // alert(this);
      $(this).addClass("active");
    }
  });
  // }
}, 1500);

setTimeout(function () {
  // Course Accordion
  $(".course-accordion-btn").click(function () {
    $(this).next(".course-accordion-content").slideToggle();
    $(this)
      .parent(".course-accordion-section")
      .siblings()
      .find(".course-accordion-content")
      .slideUp();
    $(this).find(".course-accordion-icon").toggleClass("rotate-accordion-icon");
    $(this)
      .parents(".course-accordion-section")
      .siblings()
      .find(".course-accordion-icon")
      .removeClass("rotate-accordion-icon");
  });
}, 3500);

// const viewFullScreen = (e) => {
//   e.preventDefault();
//   // setTimeout(function () {
//   var fullimage = document.getElementById(`full-image`);
//   fullimage.src = e.target.src;
//   var x = document.getElementById(`image-viewer`);
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
//   // }, 2000);
// };

// const viewDisplayScreen = (e) => {
//   e.preventDefault();
//   var x = document.getElementById(`image-viewer`);
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };
