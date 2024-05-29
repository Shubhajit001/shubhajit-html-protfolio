'use strict';

// **add dark-mode**

const toggleCheckbox = document.querySelector('.toggle-checkbox');

toggleCheckbox.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('body');
  } else {
    document.body.classList.remove('body');
  }
});


/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



// /**
//  * SLIDER
//  */

// const slider = document.querySelector("[data-slider]");
// const sliderContainer = document.querySelector("[data-slider-container]");
// const sliderPrevBtn = document.querySelector("[data-slider-prev]");
// const sliderNextBtn = document.querySelector("[data-slider-next]");

// let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
// let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

// let currentSlidePos = 0;

// const moveSliderItem = function () {
//   sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
// }

// /**
//  * NEXT SLIDE
//  */

// const slideNext = function () {
//   const slideEnd = currentSlidePos >= totalSlidableItems;

//   if (slideEnd) {
//     currentSlidePos = 0;
//   } else {
//     currentSlidePos++;
//   }

//   moveSliderItem();
// }

// sliderNextBtn.addEventListener("click", slideNext);

// /**
//  * PREVIOUS SLIDE
//  */

// const slidePrev = function () {
//   if (currentSlidePos <= 0) {
//     currentSlidePos = totalSlidableItems;
//   } else {
//     currentSlidePos--;
//   }

//   moveSliderItem();
// }

// sliderPrevBtn.addEventListener("click", slidePrev);






// auto type words 

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: ['Full Stack Web Developer', 'Website Designer', 'Coder', 'Programmer'],
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 3000,
    loop: true
  };

  const multiTextElement = document.querySelector('.multi-text');
  let currentTextIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    const fullText = options.strings[currentTextIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    multiTextElement.textContent = currentText;

    let typeSpeed = options.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 2; // Faster when deleting
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = options.backDelay;
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % options.strings.length;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});





//  * SLIDER*

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;
let autoScrollInterval;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;
  currentSlidePos = slideEnd ? 0 : currentSlidePos + 1;
  moveSliderItem();
}

const slidePrev = function () {
  currentSlidePos = currentSlidePos <= 0 ? totalSlidableItems : currentSlidePos - 1;
  moveSliderItem();
}

sliderNextBtn.addEventListener("click", function () {
  clearInterval(autoScrollInterval);
  slideNext();
});

sliderPrevBtn.addEventListener("click", function () {
  clearInterval(autoScrollInterval);
  slidePrev();
});

const autoScroll = function () {
  slideNext();
}

autoScrollInterval = setInterval(autoScroll, 3000);

sliderContainer.addEventListener("mouseenter", function () {
  clearInterval(autoScrollInterval);
});

sliderContainer.addEventListener("mouseleave", function () {
  autoScrollInterval = setInterval(autoScroll, 3000);
});





/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});




