const action=document.querySelector('#menu-action');
const menu=document.querySelector('#menu-mobile');

action.addEventListener('click', function(){
    console.log(action);
    menu.classList.add('menu-open');
});