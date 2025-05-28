// LINEAR SEARCH / BUSQUEDA LINEAL
let array = [14, 3, 51, 7, 92, 110, 5, 17, 13, 48]
let searchedElement = 3;

function linearSearch(searchedValue, array) {
  for (let i = 0; i < array.length; i++) {
    if (searchedValue === array[i]) return i
  }
  return -1
}

let position
position = linearSearch(2, [39, 20, 7, 93, 2, 19, 37,])
console.log(position);

position = linearSearch(8, [18, 123, 734, 3, 12, 1, 37,])
console.log(position);