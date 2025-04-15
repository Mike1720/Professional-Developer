// Switch
// Es una estructura de control que evalúa una expresión con una instancia "case", y ejecuta declaraciones asocidadas a ese case.
// asi como las declaraciones en los "case" que siguen.

/* 
  switch -> Palabra reservada de la estructura de control.
  expresión -> Expresión evaluada.
  case -> Palabra reservada.
  valorCaso -> Instancia para ser comparada con la expresión evaluada.
  Bloque de código -> Código que se ejecuta en caso de que el "valorCaso" y "expresión" sean iguales.
  break -> Palabra reservada para delimitar el bloque de código. (Marca el final del caso)
  default -> Palabra reservada para establecer un caso predefinido en caso de no encontrar un caso de emparejamiento.

  switch (expresión) {
    case valorCaso:
        Bloque de código
      break;

    default:
        Bloque de código
      break;
  }
*/

let diaSemana 
let mensaje = null

diaSemana = -3

switch (diaSemana) {
  case 1:
    mensaje = "Lunes"
    break;
  case 2:
    mensaje = "Martes"
    break;
  case 3:
    mensaje = "Miercoles"
    break;
  case 4:
    mensaje = "Jueves"
    break;
  case 5:
    mensaje = "Viernes"
    break;
  case 6:
    mensaje = "Sabado"
    break;
  case 7:
    mensaje = "Domingo"
    break;
  default:
    mensaje = "Dia inexistente"
    break;
}

console.log(mensaje); // output -> Dia inexistente

/* 
  En caso de omitir la palabra reservada "break" en el caso que coincide con la expresión, el código no se detendrá sino hasta encontrar 
  un "break" o "return"
*/

// USANDO IF
diaSemana = 6
if (diaSemana === 1) {
  mensaje = "lunes"
} else if (diaSemana === 2) {
  mensaje = "martes"
} else if (diaSemana === 3) {
  mensaje = "miercoles"
} else if (diaSemana === 4) {
  mensaje = "jueves"
} else if (diaSemana === 5) {
  mensaje = "viernes"
} else if (diaSemana === 6) {
  mensaje = "sabado"
} else if (diaSemana) {
  mensaje = "domingo"
}
console.log(mensaje); // output -> sabado