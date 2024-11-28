// Boton-color
//  LLamamos al boton
let button = document.querySelector('.button-link');
// decimos que tiene un color de fondo inicial
let colorFondoInicial = button.style.backgroundColor

// Escribimos la funcion de cambiar el color
function changeColor() {

// Escribimos que queremos que sea color marron al clickear
button.style.backgroundColor = 'brown';

// Ponemos tiempo para que despues de clickear y cambiar el color, el boton vuevlva tener su color de fondo inicial.
setTimeout(() => {
    button.style.backgroundColor = colorFondoInicial;
}, 1000);
}
// Asociamos el boton con evento
button.addEventListener('click', changeColor)



// Carousel de imagenes
// LLamamos por clase al contenedor de las imagenes 
let gallery = document.querySelector('.gallery-container');
// Seleccionamos todas las imagenes
let images = document.querySelectorAll('img');
// Empezamos desde 0
let index = 0;
// setInterval para tener el desplazamiento cada 3 seg. 
setInterval(function(){
    let change = index * -33;  
    // Elegimos con el tamano de cada imagen
gallery.style.transform = "translateX(" + change + "%)"
// para tener un slider de imagenes 
index++;
if(index > images.length - 6){
    index = 0;;
    // Volver a la primera imagen despues de la ultima
}
}, 3000);



// Boton-modo oscuro/claro
// LLamamos a nuestro boton con su ID
let toggleButton = document.getElementById('btn-mode');
// Le decimos que agregue clase dark-mode
function darkMode() {
    document.body.classList.toggle('dark-mode');
// Y si tiene esa clase entonces que sea modo oscuro y si no que sea modo claro

    if(document.body.classList.contains('dark-mode')){
        toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
        
    } else {
        toggleButton.innerHTML = '<i class="fa-regular fa-sun"></i>';
    }
    // Y en CSS ya le indicamos que el body por defecto tiene background color blanco y letras negras, y en modo oscuro va a ser al reves
}
// asociamos con addEventListener para que cambie al hacer click
toggleButton.addEventListener('click', darkMode);






