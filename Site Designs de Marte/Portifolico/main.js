var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == "imagens/menu.png") {
        iconMenu.setAttribute("src","img/close.png");

    } else {
        iconMenu.setAttribute("src","img/menu.");
    }

    menu.classList.toggle('active');
});