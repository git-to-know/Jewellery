'use strict';
(function () {

  var faq = document.querySelector('.faq');
  var itemMaterials = document.querySelector('.item__materials');
  var faqMaterialsToggle = document.querySelector('.faq__toggle--materials');
  var itemCountries = document.querySelector('.item__countries');
  var faqCountriesToggle = document.querySelector('.faq__toggle--countries');
  var itemReturn = document.querySelector('.item__return');
  var faqReturnToggle = document.querySelector('.faq__toggle--return');
  var itemPayment = document.querySelector('.item__payment');
  var faqPaymentToggle = document.querySelector('.faq__toggle--payment');

  if (faq) {
    faq.classList.remove('faq--nojs');

    var toggleClickHandler = function (item) {
      if (item.classList.contains('item--hide')) {
        item.classList.remove('item--hide');
      } else {
        item.classList.add('item--hide');
      }
    };

    faqMaterialsToggle.addEventListener('click', function () {
      toggleClickHandler (itemMaterials);
    });

    faqCountriesToggle.addEventListener('click', function () {
      toggleClickHandler (itemCountries);
    });

    faqReturnToggle.addEventListener('click', function () {
      toggleClickHandler (itemReturn);
    });

    faqPaymentToggle.addEventListener('click', function () {
      toggleClickHandler (itemPayment);
    });
  }
})();
