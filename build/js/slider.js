'use strict';
(function () {

  new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    pagination: {
      el: '.swiper-pagination',
      clicable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  
    spaceBetween: 30,
  
    slidesPerView: 2,
    
    breakpoints: {
      
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
  
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
  
      1270: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    },
  });
  


}) ();

