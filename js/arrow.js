<<<<<<< HEAD
const label = document.querySelector('.cuota');
=======
const label = document.querySelector('.cuot');
>>>>>>> rama-javi
const arrow = document.querySelector('.fa-angle-down');
const shareBar = document.querySelector('.share');

label.addEventListener ('click', () => {
    arrow.classList.toggle('fa-flip-vertical');
    shareBar.classList.toggle('visible');
})




