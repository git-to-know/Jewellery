'use strict';
(function () {
  var filter = document.querySelector('.items__filter');
  var productToggle = filter.querySelector('.items__filter-toggle--product');
  var productRange = filter.querySelector('.items__option-product')

  var materialToggle = filter.querySelector('.items__filter-toggle--material');
  var materialRange = filter.querySelector('.items__option-material')

  var collectionToggle = filter.querySelector('.items__filter-toggle--collection');
  var collectionRange = filter.querySelector('.items__option-collection')

  var priceToggle = filter.querySelector('.items__filter-toggle--price');
  var priceRange = filter.querySelector('.items__option-price')


  if (filter) {

    var toggleClickHandler = function (item) {
      if (item.classList.contains('items__option--hide')) {
        item.classList.remove('items__option--hide');
      } else {
        item.classList.add('items__option--hide');
      }
    };


    productToggle.addEventListener('click', function () {
     toggleClickHandler (productRange);
    });

    materialToggle.addEventListener('click', function () {
      toggleClickHandler (materialRange);
     });

    collectionToggle.addEventListener('click', function () {
    toggleClickHandler (collectionRange);
    });

    priceToggle.addEventListener('click', function () {
    toggleClickHandler (priceRange);
    });

  }

})();