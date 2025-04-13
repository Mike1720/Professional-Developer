// Parametros

// Declaración de función
function sumaSN() {
  let resultado = 4 + 4
  console.log(`El resultado es: ${resultado}`);
}

// Llamado de la función
sumaSN() // output El resultado es: 8


let numero1 = 10
let numero2 = 8

/*
  NOTE: En caso de que exitan variables con el mismo nombre de los parametros de las funciones, cabe señalar que los parametros no harán referencia
  a los valores de las variables sino a los valores asignados en los parametros en de la función.
*/

// Declaración de la función
function suma(numero1, numero2) {
  let resultado = numero1 + numero2 // Ambos números hacen referencia a los valores de los parametros y no a los valores de las variables fuera de la función
  console.log(resultado);
}


// Llamado de la función
suma(numero1, numero2)
suma(4, 4) // output -> 8

// Declaracion de función
let num1 = 20
let num2 = 15

function resta(numero1, numero2) {
  let resultado = num1 - num2
  console.log(resultado);
}

resta() // output -> 5

/*  
  NOTE: Es posible asignar parametros predefinidos asignando un valor a los parametros
*/

function sumatoria(num1 = 0, num2 = 0) {
  let resultado = num1 + num2
  console.log(resultado);
}

sumatoria() // output -> 0
sumatoria(8, 9) // output -> 17