'use strict';
(function () {


  /* этот код помечает картинки, для удобства разработки */
  // let i = 1;
  // for(let li of carousel.querySelectorAll('li')) {
  //   li.style.position = 'relative';
  //   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  //   i++;
  // }

  /* конфигурация */
  var width = 300; // ширина картинки
  var count = 4; // видимое количество изображений
  let position = 0; // положение ленты прокрутки

  var products = document.querySelector('.products__items');
  var list = products.querySelector('ul');
  let listElems = list.querySelectorAll('li');
  var right = document.querySelector('.products__controle-arrow-right')
  var left = document.querySelector('.products__controle-arrow-left')

  left.onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
  };

  right.onclick = function () {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  };

  var pageNumbers = document.querySelector('.products__controle-pages');
  var firstPage = pageNumbers.querySelector('.products__controle-pages-item--first');
  var secondPage = pageNumbers.querySelector('.products__controle-pages-item--second');
  var thirdPage = pageNumbers.querySelector('.products__controle-pages-item--third');

  if (list.style.marginLeft = 0) {
    firstPage.classList.add('.products__controle-pages-item--active');
  } else {
    firstPage.classList.remove('.products__controle-pages-item--active');
  }

  if (list.style.marginLeft > 1200 || list.style.marginLeft < 2401) {
    secondPage.classList.add('.products__controle-pages-item--active');
  } else {
    secondPage.classList.remove('.products__controle-pages-item--active');
  }

  if (list.style.marginLeft > 2400) {
    thirdPage.classList.add('.products__controle-pages-item--active');
  } else {
    thirdPage.classList.remove('.products__controle-pages-item--active');
  }

}) ();
