// Callbacks
/* 
  Es una función que se pasa como argumento a otra función.
  La idea principal es que esta función de callback será llamada más tarde, en un momento especifico. (Tarea asincrona)
*/

// Función principal
const procesarArray = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    console.log(callback(array[i]));
  }
}

// Función callback
function mostrarElemento(elemento) {
  return elemento
}

// Función callback
const multiplicarPorDos = (numero) => {
  return numero * 2
}

// Función callback
const square = (numero) => {
  return numero * numero
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// No se debe agregar parentesis al callback (mostrarElemento), ya que esto la ejecutaria inmediatamente y será "undefined"
console.log("MOSTRAR ELEMENTOS ARRAY");
procesarArray(arr, mostrarElemento)
console.log("MULTIPLICAR POR 2");
procesarArray(arr, multiplicarPorDos)
console.log("CUADRADO");
procesarArray(arr, square)
