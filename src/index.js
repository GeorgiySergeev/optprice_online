import IMask from 'imask';
import timer from './js/timer';
import validateOrderForm from './js/validateOrderForm';
import inputPhoneMask from './js/inputPhoneMask';
import handleFormSubmit from './js/formHandler';

document.addEventListener('DOMContentLoaded', () => {
  validateOrderForm();
});

const mySlider = new Splide('#slider', {
  type: 'loop',
  focus: 'center',
  drug: 'free',
  autoScroll: {
    speed: 1,
  },

  autoStart: true,
});

mySlider.mount(window.splide.Extensions);
// mySlider.mount();
