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

// .find()
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