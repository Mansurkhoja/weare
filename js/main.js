"use strict";

var ls = localStorage.getItem("namespace.visited");

if (ls == null) {
  $(window).on("load", function () {
    // $(".main__inner").addClass("active");
    // $(".loader").delay(4700).fadeOut();
    setInterval(function () {
      $(".loader").remove();
      $(".main__inner").addClass("active");
    }, 4500);
  });
  localStorage.setItem("namespace.visited", 1);
} else {
  $(".loader").remove();
} // for svg support


svg4everybody();
$(document).ready(function () {
  $(".header__lang-item").on("click", function () {
    if (!$(this).hasClass("active")) {
      $(".header__lang-item").removeClass("active");
      $(this).addClass("active");
    }
  });
  $(".navbar__link").on("click", function () {
    menuBtn.removeClass("active");
    $(".menu").removeClass("active");
    $(".header__inner").removeClass("active");
    $(".header").removeClass("active");
  });
  $(".tecnology__arrow").click(function () {
    if (!$(this).hasClass("disable")) {
      $(".tecnology__arrow").removeClass("disable");
      $(this).addClass("disable");
      $(".technology__item").toggleClass("hide");
    }
  });
  menuBtn.on("click", function () {
    $(".header").removeClass("consult-active");
    menuBtn.toggleClass("active");
    $(".menu").toggleClass("active");
    $(".header").toggleClass("active");
    $(".header__inner").toggleClass("active");
    btnConsult.removeClass("disabled");
    $(".consult").removeClass("active");
    $(".header__inner").removeClass("consult-active");
  });
  goBtnDown.on("click", function () {
    indexFullpage.moveSectionDown();
  });
  goBtnTop.on("click", function () {
    indexFullpage.moveTo(1);
  });
  btnConsult.click(function () {
    btnConsult.addClass("disabled");
    $(".consult").addClass("active");
    $(".header__inner").addClass("consult-active");
    $(".header").addClass("consult-active");
    menuBtn.removeClass("active");
    $(".menu").removeClass("active");
    $(".header__inner").removeClass("active");
  });
  $(".consult__close .btn--go-back").click(consultClose);
  $(".btn-consult-close").click(consultClose); //validation

  nameInput.blur(function () {
    if (!$(this).val() == "") {
      $(this).removeClass("invalid");
      $(this).addClass("valid");
    } else {
      $(this).removeClass("valid");
      $(this).addClass("invalid");
    }
  });
  emailInput.blur(function () {
    validateRegex($(this), /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  });
  telInput.blur(function () {
    validateRegex($(this), /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm);
  }); //move with mouse vr
  // mainImg.mousemove(function (e) {
  //   var x = e.pageX - this.offsetLeft;
  //   var y = e.pageY - this.offsetTop;
  //   var s = this.clientWidth / 2;
  //   var ss = this.clientHeight / 2;
  //   $(".main__img-inner").css(
  //     "transform",
  //     `translate(${x - s}px, ${y - ss}px)`
  //   );
  // });
  // mainImg.on("touchend click", function () {
  //   $(".main__img-inner").css("transform", `translate(${0}px, ${0}px)`);
  // });
  // mainImg.mouseleave(function () {
  //   $(".main__img-inner").css("transform", `translate(${0}px, ${0}px)`);
  // });
  // $(".slide-arrow-prev").on("click", function () {
  //   fullpage_api.moveSlideLeft();
  // });
  // $(".slide-arrow-next").on("click", function () {
  //   fullpage_api.moveSlideRight();
  // });

  $(".video-opener").click(function (e) {
    e.preventDefault();
    $(".video-popup").fadeToggle();
  });
  $(".video-popup-close").click(function () {
    $(".video-popup").fadeToggle();
  });
  zoomImgOpen.click(function () {
    var certificateImg = $(this).find("img").attr("src");
    zoomImg.css("background-image", "url" + "(" + certificateImg + ")");
    zoomImg.fadeIn();
  });
  zoomImg.click(function () {
    zoomImg.fadeOut();
  });
  blogBtns.click(function () {
    blogBtns.removeClass("active");
    $(this).addClass("active");
    var blogBtn = $(this).data("blog");

    if (blogBtn == "all") {
      blogCategories.show();
      blogSwiper.update();
    } else {
      blogCategories.each(function () {
        var blogcategory = $(this).data("blogcat");

        if (blogcategory != blogBtn) {
          $(this).hide();
          blogSwiper.update();
        } else {
          $(this).show();
          blogSwiper.update();
        }
      });
    }
  });
  $(".service-solve__question").click(function () {
    if ($(window).width() > 1200) {
      $(".service-solve__item").removeClass("active");
      $(this).parent().addClass("active");
    } else {
      $(this).parent().toggleClass("active");
    }
  });
});

function consultClose(e) {
  e.preventDefault();
  btnConsult.removeClass("disabled");
  $(".consult").removeClass("active");
  $(".header__inner").removeClass("consult-active");
  $(".header").removeClass("consult-active");
}

function validateRegex(el, regex) {
  var value = el.val();

  if (regex.test(value)) {
    el.removeClass("invalid");
    el.addClass("valid");
  } else {
    el.removeClass("valid");
    el.addClass("invalid");
  }
}

var emailInput = $(".email"),
    nameInput = $(".name"),
    telInput = $(".tel");
var menuBtn = $(".header__menu"),
    goBtnDown = $(".go-btn-down"),
    goBtnTop = $(".go-btn-top"),
    btnConsult = $(".btn--consult"); // var mainImg = $(".main__img");

var zoomImg = $(".zoom-img"),
    zoomImgOpen = $(".zoom-img-open");
var blogBtns = $("[data-blog]"),
    blogCategories = $("[data-blogcat]"); //swipers

if (document.querySelector(".portfolio-swiper")) {
  var portfolioSwiper = new Swiper(".portfolio-swiper", {
    resizeObserver: true,
    parallax: true,
    navigation: {
      nextEl: ".slide-arrow-next",
      prevEl: ".slide-arrow-prev"
    },
    pagination: {
      el: ".counter-slide",
      type: "custom",
      renderCustom: function renderCustom(swiper, current, total) {
        return '<div class="counter-active-slide">' + ("0" + current).slice(-2) + "</div>" + '<div class="counter-total-slide">' + "/" + ("0" + total).slice(-2) + "</div>";
      }
    }
  });
}

if (document.querySelector(".certificates-swiper")) {
  var certificatesSwiper = new Swiper(".certificates-swiper", {
    resizeObserver: true,
    preloadImages: false,
    lazy: true,
    observeParents: true,
    observeSlideChildren: true,
    observer: true,
    // initialSlide: 2,
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: ".slide-arrow-next",
      prevEl: ".slide-arrow-prev"
    },
    pagination: {
      el: ".counter-slide",
      type: "custom",
      renderCustom: function renderCustom(swiper, current, total) {
        return '<div class="counter-active-slide">' + ("0" + current).slice(-2) + "</div>" + '<div class="counter-total-slide">' + "/" + ("0" + total).slice(-2) + "</div>";
      }
    }
  });
}

if (document.querySelector(".team-swiper")) {
  var teamSwiper = new Swiper(".team-swiper", {
    resizeObserver: true,
    spaceBetween: 50,
    slidesPerView: "auto",
    //slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    // centerInsufficientSlides
    // parallax: true,
    navigation: {
      nextEl: ".slide-arrow-next",
      prevEl: ".slide-arrow-prev"
    },
    pagination: {
      el: ".counter-slide",
      type: "custom",
      renderCustom: function renderCustom(swiper, current, total) {
        return '<div class="counter-active-slide">' + ("0" + current).slice(-2) + "</div>" + '<div class="counter-total-slide">' + "/" + ("0" + total).slice(-2) + "</div>";
      }
    }
  });
}

if (document.querySelector(".reviews-swiper")) {
  var reviewsSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    loop: true,
    // centeredSlides: true,
    breakpoints: {
      767: {
        // parallax: true,
        // centerInsufficientSlides: true,
        slidesPerView: 1 // centeredSlides: true,

      },
      1200: {
        slidesPerView: "auto" //spaceBetween: 40,

      }
    },
    navigation: {
      nextEl: ".slide-arrow-next",
      prevEl: ".slide-arrow-prev"
    },
    pagination: {
      el: ".counter-slide",
      type: "custom",
      renderCustom: function renderCustom(swiper, current, total) {
        return '<div class="counter-active-slide">' + ("0" + current).slice(-2) + "</div>" + '<div class="counter-total-slide">' + "/" + ("0" + total).slice(-2) + "</div>";
      }
    }
  });
}

if (document.querySelector(".blog-swiper")) {
  var blogSwiper = new Swiper(".blog-swiper", {
    resizeObserver: true,
    slidesPerView: 1,
    slidesPerColumn: 3,
    slidesPerGroup: 1,
    slidesPerColumnFill: "row",
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    slidesPerGroupSkip: 1,
    breakpoints: {
      767: {
        slidesPerView: 2,
        slidesPerColumnFill: "column",
        slidesPerColumn: 1
      },
      1200: {
        slidesPerView: 3.5,
        slidesPerColumnFill: "column",
        slidesPerColumn: 1
      }
    },
    navigation: {
      nextEl: ".slide-arrow-next",
      prevEl: ".slide-arrow-prev"
    },
    pagination: {
      el: ".counter-slide",
      type: "custom",
      renderCustom: function renderCustom(swiper, current, total) {
        return '<div class="counter-active-slide">' + ("0" + current).slice(-2) + "</div>" + '<div class="counter-total-slide">' + "/" + ("0" + total).slice(-2) + "</div>";
      }
    }
  });
}

if (document.querySelector(".blog__category")) {
  var blogBtnSwiper = new Swiper(".blog__category", {
    resizeObserver: true,
    slidesPerView: "auto",
    spaceBetween: 8,
    breakpoints: {
      767: {
        spaceBetween: 16
      }
    }
  });
} //fulpages


if (document.querySelector("#sections")) {
  var indexFullpage = new fullpage("#sections", {
    licenseKey: "F8E9771B-CF224720-A8C858C5-DE2106A1",
    //Navigation
    menu: "#asideNav, .navbar__list",
    lockAnchors: false,
    anchors: ["main", "technology", "services", "portfolio", "about", "certificates", "team", "reviews", "blog", "contacts"],
    navigation: false,
    navigationPosition: "right",
    navigationTooltips: ["main", "technology", "services", "portfolio", "about", "certificates", "team", "reviews", "blog", "contacts"],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: "bottom",
    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: ".unscroll, .form-label",
    scrollOverflow: true,
    scrollOverflowReset: true,
    scrollOverflowOptions: {
      click: true
    },
    touchSensitivity: 15,
    bigSectionsDestination: null,
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    //Design
    controlArrows: false,
    verticalCentered: true,
    //sectionsColor : ['#ccc', '#ccc','#ccc', '#ccc','#ccc', '#ccc','#ccc', '#ccc','#ccc', '#ccc'],
    //	paddingTop: '3em',
    //	paddingBottom: '10px',
    //fixedElements: '.header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {
      type: "reveal",
      percentage: 62,
      property: "translate"
    },
    dropEffect: false,
    dropEffectOptions: {
      speed: 2300,
      color: "#F82F4D",
      zIndex: 9990
    },
    cards: false,
    cardsOptions: {
      perspective: 100,
      fadeContent: true,
      fadeBackground: true
    },
    //Custom selectors
    sectionSelector: ".section",
    slideSelector: ".slide",
    lazyLoading: true,
    //events
    onLeave: function onLeave(index, destination, direction) {
      if (destination.isLast) {
        goBtnDown.hide();
        goBtnTop.addClass("active");
      } else {
        goBtnDown.show();
        goBtnTop.removeClass("active");
      } // var section = $(".section.active"),
      //   counterActive = section
      //     .find(".counter-slide")
      //     .find(".counter-active-slide"),
      //   counterLast = section.find(".counter-slide").find(".counter-total-slide"),
      //   lastSlide = section.find(".slide.fp-slide").last().attr("data-anchor"),
      //   activeSlide = section.find(".slide.fp-slide.active").attr("data-anchor");
      // counterActive.html(activeSlide);
      // counterLast.html("/" + lastSlide);

    },
    afterLoad: function afterLoad(index, nextIndex, direction) {// var section = $(".section.active"),
      //   counterActive = section
      //     .find(".counter-slide")
      //     .find(".counter-active-slide"),
      //   counterLast = section.find(".counter-slide").find(".counter-total-slide"),
      //   lastSlide = section.find(".slide.fp-slide").last().attr("data-anchor"),
      //   activeSlide = section.find(".slide.fp-slide.active").attr("data-anchor");
      // counterActive.html(activeSlide);
      // counterLast.html("/" + lastSlide);
    },
    afterRender: function afterRender() {},
    afterResize: function afterResize(width, height) {},
    afterReBuild: function afterReBuild() {},
    afterResponsive: function afterResponsive(isResponsive) {},
    afterSlideLoad: function afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {// var section = $(".section.active"),
      //   counterActive = section
      //     .find(".counter-slide")
      //     .find(".counter-active-slide"),
      //   counterLast = section.find(".counter-slide").find(".counter-total-slide"),
      //   lastSlide = section.find(".slide.fp-slide").last().attr("data-anchor"),
      //   activeSlide = section.find(".slide.fp-slide.active").attr("data-anchor");
      // counterActive.html(activeSlide);
      // counterLast.html("/" + lastSlide);
    },
    onSlideLeave: function onSlideLeave(section, origin, destination, direction) {// var section = $(".section.active"),
      //   counterActive = section
      //     .find(".counter-slide")
      //     .find(".counter-active-slide"),
      //   counterLast = section.find(".counter-slide").find(".counter-total-slide"),
      //   lastSlide = section.find(".slide.fp-slide").last().attr("data-anchor"),
      //   activeSlide = origin.anchor;
      // counterActive.html(activeSlide);
      // counterLast.html("/" + lastSlide);
    }
  });
} //service page swipers


if (document.querySelector(".full-inner-page")) {
  var breakpoint = window.matchMedia("(max-width:767px)"); // keep track of swiper instances to destroy later

  var serviceSwiper;

  var breakpointChecker = function breakpointChecker() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (serviceSwiper !== undefined) serviceSwiper.destroy(true, true); // or/and do nothing

      return; // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  var enableSwiper = function enableSwiper() {
    serviceSwiper = new Swiper(".service-container", {
      slidesPerView: 1,
      a11y: true,
      // keyboardControl: true,
      // mousewheel: true,
      simulateTouch: false,
      resizeObserver: true,
      nested: true,
      mousewheel: {
        releaseOnEdges: true
      },
      navigation: {
        nextEl: ".swiper-slide__arrow-next",
        prevEl: ".swiper-slide__arrow-prev"
      }
    });
  }; // keep an eye on viewport size changes


  breakpoint.addListener(breakpointChecker); // kickstart

  breakpointChecker();
  $(".go-next").click(function () {
    serviceSwiper.slideNext();
  }); // $(".go-back-swiper .btn").click(function (e) {
  //   e.preventDefault();
  //   serviceSwiper.slidePrev();
  // });

  if ($(window).width() >= 767) {
    $(".portfolio-gallery__container").on("mouseenter", function () {
      serviceSwiper.mousewheel.disable();
    });
    $(".portfolio-gallery__container").on("mouseleave", function () {
      serviceSwiper.mousewheel.enable();
    });
  }
}

if (document.querySelector(".service-advantage-mob")) {
  var serviceAdvantageSwiper = new Swiper(".service-advantage-mob", {
    resizeObserver: true,
    slidesPerView: 2,
    spaceBetween: 13,
    navigation: {
      nextEl: ".slide-arrow-next",
      prevEl: ".slide-arrow-prev"
    },
    pagination: {
      el: ".counter-slide",
      type: "custom",
      renderCustom: function renderCustom(swiper, current, total) {
        return '<div class="counter-active-slide">' + ("0" + current).slice(-2) + "</div>" + '<div class="counter-total-slide">' + "/" + ("0" + total).slice(-2) + "</div>";
      }
    }
  });
}

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});