'use strict';
(function () {

  var faq = document.querySelector('.faq');
  var itemMaterials = document.querySelector('.faq__list-item--materials');
  var faqMaterialsToggle = document.querySelector('.faq__toggle--materials');
  var itemCountries = document.querySelector('.faq__list-item--countries');
  var faqCountriesToggle = document.querySelector('.faq__toggle--countries');
  var itemReturn = document.querySelector('.faq__list-item--return');
  var faqReturnToggle = document.querySelector('.faq__toggle--return');
  var itemPayment = document.querySelector('.faq__list-item--payment');
  var faqPaymentToggle = document.querySelector('.faq__toggle--payment');
  

  if (faq) {
    faq.classList.remove('faq--nojs');

    var toggleClickHandler = function (item) {
      if (item.classList.contains('faq__list-item--hide')) {
        item.classList.remove('faq__list-item--hide');
      } else {
        item.classList.add('faq__list-item--hide');
      }
    };

    faqMaterialsToggle.addEventListener('click', function () {
      toggleClickHandler(itemMaterials);
    });

    faqCountriesToggle.addEventListener('click', function () {
      toggleClickHandler(itemCountries);
    });

    faqReturnToggle.addEventListener('click', function () {
      toggleClickHandler(itemReturn);
    });

    faqPaymentToggle.addEventListener('click', function () {
      toggleClickHandler(itemPayment);
    });
  }
})();
