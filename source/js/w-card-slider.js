'use strict';
(function () {

  // const options = {
  //   '.card__container', {
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clicable: true,
  //       type: 'fraction',
  //       renderFraction: function (currentClass, totalClass) {
  //         return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
  //       },
  //     },

  //     spaceBetween: 30,
  //   }
  // };
  // console.log(options);

  let swiper = undefined;
  const mobile = window.matchMedia('(max-width: 767px)').matches;

  if ('mobile') {
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

  document.addEventListener('resize', () => {
    if ('mobile') {
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
  });

  // new Swiper('.card__container', {

  //   pagination: {
  //     el: '.swiper-pagination',
  //     clicable: true,
  //     type: 'fraction',
  //     renderFraction: function (currentClass, totalClass) {
  //       return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
  //     },
  //   },

  //   spaceBetween: 30,
  // });

})();
