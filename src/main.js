import {videojuegos} from './datos.js';

const select = document.getElementById("videojuegos");
const imagen = document.getElementById("imagen");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const tarjeta = document.getElementById("tarjeta");

select.addEventListener('change', () => {
  const selectID = Number(select.value)
  
  const videojuegoSeleccionado = videojuegos.find(
    videojuegos => videojuegos.id === selectID
  );

  imagen.src = videojuegoSeleccionado.imagen
  imagen.alt = videojuegoSeleccionado.nombre

  titulo.textContent = videojuegoSeleccionado.nombre
  descripcion.textContent = videojuegoSeleccionado.descripcion
  tarjeta.style.border = "2px solid"
  tarjeta.style.borderColor = videojuegoSeleccionado.color
})