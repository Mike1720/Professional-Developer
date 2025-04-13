// Operadores Logicos
// Los operadores lógicos comparan valores booleanos y devuelven respuestas booleanas

// AND (&&)
// Evalua dos condiciones. Devuelve "true" si ambas son verdaderas o "false" en el caso contrario

// OR (||)
// Evalua dos condiciones. Devuelve "true" si al menos una de las condiciones es verdaderas o "false" en caso de que ninguna lo sea.

// NOT (!)
// Convierte una expresión booleana en su contraparte

// Caso de ejemplo
// Resultado de evaluaciones
let calificacion1 = 9
let calificacion2 = 5
let aprobado
let reprobado

// Requisito: Acreditar ambas evaluaciones
aprobado = calificacion1 >= 6 && calificacion2 >= 6
console.log(aprobado); // output -> false

// Requisito: Acreditar al menos una de las evaluaciones con más de 8
aprobado = calificacion1 >= 8 || calificacion2 >= 8
console.log(aprobado); // output -> true

// Conocer si el alumno es reprobado
reprobado = !aprobado
console.log(reprobado);

/* 
  En este ultimo caso se supone que si la variable aprobado es verdadera, se entiende que no esta reprobado, por lo que la variable
  "reprobado" toma el valor false
*/
