const hamburger = document.querySelector('#hamburgegiar');
const fullMenu = document.querySelector('.full-menu');
const logo = document.querySelector('.logo-full-menu')

hamburger.addEventListener ('click', () => {
    hamburger.classList.toggle('close-hamburger');
    fullMenu.classList.toggle('active');
    logo.innerText = 'oddus';
    logo.classList.toggle('active');
})










