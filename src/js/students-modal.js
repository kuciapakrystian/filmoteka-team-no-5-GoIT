import {Spinner} from 'spin.js';

const modalLink = document.querySelector('.footer__link');
const modalWindow = document.querySelector('.modal');
let slides = document.getElementsByClassName('modal__slide');
let navlinks = document.getElementsByClassName('modal__navlink');
let modalSpin = document.querySelector(".modal__spin");
let slideIndex = 0;
let timer = null;

const removingClass = () => {
  modalWindow.classList.add('is-hidden');
};

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (let j = 0; j < navlinks.length; j++) {
      navlinks[j].className = navlinks[j].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'flex';
    navlinks[slideIndex - 1].className += ' active';
    timer = setTimeout(showSlides, 1500);
}
  

modalLink.addEventListener('click', () => {
  modalWindow.classList.remove('is-hidden');
  showSlides();
});

window.addEventListener('click', event => {
  if (event.target.classList.contains('modal')) {
    removingClass();
    clearTimeout(timer);
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    removingClass();
    clearTimeout(timer);
  }
});

var opts = {
  lines: 8, // The number of lines to draw
  length: 10, // The length of each line
  width: 5, // The line thickness
  radius: 3, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 0.7, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ff6b01', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};


var spinner = new Spinner(opts).spin();
modalSpin.appendChild(spinner.el);