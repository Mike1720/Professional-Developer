console.log("----------------------------------------------------------------------------------------------------");
// UNIR DOS ARRAYS
/* 
  Crea una función llamada "unirArrays" que tome dos arrays como parámetros y los una en uno solo.
  La función debe devolver el nuevo array. Para esto, averiguar que hace el método .concat()
*/
console.log("UNIR DOS ARRAYS");
{

  /**
   * 
   * @param {Array} arr1 
   * @param {Array} arr2 
   */
  function unirArrays(arr1, arr2) {
    return arr1.concat(arr2)
  }
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [6, 7, 8, 9, 10];
  let result = unirArrays(arr1, arr2)
  console.log(result); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
}

console.log("----------------------------------------------------------------------------------------------------");
// ELIMINAR PRIMER ELEMENTO
/* 
  Crea una función llammada "eliminarPrimerElemento" que tome un array como parámetro y elmine el primer elemento.
  La función debe devolver el elemento eliminado
*/
console.log("ELIMINAR PRIMER ELEMENTO");
{
  /**
   * 
   * @param {Array} array 
   */
  function eliminarPrimerElemento(array) {
    return array.shift()
  }
  let arr = [192, 232, 435, 24454, 5345];
  let result = eliminarPrimerElemento(arr)
  console.log(result); // output: 192

}

console.log("----------------------------------------------------------------------------------------------------");
// CONVERTIR TEXTO
/* 
  Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente.
  La función deberá mostrar los resultados por consola. Para esto, averiguar qué hacen los métodos de Strings:
    -toUpperCase()
    -toLowerCase()
*/
console.log("CONVERTIR TEXTO");

{
  /**
   * 
   * @param {String} str 
   */
  function convertirTexto(str) {
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
  }
  convertirTexto("HolA muNdo!") // output: "HOLA MUNDO!" / "hola mundo!"
}

console.log("----------------------------------------------------------------------------------------------------");

// MANIPULACIÓN DE OBJETOS
/* 
  Crea un objeto llamado "persona" que contenga como propiedades: nombre, edad y ocupación. Crea una función que muestre
  cada propiedad de dicho objeto por consola, e invocala para ver sus valores. Luego, modifica el valor de "ocupación" y
  agrega la propiedad de "habilidad". Llama nuevamente la función para visualizar lo efectuado.
*/
console.log("MANIPULACIÓN DE OBJETOS");

let persona = {
  nombre: "Miguel",
  edad: 25,
  ocupacion: "Programador"
}

/**
 * 
 * @param {ObjectConstructor} object 
 */
function verObjeto(object) {
  let keys = Object.keys(object)
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    console.log(`${key}: ${object[key]}`);
  }
}


verObjeto(persona) // output: nombre: Miguel / edad: 25 / ocupación: Programador

persona.ocupacion = "Developer"
persona.habilidad = "JavaScript"
console.log("------------------------------------");

verObjeto(persona)


console.log("----------------------------------------------------------------------------------------------------");

// OBJETOS ANIDADOS
/* 
  Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamado "ubicacion", donde deberás un objeto interno
  con las propiedades: codigoPostal, ciudad, calle, numero. Luego, crea una función que reciba dicho objeto por parámetro y le permita
  al usuario eliminar solo una de las propiedades del objeto.
*/
console.log("OBJETOS ANIDADOS");
persona.ubicacion = {
  codigoPostal: "03100",
  ciudad: "Ciudad de México",
  calle: "Amores",
  numero: "239"
}

console.log(persona); // {  nombre: 'Miguel',  edad: 25, ocupacion: 'Developer', habilidad: 'JavaScript', ubicacion: { codigoPostal: '03100', ciudad: 'Ciudad de México', calle: 'Amores', numero: '239' }}

/**
 * 
 * @param {ObjectConstructor} objeto 
 * @param {String} propiedad 
 */
function eliminarPropiedad(objeto, propiedad) {
  let keys = Object.keys(objeto);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    if (propiedad === key) {
      let property = key
      delete objeto[key]
      return `Propiedad: ${property} eliminada`
    } else{
      return "Propiedad no valida"
    }
  }
}

eliminarPropiedad(persona, "nombre")
console.log(persona);
eliminarPropiedad(persona, "edad")
console.log(persona); // { ocupacion: 'Developer', habilidad: 'JavaScript', ubicacion: { codigoPostal: '03100', ciudad: 'Ciudad de México', calle: 'Amores', numero: '239' }}

