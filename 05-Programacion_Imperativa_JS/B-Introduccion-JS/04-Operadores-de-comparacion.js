// Operadores de comparación

// Mayor que
console.log(5 > 10); // output -> false
console.log(10 > 5); // output -> true
console.log(10 > 10); // output -> false
console.log("10" > 5); // output -> true
console.log("10" > "5"); // output -> false
console.log("10" > "10"); // output -> false

// Menor que
console.log(5 < 10); // output -> true
console.log(10 < 5); // output -> false
console.log(10 < 10); // output -> false
console.log("5" < 10); // output -> true

// Mayor/Menor igual que
console.log(10 >= 10); // output -> true
console.log(10 >= 5); // output -> true
console.log("10" >= 5); // output -> true
console.log(10 <= 5); // output -> false
console.log(5 <= 5); // output -> true
console.log("5" <= 5); // output -> true

// Igualdad (Evalua los VALORES de las variables)
console.log(10 == 5); // output -> false
console.log(10 == 10); // output -> true
console.log("10" == 10); // output -> true

// Completa o Estrictamente igual a (Evalua los VALROES Y TIPO DE DATO de las variables)
console.log(10 === 5); // output -> false
console.log(10 === "10"); // output -> false
console.log(10 === 10); // output -> true

// Diferente de
console.log(10 != 5); // output -> true
console.log(10 != 10); // output -> false
console.log(10 != "10"); // output -> false

// Completa o Estrictamente diferente de
console.log(10 !== 5); // output -> true
console.log(10 !== 10); // output -> false
console.log(10 !== "10"); // output -> true