'use strict';
(function () {
  var filter = document.querySelector('.items__filter');
  var productToggle = document.querySelector('.items__filter-toggle--product');
  var productRange = document.querySelector('.items__option-product');

  var materialToggle = document.querySelector('.items__filter-toggle--material');
  var materialRange = document.querySelector('.items__option-material');

  var collectionToggle = document.querySelector('.items__filter-toggle--collection');
  var collectionRange = document.querySelector('.items__option-collection');

  var priceToggle = document.querySelector('.items__filter-toggle--price');
  var priceRange = document.querySelector('.items__option-price');


  if (filter) {

    var toggleClickHandler = function (item) {
      if (item.classList.contains('items__option--hide')) {
        item.classList.remove('items__option--hide');
      } else {
        item.classList.add('items__option--hide');
      }
    };

    productToggle.addEventListener('click', function () {
      toggleClickHandler(productRange);
    });

    materialToggle.addEventListener('click', function () {
      toggleClickHandler(materialRange);
    });

    collectionToggle.addEventListener('click', function () {
      toggleClickHandler(collectionRange);
    });

    priceToggle.addEventListener('click', function () {
      toggleClickHandler(priceRange);
    });
  }

})();
