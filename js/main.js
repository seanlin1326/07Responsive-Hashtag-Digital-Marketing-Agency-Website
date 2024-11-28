// nav scroll
let nav = document.querySelector(".header_wrapper");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// close nav
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse.navbar-collapse");
navLinks.forEach(function (e) {
  e.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Owl Carousel
$(document).ready(function () {
  $('.client-slider-section').owlCarousel({
    items:4,
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
  })

});
