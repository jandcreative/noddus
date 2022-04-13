const hamburger = document.querySelector('#hamburgegit r');
const fullMenu = document.querySelector('.full-menu');
const logo = document.querySelector('.logo-full-menu')

hamburger.addEventListener ('click', () => {
    hamburger.classList.toggle('close-hamburger');
    fullMenu.classList.toggle('active');
    logo.innerText = 'oddus';
    logo.classList.toggle('active');
})










