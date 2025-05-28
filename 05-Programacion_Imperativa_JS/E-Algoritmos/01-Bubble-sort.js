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
  let newArr = [...array]
  for (let j = 0; j < newArr.length; j++) {
    let swapped = false
    for (let i = 0; i < newArr.length - 1 - j; i++) {
      if (newArr[i] > newArr[i + 1]) {
        let support = newArr[i + 1]
        newArr[i + 1] = newArr[i]
        newArr[i] = support
        swapped = true
      }
    }
    if (!swapped) break
  }
  return newArr
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