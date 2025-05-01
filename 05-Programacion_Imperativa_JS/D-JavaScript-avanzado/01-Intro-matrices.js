// Introducción a Matrices

// Crear una matriz
// -- Opcion 1
let matriz = [
  //0   1   2
  [1, 2, 3], // fila 0
  [4, 5, 6], // fila 1
  [7, 8, 9] // fila 2
];
// -- Opcion 2
let matrizPrincipal = [];
let fila0 = ["x0", "x1", "x2"];
let fila1 = ["y0", "y1", "y2"]

matrizPrincipal.push(fila0, fila1)
console.log("------------------------------------------------------------------------------------------");

// Visualizar matriz
console.log("VISUALIZACIÓN DE MATRICES");

console.table(matriz)
console.table(matrizPrincipal)
console.log("------------------------------------------------------------------------------------------");

// Acceder a un elemento especifico
// Para acceder a una matriz, se ingresa primero la fila y despues la columna
console.log("ACCESO A ELEMENTO ESPECIFICO");

let fila1_columna2_M1 = matriz[1][2]
let fila1_columna0_M2 = matrizPrincipal[1][0]
console.log(fila1_columna2_M1); // output: 6
console.log("------------------------------------------------------------------------------------------");

// Modificar un elemento especifico
console.log("MODIFICAR ELEMENTO ESPECIFICO");

matriz[0][1] = 15
console.table(matriz)
console.log("------------------------------------------------------------------------------------------");

// Recorrer una columna especifica
console.log("RECORRER COLUMNA ESPECIFICA");

for (let i = 0; i < matriz.length; i++) {  
  console.log(matriz[i][0]);
}

console.log("------------------------------------------------------------------------------------------");

// Recorrer una fila especifica
console.log("RECORRER FILA ESPECIFICA");

for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[0][i]);
  
}
