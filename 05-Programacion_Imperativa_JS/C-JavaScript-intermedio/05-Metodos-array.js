let colores = ["Rojo", "Naranja", "Azul"];
let nombres = ["Sandra", "Lautaro", "Ezequiel"];
let marcas = ["Audi"];
let dias = ["Lunes", "Martes", "Miercoles"];
let frutas = ["Manzana", "Banana", "Mango", "Manzana", "Pera", "Sandia"]
let escuderias = ["Red Bull", "Ferrari", "Mclaren", "Ferrari", "Mercedes", "Williams", "Ferrari"]

// .push(items)
/* 
  Agrega nuevos elementos al final del arreglo, y retorna la nueva longitud del arreglo
    -items -> Elementos a agregar al arreglo
*/
colores.push("Violeta")
console.log(colores); // output: ["Rojo", "Naranja", "Azul", "Violeta"]
colores.push("Gris", "Dorado")
console.log(colores); // output: ["Rojo", "Naranja", "Azul", "Violeta", "Gris", "Dorado"]
console.log("--------------------------------------------------------------------------------------------");

// .pop()
/* 
  Remueve el ultimo elemento de un arreglo y lo retorna. Si el arreglo esta vacio se retornará "undefined" y el arreglo no es modificado
*/
let colorEliminado = colores.pop()
console.log(colorEliminado); // output: Dorado
console.log(colores); // output: ["Rojo", "Naranja", "Azul", "Violeta", "Gris"]
console.log("--------------------------------------------------------------------------------------------");

// .shift()
/* 
  Remueve el primer elemento de un arreglo y lo retorna. Si el arreglo esta vacio se retornará "undefined" y el arreglo no es modificado
*/
let nombreEliminado = nombres.shift()
console.log(nombreEliminado); // output: Sandra
console.log(nombres); // ["Lautaro", "Ezequiel"]
console.log("--------------------------------------------------------------------------------------------");

// .unshift(items)
/* 
  Inserta un nuevo elemento al inicio de un arreglo, y retorna la nueva longitud del arreglo
    -items -> Elementos a agregar al arreglo
*/
marcas.unshift("Ford")
console.log(marcas); // output: ["Ford", "Audi"]
let newLength = marcas.unshift("Ferrari", "BMW")
console.log(marcas); // output: ["Ferrari", "BMW", "Ford", "Audi"]
console.log(newLength); // output: 4
console.log("--------------------------------------------------------------------------------------------");

// .join(separator)
/* 
  Une todos los elementos de un arreglo en una cadena de caracteres, separados por un separador especifico.
  -separator -> caracter usado para separar un elemento del arreglo del siguiente en la cadena de caracteres resultante.
    Si se omite, el arreglo de elementos es separado por coma ",".
*/
let separadosComaEspacio = dias.join(", ");
let separadosGuion = dias.join(" - ");
let sinDefinir = dias.join();
let unidos = dias.join("");

console.log(separadosComaEspacio); // output: "Lunes, Martes, Miercoles"
console.log(separadosGuion); // output: "Lunes - Martes - Miercoles"
console.log(sinDefinir); // output: "Lunes,Martes,Miercoles"
console.log(unidos); // output: "LunesMartesMiercoles"
console.log("--------------------------------------------------------------------------------------------");

// .indexOf(searchElement, fromIndex)
/* 
  Retorna el indice de la primer ocurrencia de un valor especifico dentro de un arreglo, o -1 si no esta presente.
  -searchElement -> Valor a localizar dentro del arreglo
  -fromIndex -> Indice desde el cual inicia la busqueda. Si se omite, la busqueda comienza en el indíce 0
*/
let indiceEncontrado = frutas.indexOf("Manzana")
let noEncontrado = frutas.indexOf("ana")
console.log(indiceEncontrado); // output: 0
console.log(noEncontrado); // output: -1
console.log("--------------------------------------------------------------------------------------------");

// .lastIndexOf(seachElement, fromIndex)
/*
  Retorna el indice de la ultima ocurrencia de un valor especifico dentro de un arreglo, o -1 si no esta presente.
  -searchElement -> Valor a localizar dentro del arreglo.
  -fromIndex -> Indice desde el cual inicia la busqueda hacia atras. Si se omite, la busqueda comienza en el indíce 0
*/

let posicionEncontrada
posicionEncontrada = escuderias.lastIndexOf("Ferrari")
console.log(posicionEncontrada); // output: 6

posicionEncontrada = escuderias.lastIndexOf("Ferrari", 4)
console.log(posicionEncontrada); // output: 3

posicionEncontrada = escuderias.lastIndexOf("Ferrari", 0)
console.log(posicionEncontrada); // output: -1
console.log("--------------------------------------------------------------------------------------------");

// .includes()
/*
  Determina si un arreglo contiene un elemento especifico, retornando "true" o "false" según lo apropiado
  -searchElement -> Elemento a buscar.
  -fromIndex -> Posicion en el arreglo desde el cual comienza la busqueda del "searchElement"
*/
let existente
existente = frutas.includes("Banana")
console.log(existente); // output: true
existente = frutas.includes("Uva")
console.log(existente); // output: false