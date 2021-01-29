'use strict';
(function () {

  var filter = document.querySelector('.items__filter');
  var filterButton = document.querySelector('.items__button-filter');
  var close = document.querySelector('.items__form-close');

  if (filter) {

    filter.classList.remove('items__filter--show');

    var openFilterClickHandler = function (evt) {
      if (!filter.classList.contains('items__filter--show')) {
        evt.preventDefault();
        filter.classList.add('items__filter--show');
      }
      filterButton.removeEventListener('click', openFilterClickHandler);
      close.addEventListener('click', closeFilterClickHandler);
      window.addEventListener('keydown', escClickHandler);
    };
    filterButton.addEventListener('click', openFilterClickHandler);

    var closeFilterClickHandler = function () {
      if (filter.classList.contains('items__filter--show')) {
        filter.classList.remove('items__filter--show');
      }
      close.removeEventListener('click', closeFilterClickHandler);
      filterButton.addEventListener('click', openFilterClickHandler);
    };
    close.addEventListener('click', closeFilterClickHandler);

    var escClickHandler = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closeFilterClickHandler();
        window.removeEventListener('keydown', escClickHandler);
      }
    };
    window.addEventListener('keydown', escClickHandler);
  }
})();
