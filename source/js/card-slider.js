'use strict';
(function () {

  var container = document.querySelector('.card__container');

  if (container) {
    var swiper;
    var mobile = window.matchMedia('(max-width: 767px)').matches;

    if (mobile) {
      swiper = new window.Swiper('.card__container', {
        pagination: {
          el: '.swiper-pagination',
          clicable: true,
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          },
        },
        spaceBetween: 30,
      });
    }

    window.addEventListener('resize', function () {
      mobile = window.matchMedia('(max-width: 767px)').matches;
      if (mobile) {
        if (!swiper) {
          swiper = new window.Swiper('.card__container', {
            pagination: {
              el: '.swiper-pagination',
              clicable: true,
              type: 'fraction',
              renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
              },
            },
            spaceBetween: 30,
          });
        }
      } else {
        if (swiper) {
          swiper.destroy();
          swiper = undefined;
        }
      }
    });
  }
})();
