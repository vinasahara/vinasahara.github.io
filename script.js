$(document).ready(function() {
  // Cache selectors
  const $window = $(window);
  const $navbar = $('.navbar');
  const $scrollUpBtn = $('.scroll-up-btn');
  const $menuBtn = $('.menu-btn');
  const $carousel = $('.carousel');

  // Sticky navbar on scroll script
  $window.scroll(function() {
    if ($window.scrollTop() > 20) {
      $navbar.addClass("sticky");
    } else {
      $navbar.removeClass("sticky");
    }

    // Scroll-up button show/hide script
    if ($window.scrollTop() > 500) {
      $scrollUpBtn.addClass("show");
    } else {
      $scrollUpBtn.removeClass("show");
    }
  });

  // Slide-up script
  $scrollUpBtn.click(function() {
    $('html').animate({ scrollTop: 0 });
    $('html').css("scrollBehavior", "auto");
  });

  // Toggle smooth scroll on menu items click
  $('.navbar.menu li a').click(function() {
    $('html').css("scrollBehavior", "smooth");
  });

  // Toggle menu/navbar script
  $menuBtn.click(function() {
    $navbar.toggleClass("active");
    $menuBtn.find('i').toggleClass("active");
  });

  // Typing text animation script
  const typedOptions = {
    strings: ["Lampung State Polythecnic Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  };

  new Typed(".typing", typedOptions);
  new Typed(".typing-2", typedOptions);

  // Owl carousel script
  $carousel.owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});


