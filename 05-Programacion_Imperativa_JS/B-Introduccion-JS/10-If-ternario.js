// If ternario
// El operador if ternario es una abreviación de la estructura de control if

/*
  (expresión) ? código si la expresion es verdadera : código si la expresión es falsa
*/

let numero

// TRADICIONAL
numero = 10
if (numero >= 0) {
  console.log("Es un numero positivo"); // output -> Es un numero positivo
} else {
  console.log("Es un numero negativo");
}


// TERNARIO
numero = -5
numero >= 0 ? (console.log("Positivo")) : (console.log("Negativo")); // output -> Negativo

// En caso de evaluar más de una condición, esta serán envueltas en parentesis
(numero >= 0 && numero <= 10) ? (console.log("numero en el rango")) : (console.log("numero fuera del rango")); // output -> numero fuera del rango


let edad
let mensaje
let categoria

// Asignación a una variable
edad = 20
mensaje = edad >= 18 ? "Es mayor" : "Es menor";
console.log(mensaje); // output -> Es mayor

// Ingresar más de una instrucción
edad = 15
edad >= 18 ? (
  mensaje = "Eres mayor de edad!",
  categoria = "Adulto"
) : (
  mensaje = "Eres menor de edad",
  categoria = "Joven"
);

console.log(mensaje);
console.log(categoria);
