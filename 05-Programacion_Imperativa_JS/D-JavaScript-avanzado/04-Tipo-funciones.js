// Tipos de funciones

// ---- Funciones declaradas
/* 
  Manera basica y esencial de crear funciones. Utiliza la palabra reservada "function"
  seguidas por el nombre a dar para la función.
  Las funciones declaradas se elevan a la parte superior del código durante la fase de compilación. Lo que
  significa que pueden ser llamadas antes de su declaración. (Hoisting)
*/

let resSuma = suma(1, 2)
console.log(resSuma);

function suma(num1, num2) {
  return num1 + num2
}

console.log("------------------------------------------------------------------------------------------------");

// ---- Funciones expresadas o funciones anonimas
/*
  Son expresiones en si mismas, lo que signifiac que se pueden almacenar en variables y utilizar como cualquier
  otro valor.
  No necesitan un nombre y son conocidas como funciones anonimas.
  Al ser almacenadas en variables, estas funciones "no existen" hasta que la lectura del código llegue a su linea de código

*/

let resta = function (num1, num2) {
  return num1 - num2
}

let resResta = resta(5, 2)
console.log(resResta);

let objeto1 = {
  valor: 10,
  doble: function () {
    return this.valor * 2
  }
}

console.log(objeto1);

let resultObj1 = objeto1.doble()
console.log(resultObj1); // output: 20


console.log("------------------------------------------------------------------------------------------------");

// ---- Funciones flecha
/* 
  Las arrow function fueron introducidas en 2015 con ECMAScript6.
  Ofrecen una sintaxis más concisa para definir funciones.
  Es importante señalar que las funciones flecha son anónimas y carecen de enlaces para "arguments",
  "super" o "this".
*/

const multiplicación = (num1, num2) => {
  return num1 * num2
}

let resMultiplicacion = multiplicación(3, 4)
console.log(resMultiplicacion);

let objeto2 = {
  valor: 10,
  doble: () => {
    return this.valor * 2 
  }
}

console.log(objeto2);

let resultObj2 = objeto2.doble()
console.log(resultObj2); // output: NaN