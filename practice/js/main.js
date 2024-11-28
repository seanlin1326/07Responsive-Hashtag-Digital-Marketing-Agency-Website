/* nav scroll*/
let navbar= document.querySelector('.navbar-wrapper');
window.onscroll= function(){
    if(document.documentElement.scrollTop > 20){
        navbar.classList.add('scroll-on');
    }
    else{
        navbar.classList.remove('scroll-on');
    }
}
// close nav when click nav link
let navCollapse=document.querySelector('.collapse.navbar-collapse')
let navlink = document.querySelectorAll('.nav-link')
navlink.forEach(function(e){
    e.addEventListener('click',function(){
        navCollapse.classList.remove('show')
    })
})

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
  