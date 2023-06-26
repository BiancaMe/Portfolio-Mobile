const action=document.querySelector('#menu-action');
const menu=document.querySelector('#menu-mobile');
const close=document.querySelector('.close-menu');

action.addEventListener('click', function(){
    menu.classList.add('menu-open');
});

close.addEventListener('click', function(){
    menu.classList.remove('menu-open');
});