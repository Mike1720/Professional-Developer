// Bubble sort - ordenamiento burburja
/* 
  El algoritmo Bubble sort realiza el recorrido de un array para ordenarlo de menor a mayor o visceversa.
  Esto lo hace mediante una comparación de elementos, de manera que compara un elemento en la posición "n" con
  otro en la posición "n + 1"
  Ejemplo: n = 0; n + 1 = 1
  En caso de que el valor de la posición "n + 1", sea menor que el valor de la posición "n", entonces se invertiran
  los valores. Esta acción se repetira cuantas veces sea necesario hasta que el arreglo este ordenado en la manera
  indicada
*/

/**
 * 
 * @param {Array} array 
 * @returns new ordered array
 */
function bubbleSort(array) {
  let newArr = [...array] // Copia exacta del arreglo original
  // Iteración del arreglo "j" veces
  for (let j = 0; j < newArr.length; j++) {
    let swapped = false // -> Indicador si hubo intercambios en las vueltas
    // Iteración de los elementos del arreglo
    for (let i = 0; i < newArr.length - 1 - j; i++) {
      /* 
        - 1: Se resta 1 unidad para evitar la comparación del ultimo elemento con undefined
        - j: Se resta los valores de "j" para evitar seguir la comparación del ultimo elemento, sabiendo que los ultimos elementos
            colocados en cada iteración han sido ordenados.
            Ej. [7,4,2,1]
            Ejecutando la función el resultado de cada iteración será:
            0.- [4,2,1,7] -> Ultimo elemento ordenado desde la primer iteración
            1.- [2,1,4,7] -> Penultimo elemento ordenado en la seguda iteración. No fue necesario realizar la comparación 4 > 7, ya que el ultimo elemento estaba ordenado
            2.- [1,2,4,7] -> Elementos restantes ordenados en la siguiente iteración. No fue necesario comparar 2 > 4, ni 4 > 7.

      */
      //  currentValue > nextValue
      if (newArr[i] > newArr[i + 1]) {
        let support = newArr[i + 1] // Asiganción de variable temporal con el primer valor a que será sobreescrito
        newArr[i + 1] = newArr[i] // Actualización del valor nextValue por el valor de currentValue
        newArr[i] = support // Actualización del valor currentValue por el valor de nextValue que fue almacenado en la variable temporal
        swapped = true // Indicación que en la vuelta "j" hubo cambio
      }
    }
    if (!swapped) break // Si no hay cambios, se indica que el arreglo esta ordenado y no es necesario realizar más iteraciones.
  }
  return newArr // Retorno del nuevo arreglo ordenado
}
let orderedArr
let arr = [3, 1, 3, 22, 2, 97, 101, 1]
let arr2 = [1, 1, 12, 2, 2, 3, 6, 10]
let arr3 = ["auto", "Zorro", "Auto", "zapato"]
orderedArr = bubbleSort(arr)
console.log(orderedArr);
orderedArr = bubbleSort(arr2)
console.log(orderedArr);
orderedArr = bubbleSort(arr3) // Ordenará de A-Z para después ordenar de a-z
console.log(orderedArr);