const action=document.querySelector('#menu-action');
const menu=document.querySelector('#menu-mobile');
const close=document.querySelector('.close-menu');
const headline=document.querySelector('#headline-link');
const myself=document.querySelector('#myself-link');
const contact=document.querySelector('#contact-link');


action.addEventListener('click', function(event){
    menu.classList.add('menu-open');
    event.preventDefault();
});

close.addEventListener('click', function(event){
    menu.classList.remove('menu-open');
    event.preventDefault();
});

headline.addEventListener('click', function(event){
    menu.classList.remove('menu-open');
    window.location.hash='#headline';
    event.preventDefault();
});

myself.addEventListener('click', function(event){
    menu.classList.remove('menu-open');
    window.location.hash='#myself';
    event.preventDefault();
});

contact.addEventListener('click', function(event){
    menu.classList.remove('menu-open');
    window.location.hash='#contact';
    event.preventDefault();
});

