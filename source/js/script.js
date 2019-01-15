'use strict';

(function () {
  var overlay = document.querySelector('.overlay');
  var toggle = document.querySelector('.main-nav__toggle');
  var mobileMenu = document.querySelector('.main-nav_wrapper');
  var mainHeader = document.querySelector('.main-header');
  var headerLogo = document.querySelector('.main-header__logo');

  var closeMenu = function () {
    headerLogo.classList.remove('main-header__logo--menu-active');
    mainHeader.classList.remove('main-header--menu-active');
    mobileMenu.classList.add('main-nav_wrapper--hidden');
    toggle.classList.remove('main-nav__toggle--off');
    toggle.classList.add('main-nav__toggle--on');
  }

  var openMenu = function () {
    headerLogo.classList.add('main-header__logo--menu-active');
    mainHeader.classList.add('main-header--menu-active');
    mobileMenu.classList.remove('main-nav_wrapper--hidden');
    toggle.classList.remove('main-nav__toggle--on');
    toggle.classList.add('main-nav__toggle--off');
    if (window.matchMedia('(min-width: 750px)').matches) {
      overlay.style.display = 'block';
    }
  }

  closeMenu();

  toggle.addEventListener('click', function(evt) {
    overlay.style.display = 'none';
    evt.preventDefault();
    if (toggle.classList.contains('main-nav__toggle--off')) {
      closeMenu();
    } else if (toggle.classList.contains('main-nav__toggle--on')) {
      openMenu();
    }
  });
})();

(function () {
  var slider = document.querySelector('.banner-slider');
  var sliders = slider.querySelectorAll('.banner-slider__slide');
  var slidersText = slider.querySelectorAll('.banner-slider__text');
  var arrowLeft = slider.querySelector('.banner-slider__arrow-left');
  var arrowRight = slider.querySelector('.banner-slider__arrow-right');
  var current = 0;

  var reset = function () {
    sliders.forEach(function (el) {
      el.style.display = 'none';
    });
    slidersText.forEach(function (el) {
      el.style.display = 'none';
    });
  };

  var startSlider = function () {
    reset();
    sliders[0].style.display = 'block';
    slidersText[0].style.display = 'inline-block';
  };

  startSlider();

  var nextSlide = function() {
    reset();
    current++;
    if (current === sliders.length) {
      current = 0;
    }
    sliders[current].style.display = 'block';
    slidersText[current].style.display = 'inline-block';
  };

  var prevSlide = function() {
    reset();
    if (current === 0) {
      current = sliders.length;
    };
    current--;
    sliders[current].style.display = 'block';
    slidersText[current].style.display = 'inline-block';
  }

  arrowRight.addEventListener('click', function (evt) {
    evt.preventDefault();
    nextSlide();
  });

  arrowLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
    prevSlide();
  });

})();


(function () {
  var slider = document.querySelector('.reviews-slider');
  var sliders = slider.querySelectorAll('.reviews-slider__slide');
  var arrowLeft = slider.querySelector('.reviews-slider__arrow-left');
  var arrowRight = slider.querySelector('.reviews-slider__arrow-right');
  var current = 0;

  var reset = function () {
    sliders.forEach(function (el) {
      el.style.display = 'none';
    });
  };

  var startSlider = function () {
    reset();
    sliders[0].style.display = 'block';
  };

  startSlider();

  var nextSlide = function() {
    reset();
    current++;
    if (current === sliders.length) {
      current = 0;
    }
    sliders[current].style.display = 'block';
  };

  var prevSlide = function() {
    reset();
    if (current === 0) {
      current = sliders.length;
    };
    current--;
    sliders[current].style.display = 'block';
  }

  arrowRight.addEventListener('click', function (evt) {
    evt.preventDefault();
    nextSlide();
  });

  arrowLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
    prevSlide();
  });

})();
