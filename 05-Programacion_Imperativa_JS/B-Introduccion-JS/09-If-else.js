// Estructura de control if - else
// Evalua una expresión con la opción de ejecutar bloques de código en caso de ser falsa o verdadera

let edad = 25
let mensaje

if (edad >= 18) {
  mensaje = "Eres mayor de edad"
} else {
  mensaje = "Eres menor de edad"
}

console.log(mensaje); // output -> Eres mayor de edad


let nota1 = 7
let nota2 = 4
let nota3 = 10
let promedio = (nota1 + nota2 + nota3) / 3

if (promedio >= 6) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}


// Multiples expresiones (condiciones)
let clima = "soleado"
let temperatura = 18
let message = null

if (clima === "soleado" || temperatura >= 25) {
  message = "El dia esta caluroso"
} else {
  message = "El dia no esta caluroso"
}

console.log(message);

// if anidados
let puntuacion = 45

// OPCIÓN OPTIMA
if (puntuacion >= 90) {
  console.log("A");
} else if (puntuacion >= 80) {
  console.log("B");
} else if (puntuacion >= 70) {
  console.log("C");
} else if (puntuacion >= 60) {
  console.log("D");
} else {
  "Reprobado"
}

// OPCIÓN 2
if (puntuacion >= 60 && puntuacion < 70) {
  console.log("D");
} else if (puntuacion >= 70 && puntuacion < 80) {
  console.log("C");
} else if (puntuacion >= 80 && puntuacion < 90) {
  console.log("B");
} else if (puntuacion >= 90) {
  console.log("A");
} else {
  console.log("Reprobado");
}


/* 
  !Es necesario que durante las etapas del codigo que valide que los datos de entrada sean correctos. Tanto tipo de dato como valores permitidos
*/

let nota

nota = 10 // output -> Aprobaste la materia
nota = -3 // output -> Nota invalida
nota = 5 // output -> Reprobaste la materia

if (nota >= 0 && nota <= 10) {

  if (nota <= 10 && nota >= 6) {
    console.log("Aprobaste la materia");
  } else {
    console.log("Reprobaste la materia");
  }
} else {
  console.log("Nota invalida");
}