"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var navButton = document.querySelector(".menu__btn");
var body = document.body;
var navClose = document.querySelector('.menu__close');
var container = document.querySelector('.container');
var navMenu = document.querySelector(".menu");
navButton.addEventListener("click", function () {
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
var modalMail = document.querySelector('.white__button');
var modalMailMobile = document.querySelector('.white__button--footer');

if (!modalMail) {} else {
  modalMail.addEventListener('click', function () {
    var modalMail = document.querySelector('.modal__mail');
    var modalMailContainer = document.querySelector('.modal__mail-container');
    var modalMailClose = document.querySelector('.modal__mail-btn');
    modalMail.classList.toggle('modal__mail--opened');
    modalMailContainer.classList.toggle('modal__mail-container--opened');
    body.classList.add('no-scroll');
    modalMailContainer.addEventListener('click', function () {
      event.stopPropagation();
    });
    modalMail.addEventListener('click', function () {
      modalMail.classList.remove('modal__mail--opened');
      modalMailContainer.classList.remove('modal__mail-container--opened');
      body.classList.remove('no-scroll');
    });
    modalMailClose.addEventListener('click', function () {
      modalMail.classList.remove('modal__mail--opened');
      modalMailContainer.classList.remove('modal__mail-container--opened');
      body.classList.remove('no-scroll');
    });
  });
}

if (!modalMailMobile) {} else {
  modalMailMobile.addEventListener('click', function () {
    var modalMail = document.querySelector('.modal__mail');
    var modalMailContainer = document.querySelector('.modal__mail-container');
    var modalMailClose = document.querySelector('.modal__mail-btn');
    modalMail.classList.toggle('modal__mail--opened');
    modalMailContainer.classList.toggle('modal__mail-container--opened');
    body.classList.add('no-scroll');
    modalMailContainer.addEventListener('click', function () {
      event.stopPropagation();
    });
    modalMail.addEventListener('click', function () {
      modalMail.classList.remove('modal__mail--opened');
      modalMailContainer.classList.remove('modal__mail-container--opened');
      body.classList.remove('no-scroll');
    });
    modalMailClose.addEventListener('click', function () {
      modalMail.classList.remove('modal__mail--opened');
      modalMailContainer.classList.remove('modal__mail-container--opened');
      body.classList.remove('no-scroll');
    });
  });
}

var modalReviewClose = document.querySelector('.modal__review-exit');
var modalReview = document.querySelector('.modal__review');
var modalReviewContainer = document.querySelector('.modal__review-container');

if (!modalReviewClose) {} else {
  modalReviewClose.addEventListener('click', function () {
    body.classList.remove('no-scroll');
    modalReview.classList.add('modal__review--closed');
  });
  modalReviewContainer.addEventListener('click', function () {
    event.stopPropagation();
  });
  modalReview.addEventListener('click', function () {
    body.classList.remove('no-scroll');
    modalReview.classList.add('modal__review--closed');
  });
} // SMOOTH SCROOL TO TOP FROM BOTTOM


var scrollToTop = document.querySelectorAll('up__button');

var _iterator = _createForOfIteratorHelper(scrollToTop),
    _step;

try {
  var _loop = function _loop() {
    var scrollUp = _step.value;
    scrollUp.addEventListener('click', function (event) {
      event.preventDefault();
      var blockId = scrollUp.getAttribute;
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } // Search modal 

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var searchHidden = document.querySelector('.header__buttons-item--hidden');
var searchMobile = document.querySelector('.header__buttons-item');
var searchModal = document.querySelector('.search');
var searchClose = document.querySelector('.search__close-btn');
var searchInner = document.querySelector('.search__inner');
searchHidden.addEventListener('click', function () {
  body.classList.add('no-scroll');
  searchModal.classList.add('search--active');
});
searchMobile.addEventListener('click', function () {
  body.classList.add('no-scroll');
  searchModal.classList.add('search--active');
});
searchClose.addEventListener('click', function () {
  body.classList.remove('no-scroll');
  searchModal.classList.remove('search--active');
  navMenu.classList.remove("menu__active");
  container.classList.remove("container--active");
});
searchInner.addEventListener('click', function () {
  event.stopPropagation();
});
searchModal.addEventListener('click', function () {
  body.classList.remove('no-scroll');
  searchModal.classList.remove('search--active');
  navMenu.classList.remove("menu__active");
  container.classList.remove("container--active");
});
//# sourceMappingURL=main.js.map
