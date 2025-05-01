// Recorrer matrices

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.table(matriz);
console.log("---------------------------------------------------------------------------------------------------------");


for (let i = 0; i < matriz.length; i++) {  // RECORRER FILAS
  for (let j = 0; j < matriz[i].length; j++) { // RECORRER CONTENIDO DE FILAS (COLUMNAS)
    console.log(`Coordenada: f${i}, c${j}; Valor: ${matriz[i][j]}`);
  }
}
console.log("---------------------------------------------------------------------------------------------------------");

// arrlength          1             2
// index              0             1
let matriz2 = [["a", "e", "i"], ["o", "u"],["a","b","c","d"]];
// eleIndex      0    1    2      0    1

console.table(matriz2)
console.log("---------------------------------------------------------------------------------------------------------");

// Los valores de "i" son 0 y 1
for (let i = 0; i < matriz2.length; i++) {

  // Valores de "j" son 0 y 1
  for (let j = 0; j < matriz2[i].length; j++) {

    /* 
      Genera un problema ya que la ultima columna no será contabilizada.
      Mantener la misma longitud del array para ambos recorridos solo
      aplica para matrices cuadradas.
        matriz2[0].length = 3
        matriz2[1].length = 2
        matriz2.length = 2

        matriz2.length < matriz2[0].length
        matriz.length -> matriz cuadrada
        matriz[i].length -> matriz irregular
    */
        console.log(`Coordenada: f${i}, c${j}; Valor: ${matriz2[i][j]}`);
  }

}
