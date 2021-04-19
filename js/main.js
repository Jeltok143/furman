"use strict";

var navButton = document.querySelector(".menu__btn");
navButton.addEventListener("click", function () {
  var navMenu = document.querySelector(".menu");
  var navClose = document.querySelector('.menu__close');
  var container = document.querySelector('.container');
  var body = document.body;
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
//# sourceMappingURL=main.js.map
