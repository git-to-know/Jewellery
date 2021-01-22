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

    autoheight: false,

    // calculateHeight : true,

    // setWrapperSize: true,
    // =< 767
    slidesPerView: 2,

    slidesPerGroup: 2,

    slidesPerColumn: 6,


    breakpoints: {
      768: {
        slidesPerView: 3,

        slidesPerGroup: 3,

        slidesPerColumn: 4,
      },
    },
  });

})();