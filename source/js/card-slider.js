'use strict';
(function () {

  let swiper = undefined;
  const mobile = window.matchMedia('(max-width: 767px)').matches;

  if (mobile) {
    swiper = new Swiper('.card__container', {
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
  };

  window.addEventListener('resize', () => {
    if (mobile) {
      if (!swiper) {
        swiper = new Swiper('.card__container', {
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
    document.location.reload (1);
  });
})();