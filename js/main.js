"use strict";

var navButton = document.querySelector(".menu__btn");
var body = document.body;
navButton.addEventListener("click", function () {
  var navMenu = document.querySelector(".menu");
  var navClose = document.querySelector('.menu__close');
  var container = document.querySelector('.container');
  navClose.addEventListener('click', function () {
    navMenu.classList.remove("menu__active");
    container.classList.remove("container--active");
    body.classList.remove("no-scroll");
  });
  navMenu.classList.toggle("menu__active");
  body.classList.toggle("no-scroll");
  container.classList.toggle("container--active");
  navMenu.addEventListener("click", function () {
    event.stopPropagation();
  });
});
var callWidget = document.querySelector('.call__widget');
callWidget.addEventListener('click', function () {
  var modalPanel = document.querySelector('.modal__panel');
  var modalContainer = document.querySelector('.modal__container');
  var modalClose = document.querySelector('.modal__close-img');
  modalPanel.classList.toggle('modal__panel--opened');
  body.classList.add("no-scroll");
  modalContainer.addEventListener('click', function () {
    event.stopPropagation();
  });
  modalPanel.addEventListener('click', function () {
    modalPanel.classList.remove('modal__panel--opened');
    modalContainer.classList.remove('modal__container--opened');
    body.classList.remove("no-scroll");
  });
  modalContainer.classList.toggle('modal__container--opened');
  modalClose.addEventListener('click', function () {
    modalPanel.classList.remove('modal__panel--opened');
    modalContainer.classList.remove('modal__container--opened');
    body.classList.remove("no-scroll");
  });
});
//# sourceMappingURL=main.js.map
