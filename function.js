const action = document.querySelector('#menu-action');
const menu = document.querySelector('#menu-mobile');
const close = document.querySelector('.close-menu');
const headline = document.querySelector('#headline-link');
const myself = document.querySelector('#myself-link');
const contact = document.querySelector('#contact-link');
const section = document.getElementsByTagName('section');
const header = document.querySelector('#headline');

action.addEventListener('click', (event) => {
  menu.classList.add('menu-open');
  for(let i=0; i<section.length; i++ ) {
   /* section[i].classList.add('blur');*/
  }
  event.preventDefault();
});

close.addEventListener('click', (event) => {
  menu.classList.remove('menu-open');
  event.preventDefault();
});

headline.addEventListener('click', (event) => {
  menu.classList.remove('menu-open');
  window.location.hash = '#headline';
  event.preventDefault();
});

myself.addEventListener('click', (event) => {
  menu.classList.remove('menu-open');
  window.location.hash = '#myself';
  event.preventDefault();
});

contact.addEventListener('click', (event) => {
  menu.classList.remove('menu-open');
  window.location.hash = '#contact';
  event.preventDefault();
});


