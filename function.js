const action = document.querySelector('#menu-action');
const menu = document.querySelector('#menu-mobile');
const close = document.querySelector('.close-menu');
const headline = document.querySelector('#headline-link');
const myself = document.querySelector('#myself-link');
const contact = document.querySelector('#contact-link');

action.addEventListener('click', (event) => {
  menu.classList.add('menu-open');
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

/* ---- Pop Info Fuction ------ */

function popInfo(event) {
  event.stopPropagation();
  const pop = document.querySelector('.popUp');
  pop.classList.add('popup-visible');

  const card = event.target.parentNode.parentNode.parentNode;
  const name = card.querySelector('.first-text-section h2').textContent;
  const desc = card.querySelector('.primary-text').textContent;
  const img = card.querySelector('.work-presentation-mobile').src;
  const imgd = card.querySelector('.work-presentation-desktop').src;
  const tec = card.querySelectorAll('.tags  a');
  const frame = card.querySelectorAll('.frame-li');

  const obj = {
    name, desc, img, imgd, tec, frame,
  };

  const namep = pop.querySelector('.namePop');
  namep.innerHTML = obj.name;

  const descp = pop.querySelector('.descPop');
  descp.innerHTML = obj.desc;

  const imgp = pop.querySelector('.img-m-pop');
  imgp.src = obj.img;

  const imgdesk = pop.querySelector('.img-d-pop');
  imgdesk.src = obj.imgd;

  const framep = pop.querySelectorAll('.frame-li');
  for (let i = 0; i < framep.length; i += 1) {
    framep[i].innerHTML = obj.frame[i].innerHTML;
  }

  const tagp = pop.querySelector('.ul-tagPop');
  for (let i = 0; i < tec.length; i += 1) {
    const liPop = document.createElement('li');
    const aPop = document.createElement('a');
    const tag = document.createTextNode(tec[i].innerHTML);
    aPop.appendChild(tag);
    liPop.appendChild(aPop);
    tagp.appendChild(liPop);
  }
}

/* ------ PopUpCall ----- */
const detail = document.querySelectorAll('.action a');
for (let i = 0; i < detail.length; i += 1) {
  detail[i].addEventListener('click', popInfo);
}

/* ----- Close PopUp ----- */
const closePop = document.querySelector('.close-pop');

closePop.addEventListener('click', (event) => {
  const pop = document.querySelector('.popUp');
  pop.classList.remove('popup-visible');
  const init = pop.querySelectorAll('.ul-tagPop li');
  for (let i = 0; i < init.length; i += 1) {
    init[i].remove();
  }
  event.preventDefault();
});

/* ------- LocalStorage ------ */

const data = { name: '', email: '', text: '' };
const nameForm = document.querySelector('#name');
const emailForm = document.querySelector('#email');
const textForm = document.querySelector('#textarea');

function getInfo() {
  data.name = nameForm.value;
  data.email = emailForm.value;
  data.text = textForm.value;

  localStorage.setItem('infoData', JSON.stringify(data));
}

nameForm.addEventListener('input', getInfo);
emailForm.addEventListener('input', getInfo);
textForm.addEventListener('input', getInfo);

window.addEventListener('load', () => {
  if (localStorage) {
    const infoData = localStorage.getItem('infoData');
    const info = JSON.parse(infoData);
    if (info) {
      nameForm.value = info.name;
      emailForm.value = info.email;
      textForm.value = info.text;
    }
  }
});

/* ----- Validate Form --- */

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerHTML = message;
  input.className = type ? 'succes' : 'errror';
  return type;
}

const valid = document.getElementById('contact-form');
valid.addEventListener('submit', (e) => {
  e.preventDefault();
  const { email } = valid.elements;
  const s = document.querySelector('.msg');

  if (s.classList.contains('small-on')) s.classList.remove('small-on');
  if (email.classList.contains('error-email')) email.classList.remove('error-email');

  if (email.value === email.value.toLocaleLowerCase()) {
    HTMLFormElement.prototype.submit.call(valid);
    localStorage.removeItem('infoData');
    nameForm.value = '';
    emailForm.value = '';
    textForm.value = '';
    showMessage(email, '', true);
  } else {
    showMessage(email, 'Please lowecase your email', false);
    email.classList.add('error-email');
    s.classList.add('small-on');
  }
});
