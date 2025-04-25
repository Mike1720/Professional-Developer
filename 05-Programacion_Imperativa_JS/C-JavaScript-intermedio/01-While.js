// While
/* 
  Estructura repetitiva que ejecuta un bloque de código, despúes de haber evaluado una condición como verdadera.
  La condición se evalua antes de ejecutar el bloque de código, por lo que si la condición es falsa desde el inicio, el bloque de código no se ejecutará.
  Esta estructura es útil cuando se desconoce del número de iteraciones a realizar.
*/

/* 

  let variableContador = valorInicial;

  while (condition) {
    Bloque de código a ejecutar  
    variableContador++;
  }
  
  variableContador -> Variable que se inicializa antes de entrar al bucle, y que incrementa o decrementa en cada iteración.
  while -> Palabra reservada para declarar el bucle while
  condition -> Condición evaluada antes de cada iteración. (En algún momento deberá ser falsa para salir del bucle)
  Bloque de código -> Código que se ejecuta si la condición es verdadera.
  variableContador++ -> Incremento de la variable contador para evitar un bucle infinito.
*/

// Imprimir por consola los números del 0 al 10
// {
//   let i = 0;
//   while (i <= 10) {
//     console.log(`Número: ${i}`);
//     i++;
//   }
// }

// Imprimir por consola los número del 10 al 0
// {
//   let j = 10;
//   while (j >= 0) {
//     console.log(`Número: ${j}`);
//     j--;
//   }
// }

import PromptSync from "prompt-sync"; "prompt-sync";
const prompt = PromptSync({ sigint: true });

{
  let control = "si";
  let nota;
  let sumatoriaNotas = 0;
  let cantidadNotas = 0;


  console.log("Bienvenido al control de notas");
  while (control === "si") {

    nota = parseInt(prompt("Ingrese la nota: "))
    sumatoriaNotas += nota;
    cantidadNotas++;
    control = prompt("Desea ingresar otra nota? (si/no) ");
  }

  let promedio = sumatoriaNotas / cantidadNotas;
  console.log(`El promedio de las notas es: ${promedio}`);
}