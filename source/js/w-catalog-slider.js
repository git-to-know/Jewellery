'use strict';
(function () {

  new Swiper('.items__list', {
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
    autoheight: false,
    slidesPerColumnFill: 'row',
    slidesPerView: 2,
    slidesPerGroup: 2,
    slidesPerColumn: 6,

    breakpoints: {
      1294: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 4
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 4
      },

      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 4
      },

      535: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 6
      }
    },
  });

})();