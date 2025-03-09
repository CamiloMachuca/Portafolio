
const menuToggle = document.getElementById('menu-toggle');
const opciones = document.getElementById('opciones');


menuToggle.addEventListener('click', () => {
    opciones.classList.toggle('active'); 
});