// "use strict";

$(document).ready(function() {

  // OWL CAROUSEL BRANDS
$('.owl-carousel-brands').owlCarousel({
  items: 4,
  loop: true,
  margin: 16,
  nav: true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
  dots: false,
  responsive: {
    0: {
      items: 2
    },
    360: {
      items: 2
    },
    480: {
      items: 2
    },
    568: {
      items: 3
    },
    736: {
      items: 3
    },
    768: {
      items: 3
    },
    824: {
      items: 4
    },
    1024: {
      items: 4
    },
    1366: {
      items: 6
    }
  }
});
// FIN OWL CAROUSEL BRANDS

});
