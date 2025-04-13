// Concatenacion e Interpolacion

// Concatenacion
// Union de dos variables tipo string mediante el operador "+"

let nombres = "Miguel Angel"
let apellidos = "Miranda Velasco"
let nombreCompleto = nombres + " " + apellidos

console.log(nombres + apellidos); // output -> Miguel AngelMiranda Velasco
console.log(nombres + " " + apellidos); // output -> Miguel Angel Miranda Velasco
console.log(nombreCompleto); // output -> Miguel Angel Miranda Velasco

/* 
  NOTE: JavaScript puede realizar sumas, pero los valores deben ser obligatoriamente tipo Number, ya que en caso de 
  tener al menos un valor string, JavaScript devolverá la concatenación de los números en vez de una suma.
  Esto solo ocurre con las sumas ya que al usar otro operador matematico como "/" o "-", JavaScript realizará la operación correspondiente
  considerando todos los valores como tipo Number
*/

let numeroString = "4"
let numero = 2
console.log(numeroString + numero); // output -> 42
console.log(numeroString / numero); // output -> 2
console.log(numeroString * numero); // output -> 8

// Interpolación
// Incrusta valores de variable directamente dentro de una cadena de texto (string). Ofrece una manera más accesible de
// mostrar textos debido a que resulta más facil de escribir

let mensaje = `Hola, mi nombre es ${nombreCompleto}. Un gusto conocerte!`
console.log(`Hola, mi nombre es ${nombres} ${apellidos}. Un gusto conocerte`); // output -> Hola, mi nombre es Miguel Angel Miranda Velasco. Un gusto conocerte
console.log(mensaje); // output -> Hola, mi nombre es Miguel Angel Miranda Velasco. Un gusto conocerte