// Funciones
// Permiten la reutilización de código siempre que sea necesario.

// Estructura de funciones
/* 
    function name(params) {
      Bloque de código
    }
  
  function -> Palabra reservada para declarar funciones
  name -> nombre descriptivo de la función (lo que hace)
  (params) -> parametros que recibe la función. Datos externos que usa para funcionar
  Bloque de código -> Manipulación de datos que realiza la funci´n

*/

// Ejemplo
// console.log("Hola!");
// console.log("Hola!");
// console.log("Hola!");
// console.log("Hola!");

// DECLARACIÓN DE LA FUNCIÓN
function imprimirHola4Veces() { 
  console.log("Hola!");
  console.log("Hola!");
  console.log("Hola!");
  console.log("Hola!");
}

// LLAMADO DE LA FUNCIÓN
imprimirHola4Veces()
imprimirHola4Veces()
imprimirHola4Veces()

// Con esto se imprimirán 16 veces la palabra "Hola!" por consola. De esta manera evitando
// escribir 16 lines con funciones console.log