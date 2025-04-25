// Do while
/* 
  Similar al ciclo while, pero en este ciclo, la condición es evaluada después de ejecutar el bloque de código.
  El bloque de código dentro de el ciclo se ejecuta al menos una vez, incluso si la condición es falsa desde el inicio.
*/

/*

  let variableContador = valorInicial;

  do {
    Bloque de código a ejecutar
    variableContador++;

  } while (condition);

  variableContador -> Variable que se inicializa antes de entrar al bucle, y que incrementa o decrementa en cada iteración.
  do -> Palabra reservada parte de la estructura do while
  Bloque de código -> Código que se ejecutará al menos una vez, incluso si la condición es falsa.
  variableContador++ -> Incremento o decremento de la variable contador. (Se puede usar cualquier operación)
  while -> Palabra reservada para declarar el bucle do while
  condition -> Condición evaluada después de cada iteración. (En algún momento deberá ser falsa para salir del bucle)
  
*/

// while
// {
//   console.log("CICLO WHILE");
//   let i = 1;

//   console.log("Ejemplo 1");
//   while (i >= 5) {
//     console.log(i);
//     i++;
//   }
//   console.log("-----------------------------------");

//   console.log("Ejemplo 2");
//   while (i <= 5) {
//     console.log(i);
//     i++;
//   }
// }

// console.log("---------------------------------------------------------------------------");

// do while
// {
//   console.log("CICLO DO WHILE");
//   let j = 1;

//   console.log("Ejemplo 1");
//   do {
//     console.log(j);
//     j++;

//   } while (j >= 5);

//   console.log("-----------------------------------");

//   console.log("Ejemplo 2");
//   do {
//     console.log(j);
//     j++
//   } while (j <= 5);

// }

import PromptSync from "prompt-sync"; "prompt-sync";
const prompt = PromptSync({ sigint: true });

let randomNumber = 6;
let maxTries = 3;
let guess;

console.log("Adivina el número entre 1 y 10");
console.log(`Tienes ${maxTries} intentos para acertar`);

do {

  // Número ingresado por el usuario
  guess = parseInt(prompt("Ingresa un número:"))

  // Condición -> Número ingrsado es menor al número aleatorio
  if (guess < randomNumber) {
    console.log("El número es mayor");
    console.log(`Tienes: ${maxTries - 1} intentos restantes`);

    // Condición -> Número ingresado es mayor al número aleatorio
  } else if (guess > randomNumber) {
    console.log("El número es menor");
    console.log(`Tienes: ${maxTries - 1} intentos restantes`);

    // Condición
  } else {
    console.log("¡Acertaste!");
  }

  maxTries--;

} while (randomNumber !== guess && maxTries > 0);

