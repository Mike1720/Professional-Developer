// Metodos de arrays avanzados

// .slice(start, end)
/* 
  Retorna una copia de una sección de un array. Para ambos casos "start" y "end", se puede usar un indice negativo para indicar 
  un desplazamiento desde el final del arreglo. Por ejemplo, -2 se refiere al penultimo elemento de un arreglo.
  -start -> Indice de inicio de una porción especifica del arreglo. Si "start" es "undefined", entonces el corte comienza desde el indice 0
  -end -> Indice de fin de una porción especifica del arreglo. Esto excluye el elemento del indice "end". Si "end" es "undefined", entones
    el corte se extiende hasta el final del arreglo.
*/

let frutas = ["Manzana", "Naranja", "Platano", "Fresa", "Kiwi"]

let primerasTres = frutas.slice(0, 3)
console.log(primerasTres); // output: ["Manzana", "Naranja", "Platano"]
let desdeNaranja = frutas.slice(frutas.indexOf("Naranja"))
console.log(desdeNaranja); // output: ["Naranja", "Platano", "Fresa", "Kiwi"]
let ultimasDos = frutas.slice(-2)
console.log(ultimasDos); // [ 'Fresa', 'Kiwi' ]
let entreDosIndices = frutas.slice(-3, 4)
console.log(entreDosIndices); // [ 'Platano', 'Fresa' ]

console.log("--------------------------------------------------------------------------------------------------------------");

// .splice(start, deleteCount, items)
/* 
  Remueve elementos de un arreglo, y si es necesario, inserta nuevos elementos en sus lugares, retornando los elementos eliminados.
  -start -> Posición base en el arreglo desde el cual comienza a remover elementos.
  -deleteCount -> Cantidad de elementos a remover
  -items -> Elementos a insertar en el lugar de los elementos eliminados.
*/
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
let result = meses.splice(2, 2, "Diciembre", "Noviembre")

console.log(result); // output: [ 'Marzo', 'Abril' ]
console.log(meses); // output: [ 'Enero', 'Febrero', 'Diciembre', 'Noviembre', 'Mayo' ]

meses.splice(4, 0, "Septiembre"); // Al tener 0 como valor a eliminar, agrega los items desde la posición indicada
console.log(meses); // output: [ 'Enero', 'Febrero', 'Diciembre', 'Noviembre', 'Septiembre', 'Mayo' ]

console.log("--------------------------------------------------------------------------------------------------------------");

// .sort(compareFn)
/* 
  Ordena un arreglo en su lugar. Este metodo modifica el arreglo y retorna una referencia al mismo arreglo.
  -compareFn -> Funcion utilizada para determinar el orden de los elementos. Se espera que retorne un valor negativo
    si el primer argumento de la función es menor al segundo argumento, cero si estos son iguales, y un valor positivo
    en otro caso. Si se omite, los elementos son ordenados een orden ascendente de caracteres ASCII.
*/
let numeros = [5, 4, 8, 1, 6, 9, 10, 102];

// Caracteres ASCII
numeros.sort()
console.log(numeros); // output: [ 1, 10, 102, 4, 5, 6, 8, 9 ]

// Menor a mayor
numeros.sort((a, b) => a - b)
console.log(numeros); // output: [ 1, 4, 5, 6, 8, 9, 10, 102 ]

// Mayor a menor
numeros.sort((a, b) => b - a)
console.log(numeros); //output: [ 102, 10, 9, 8, 6, 5, 4, 1 ]

let str = ["Zorro", "gato", "perro", "Cuyo", "Gato", "PERRO", "zapato"];

str.sort()
console.log(str); // output: [ 'Cuyo', 'Gato', 'PERRO', 'Zorro', 'gato', 'perro', 'zapato' ]

console.log("--------------------------------------------------------------------------------------------------------------");

// .find(predicate, thisArg)
/* 
  Retorna el valor del primer elemento en el arreglo donde el predicado es "true", y "undefined" de lo contrario.
  -predicate -> "find" llama al predicado una vez por cada elemento del arreglo, en orden ascendente, hasta que encuentra uno donde el predicado
    retorne "true". Si se encuentra dicho elemento, "find" devuelve inmediatamente ese elemento. De lo contrario, "find" retorna "undefined"
  -thisArg -> Si es proveido, será usado como valor "this" por cada invocación del predicado. Si no es provisto, "undefined" es usado en su lugar.
*/
let edades = [25, 18, 30, 15, 22, 7, 4];
let primerMayorEdad = edades.find(edad => edad >= 18)
console.log(primerMayorEdad); // output: 25


let candidatos = [
  { nombre: "aaron", añosDeExperiencia: 18, edad: 66 },
  { nombre: "beth", añosDeExperiencia: 0, edad: 18 },
  { nombre: "cara", añosDeExperiencia: 4, edad: 22 },
  { nombre: "daniel", añosDeExperiencia: 3, edad: 16 },
  { nombre: "ella", añosDeExperiencia: 5, edad: 25 },
  { nombre: "fin", añosDeExperiencia: 0, edad: 16 },
  { nombre: "george", añosDeExperiencia: 6, edad: 28 },
]

let criterios = {
  experienciaMinima: 3,
  edadMinima: 18,
  edadMaxima: 65
}

let candidatoSeleccionado = candidatos.find(function (candidato) {
  return (
    (candidato.añosDeExperiencia >= this.experienciaMinima)
    && (candidato.edad <= this.edadMaxima)
    && (candidato.edad >= this.edadMinima)
  )
}, criterios)

console.log(candidatoSeleccionado); // output: { nombre: 'cara', 'añosDeExperiencia': 4, edad: 22 }

console.log("--------------------------------------------------------------------------------------------------------------");

// .map(callbackfn, thisArg)
/* 
  Llama a una función callback en cada elemento del arreglo y retorna un arreglo que contiene los resultados.
  -callbackfn -> Función que acepta hasta tres argumentos. El metodo "map" llama a la función callback una vez por cada elemento en el arreglo
  -thisArg -> Objeto al cual la paalabra reservada "this" puede hacer referencia en la función callback. Si es omitido, undefined es usado como
    valor "this"
*/
let numbers = [2, 4, 6];

function multiplicarPor3(numero) {
  return numero * 3
}

function multiplicarIndice(numero, index) {
  return numero * index
}

let numerosMultiplcadosPor3 = numbers.map(multiplicarPor3)
console.log(numerosMultiplcadosPor3); // output: [ 6, 12, 18 ]

let numerosMultiplcadosPor5 = numbers.map(number => number * 5)
console.log(numerosMultiplcadosPor5); // output: [ 10, 20, 30 ]

let numeroPorIndice = numbers.map(multiplicarIndice)
console.log(numeroPorIndice);

console.log("--------------------------------------------------------------------------------------------------------------");

// .filter(predicate, thisArg)
/* 
  Retorna los elementos de un arreglo que cumplen una condición especificada en una función callback
  -predicate -> función que acepta hasta tres argumentos. El metodo "filter" llama al función de predicado una vez por cada elemento en el arreglo
  -thisArg -> Objeto al cual hace referencia "this" en la función de predicado. Si "thisArg" es omitido, "undefined" es usado como valor "this"
*/
let ages = [22, 8, 17, 14, 30, 18];
let mayoresEdad = ages.filter(age => age >= 18)
console.log(mayoresEdad); // output: [ 22, 30, 18 ]

console.log("--------------------------------------------------------------------------------------------------------------");

// .reduce(callbackfn, initialValue)
/* 
  Llama una función callback especificada para todos los elementos en el arreglo. El valor de retorno de la función callback es el valor acumulado,
    y es proveido como un argumento en la siguiente llamada a la función callback.
  -callbackfn -> Función que acepta hasta cuatro argumentos. El metodo "reduce" llama a la función callback una vez por cada elemento en el arreglo.
  -initialValue -> Si "initialValue" es especificado, este es usado como el valor inicial para comenzar la acumulación. La primer llamada a la función callback provee este
  valor como argumento en lugar de un valor del arreglo.
*/
let nums = [5, 7, 16];
let sumatoria = nums.reduce((acc, curr) => {
  return acc += curr
}, 0)

console.log(sumatoria); // output: 28

console.log("--------------------------------------------------------------------------------------------------------------");

// .forEach()
/*
  Ejecuta la acción especifica para cada elemento en el arreglo.
  -callbackfn -> Función que acepta hasta tres argumentos. "forEach" invoca la función callback una vez por cada elemento en el arreglo
  -thisArg -> Objeto al cual hace referencia "this" en la función de predicado. Si "thisArg" es omitido, "undefined" es usado como valor "this"
*/
let paises = ["Argentina", "Colombia", "México"];
paises.forEach(pais => console.log(pais.toLowerCase())) // output: argentina / colombia / méxico
paises.forEach(pais => pais.toLowerCase()) // No retorna algun valor

let newArr = []

paises.forEach(pais => {
  newArr.push(pais.toLowerCase())
})

console.log(newArr); // output: [ 'argentina', 'colombia', 'méxico' ]
