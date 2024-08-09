const swiperBanner = new Swiper(".slider-banner", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  });


  $(document).on('scroll', function() {
    if ($(this).scrollTop() >= 141.61) {
      $("#fixed-menu").addClass('fixed-header-menu');
      // $("#navigation").addClass('fixed-navbar-menu');
    } else {
      $("#fixed-menu").removeClass('fixed-header-menu');
      // $("#navigation").removeClass('fixed-navbar-menu');
    }
  });
