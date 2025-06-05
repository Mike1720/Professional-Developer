// BINARY SEARCH
/* 
  La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista ordenada. 
  Consiste en comparar el elemento buscado con el del medio; si son iguales, se encontró. 
  Si no, se descarta la mitad en la que no puede estar (izquierda o derecha) y se repite el proceso con la mitad restante. 
  Su complejidad es O(log n), lo que la hace mucho más rápida que la búsqueda lineal en listas grandes, 
  pero solo funciona con listas ordenadas.
*/
/**
 * 
 * @param {number} searchedValue 
 * @param {Array} array 
 * @returns -1 if not found, otherwise returns the position of the searchedValue in the array
 */
function binarySearch(searchedValue, array) {

  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const midIndex = Math.floor((right + left) / 2);
    
    if (array[midIndex] === searchedValue) {
      return midIndex
    } else if (array[midIndex] > searchedValue) {
      right = midIndex - 1
    } else {
      left = midIndex + 1
    }
  }
  return -1
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let value = 8
let index = binarySearch(value, arr)
