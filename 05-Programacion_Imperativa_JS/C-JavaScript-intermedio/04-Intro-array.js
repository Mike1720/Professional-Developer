// Arrays o arreglos
/* 
  Los arreglos son una colección de elementos almacenados en una sola variable.
  En JavaScript, los arreglos son objetos especiales que permiten almacenar diferentes tipos de datos, incluyendo otros arreglos y objetos.
  Los elementos de un arreglo pueden ser accedidos mediante su índice (posición) en el arreglo. El índice comienza en 0
*/

// Crear un array
let edades = [24, 37, 18, 59, 7];
let nombres = ["Juan", "Raul", "Alan"];
let bool = [true, false, false, true];
let mix = [15, "Hola", true];

// Acceder a un elemento específico de un array
console.log(edades); // output: [24, 37, 18, 59, 7]
console.log(edades[2]); // output: 18
console.log("-------------------------------------------------------------------------------------");

// Recorrer un array
for (let i = 0; i < edades.length; i++) {
  console.log(edades[i]);
}
console.log("-------------------------------------------------------------------------------------");


// Modificar cada uno de los elementos de un array
let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
  numeros[i] += 1
  console.log(numeros[i]);
}
console.log("-------------------------------------------------------------------------------------");

// Agregar elementos a un array
let notas = [8, 4, 10, 6];
notas[notas.length] = 7;
console.log(notas); // output: [8, 4, 10, 6, 7]
console.log("-------------------------------------------------------------------------------------");

// Extraer elementos de un array a una variable
let names = ["Pedro", "Adriana", "Fabian"];
let name1 = names[1];
console.log(name1); // output: "Adriana"
console.log("-------------------------------------------------------------------------------------");

// Extraer todos los elementos para algo especifico.
numeros = [10, 20, 30, 40, 50];
let sumatoria = 0;

for (let i = 0; i < numeros.length; i++) {
  sumatoria += numeros[i];
}
let promedio = sumatoria / numeros.length;
console.log(`Promedio: ${promedio}`); // output: Promedio: 30
console.log("-------------------------------------------------------------------------------------");

// Encontrar el mayor o menor elemento de un array
numeros = [10, 48, 7, 52, 19]

let menor = numeros[0]
let mayor = numeros[0]

// Mayor
for (let i = 0; i < numeros.length; i++) {
  if (mayor < numeros[i]) {
    mayor = numeros[i]
  }
}

// Menor
for (let i = 0; i < numeros.length; i++) {
  if (menor > numeros[i]) {
    menor = numeros[i]
  }
}

console.log(menor); // output: 7
console.log(mayor); // output: 52