// Métodos de Strings

// Strings y accesos unicos

// index      01234
// length     12345
let saludo = "Hola!" // -> Colección de caracteres

let index
let str

index = 2
str = saludo[index]
console.log(str); // "l"

index = 4
str = saludo[index]
console.log(str); // "!"
console.log("------------------------------------------------------------------------------------------------------------");

// .lenght

// index       0123456 
// lenght      1234567
let miSerie = "Mad men"
let longitud = miSerie.length
console.log(longitud); // 7

// arrIndex        0       1       2
// strIndex      0123    0123    012
let arrNames = ["Bart", "Lisa", "Moe"];
let longitudArr = arrNames.length
console.log(longitudArr);


// Primero accede a la posicion 0 del array ("Moe"), para después mostrar lo que se encuentra en la posición 2 del string "e"
console.log(arrNames[2][2]); // "e"
console.log(arrNames[1][1]); // "i"
console.log("------------------------------------------------------------------------------------------------------------");

// .indexOf(searchString, position)
/* 
  Retorna la posición de la primer ocurrencia de una subcadena
  -searchString -> Subcadena a buscar dentro del string principal
  -position -> Indíce desde el cual comienza la busqueda de la subcadena. Si se omite, la busqueda comienza desde el inicio del string.
*/

// length        12345678901234567890123456
// index         01234567890123456789012345
let newSaludo = "¡Hola! Estamos programando"
let wordIndex

wordIndex = newSaludo.indexOf("o")
console.log(wordIndex); // output: 2
wordIndex = newSaludo.indexOf("o", 4)
console.log(wordIndex); // output: 12
wordIndex = newSaludo.indexOf("Estamos")
console.log(wordIndex); // output: 7
wordIndex = newSaludo.indexOf("z")
console.log(wordIndex); // output: -1
console.log("------------------------------------------------------------------------------------------------------------");

// .slice(start, end)
/* 
  Retorna una sección de un string
  -start -> Indíce desde el cual comienza la porción de la cadena.
  -end -> Indice que delimita el final de la porción de la cadena. 
    La subcadena incluye los caracteres hasta el indicado por "end" pero no lo incluye.
    Si el valor no es especificado, la subcadena continua hasta el final de la cadena principal
*/
// index     012345678901234567 
// indexR    765432109876543210
let frase = "Hola! ¿Como estas?"

let section

section = frase.slice(10, 15)
console.log(section); // "o est"

section = frase.slice(15)
console.log(section); // "as?"

section = frase.slice(-15)
console.log(section); // "a! ¿Como estas?"
console.log("------------------------------------------------------------------------------------------------------------");

// .trim()
/* 
  Elimina los espacios en blanco iniciales y finales, así como los caracteres de terminación de línea, de una cadena.
*/
let nombreCompleto = "    Homero Simpson    "
console.log(nombreCompleto);
console.log(nombreCompleto.trim());
console.log("------------------------------------------------------------------------------------------------------------");

// .split(separator, limit)
/* 
  Divide una cadena en subcadena usando un separador especifico y los retorna como un arreglo
  -separator -> String que identifica un caracter o caracteres a usar para separar la cadena principal.
    Si se omite, se retornará un arreglo que contenga toda la cadena completa
  -limit -> Valor usado para limitar el número de elementos retornados en el arreglo
*/
let greeting = "Hola, como estas?"

let separator
let arr
let limit

arr = greeting.split()
console.log(arr); // ["Hola, como estas?"]

separator = " "
arr = greeting.split(separator)
console.log(arr); // ["Hola,", "como", "estas?"]

separator = "a"
arr = greeting.split(separator)
console.log(arr); // ["Hol", ", como est", "s?"]

limit = 1
arr = greeting.split(separator, limit)
console.log(arr); // ["Hol"]
console.log("------------------------------------------------------------------------------------------------------------");

// .replace()
/* 
  Remplaza texto en una cadena, usando una expresión regular u otra cadena.
  -searchValue -> Cadena o expresión regular (Regex) a buscar.
  -replaceValue -> Cadena que contenga el texto a remplazar.
    Cuando el "searchValue" es una RegExp, todas las coincidencias son remplazadas si el indicador "g" esta activado (o solo
    las coincidencias iniciales, si el indicador "y" tambien esta activado). De lo contrario solo se reemplaza la primer
    coincidencia de searchValue.
*/
let frase2 = "Me encanta Java Java"

let wordToReplace
let replacement
let newFrase

wordToReplace = "Java"
replacement = "Javascript"
newFrase = frase2.replace(wordToReplace,replacement) // Solo remplaza la primer ocurrencia
console.log(newFrase); // "Me encanta Javascript Java"

wordToReplace = "Ja"
replacement = "JS"
newFrase = frase2.replace(wordToReplace, replacement)
console.log(newFrase); // "Me encanta JSva Java"


let regex = new RegExp("Java", "g")
replacement = "JavaScript"
newFrase = frase2.replace(regex, replacement)
console.log(newFrase); // "Me encanta JavaScript JavaScript"
console.log("------------------------------------------------------------------------------------------------------------");