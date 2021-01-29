'use strict';
(function () {
  var button = document.querySelector('.card__button');
  var popup = document.querySelector('.card-popup');
  var close = document.querySelector('.card-popup__button-close');
  var overlay = document.querySelector('.card-popup__overlay');
  var body = document.querySelector('body');

  if (popup) {
    button.removeAttribute('href');

    var openPopupClickHandler = function (evt) {
      if (!popup.classList.contains('card-popup--show')) {
        evt.preventDefault();
        popup.classList.add('card-popup--show');
        body.classList.add('no-scroll');
      }
      button.removeEventListener('click', openPopupClickHandler);
      close.addEventListener('click', closePopupClickHandler);
      overlay.addEventListener('click', closePopupClickHandler);
      window.addEventListener('keydown', escClickHandler);
    };
    button.addEventListener('click', openPopupClickHandler);

    var closePopupClickHandler = function () {
      if (popup.classList.contains('card-popup--show')) {
        popup.classList.remove('card-popup--show');
        body.classList.remove('no-scroll');
      }
      close.removeEventListener('click', closePopupClickHandler);
      button.addEventListener('click', openPopupClickHandler);
    };
    close.addEventListener('click', closePopupClickHandler);

    overlay.addEventListener('click', closePopupClickHandler);
    overlay.removeEventListener('click', closePopupClickHandler);


    var escClickHandler = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closePopupClickHandler();
        window.removeEventListener('keydown', escClickHandler);
      }
    };
    window.addEventListener('keydown', escClickHandler);
  }
})();
