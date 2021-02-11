'use strict';
(function () {

  var menuButton = document.querySelector('.header__main-nav-burger');
  var header = document.querySelector('.header');
  var body = document.querySelector('body');

  if (header) {

    header.classList.remove('header--menu-show');
    header.classList.remove('header--nojs');

    menuButton.addEventListener('click', function () {
      if (header.classList.contains('header--menu-show')) {
        header.classList.remove('header--menu-show');
        body.classList.remove('no-scroll');
      } else {
        header.classList.add('header--menu-show');
        body.classList.add('no-scroll');
      }
    });

  }

})();
