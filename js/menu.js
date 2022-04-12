const hamburger = document.querySelector('#hamburger');
const fullMenu = document.querySelector('.full-menu');
const logo = document.querySelector('.logo-full-menu')

hamburger.addEventListener ('click', () => {
    hamburger.classList.toggle('close-hamburger');
    fullMenu.classList.toggle('active');
    logo.innerText = 'Noddusa';
    logo.classList.toggle('active');
})










