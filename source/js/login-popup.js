'use strict';
(function () {
  var link = document.querySelector('.login-button');
  var loginPopup = document.querySelector('.login-popup');
  var close = document.querySelector('.login-popup__close');
  var overlay = document.querySelector('.login-popup__overlay');
  var body = document.querySelector('body');
  var header= document.querySelector('.header');

  if (loginPopup) {

    link.removeAttribute('href');

    var email = document.getElementById('popup-email');
    localStorage.setItem('email', email.value);

    var openPopupClickHandler = function (evt) {
      if (!loginPopup.classList.contains('login-popup--show')) {
        evt.preventDefault();
        loginPopup.classList.add('login-popup--show');
        email.focus();
        body.classList.add('no-scroll');
        if (header.classList.contains('header--menu-show')){
          header.classList.remove('header--menu-show');
        }
      }
      link.removeEventListener('click', openPopupClickHandler);
      close.addEventListener('click', closePopupClickHandler);
      overlay.addEventListener('click', closePopupClickHandler);
      window.addEventListener('keydown', escClickHandler);
    }
    link.addEventListener('click', openPopupClickHandler);

    var closePopupClickHandler = function (evt) {
      if (loginPopup.classList.contains('login-popup--show')) {
        loginPopup.classList.remove('login-popup--show');
        body.classList.remove('no-scroll');
      }
      close.removeEventListener('click', closePopupClickHandler);
      link.addEventListener('click', openPopupClickHandler);
    }
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
