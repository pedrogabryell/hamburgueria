$(document).ready(function(){


$('.bannerTop').slick({
    autoplay:true,
    autoplaySpeed: 6000,
   centerMode: true,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    infinte:true,
    speed:2000,
    prevArrow: '<span class="previous-arro"><i class="fa-solid fa-arrow-left fa-xl"></i></span>', 
    nextArrow: '<span class="next-arrow"><i class="fa-solid fa-arrow-right fa-xl"></i></span>',
    loop:true,
    touchThreshold: 100
  });

  $('.quartoBanner').slick({
    slidesToShow: 3.8,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    autoplay: true ,
    prevArrow: '<span class="previousArrow-QuartoBanner"><i class="fa-solid fa-arrow-left fa-xl"></i></span>', 
    nextArrow: '<span class="nextarrow-QuartoBanner"><i class="fa-solid fa-arrow-right fa-xl"></i></span>',

  });
});


