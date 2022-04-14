<<<<<<< HEAD
const hamburger = document.querySelector('#hamburger');
=======
const hamburger = document.querySelector('#hamburgegiar');
>>>>>>> rama-javi
const fullMenu = document.querySelector('.full-menu');
const logo = document.querySelector('.logo-full-menu')

hamburger.addEventListener ('click', () => {
    hamburger.classList.toggle('close-hamburger');
    fullMenu.classList.toggle('active');
<<<<<<< HEAD
    logo.innerText = 'Noddus';
=======
    logo.innerText = 'oddus';
>>>>>>> rama-javi
    logo.classList.toggle('active');
})










