console.log("----------------------------------------------------------------------------------------------------");
/* 
  MATRICES
    Se esta realizando el desarrollo de una aplicación para control de gastos. Cada dia, el usuario
    ingresa sus gastos cotidianos. La idea es solo regsitrar el total de los gastos, al finalizar la jornada.
    Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. Los gastos estarán
    en una matriz 4X7, cada fila representa una semana y cada columna un dia. Es decir, fila 0, semana 1,
    fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etc.
      -Gastos de toda la semana: 
        Crear una función que nos sirva para obtener el total de gastos de una semana especifica.
        Recordemos que cada fila representa una semana. El número de semana deberá percibirse por parametro.
      -Gastos de un dia de la semana: 
        Crea una función que nos sirva para obtener el total de gastos de un dia especifico 
        de la semana. Por ejemplo, del gasto de todos los martes del mes, o el gasto de todos los sabados del mes. El
        número correspondiente al dia deberá recibirse como parámetro. Recuerda que el número de dia es determinado por
        las columnas.
      -Gasto total: 
        Crea una función que nos sirva para obtener el valor total de los gastos de todo un mes. La función 
        deberá retornar dicho valor.
  
  CALLBACKS
      -Gastos por semana:
        Crea una función que calcule el total de gastos de cada semana y retorne un array con estos totales.
        En la posición 0 estará el gasto de toda la semana 0, en la posición 1 el gasto de la semana 1, etc.
        Será obligatorio el uso de callbacks para esta función.
*/

// ----------------------------------------------------------------------------------------------------
// GASTO SEMANAL OPCION 1
/**
 * 
 * @param {Array} mes 
 * @param {Array} semana 
 */
const gastoSemanal_Opcion_1 = (mes, semana) => {
  let i = semana - 1
  let res = mes[i].reduce((acc, curr) => {
    return acc += curr
  }, 0)

  return res
}
// ----------------------------------------------------------------------------------------------------
// GASTO SEMANAL OPCION 2
/**
 * 
 * @param {Array} mes 
 * @param {Array} semana 
 */
const gastoSemanal_Opcion_2 = (mes, semana) => {
  let j = semana - 1
  let acc = 0
  for (let i = 0; i < mes[j].length; i++) {
    acc += mes[j][i]
  }
  return acc
}
// ----------------------------------------------------------------------------------------------------
// GASTO DIA ESPECIFICO
/**
 * 
 * @param {Array} mes 
 * @param {Number} dia 
 */
function gastoPorDia(mes, dia) {
  let index = dia - 1
  let acc = 0

  for (let i = 0; i < mes.length; i++) {
    acc += mes[i][index]
  }
  return acc
}
// ----------------------------------------------------------------------------------------------------
// GASTO TOTAL
function gastoMensualTotal(mes) {
  let acc = 0
  for (let i = 0; i < mes.length; i++) {
    for (let j = 0; j < mes[i].length; j++) {
      acc += mes[i][j]
    }
  }
  return acc
}
// ----------------------------------------------------------------------------------------------------
// CALLBACKS OPCION 1
// GASTOS DE CADA SEMANA
function gastosSemanales_Opcion_1(mes, callback) {
  let gastos = []
  for (let i = 0; i < mes.length; i++) {
    gastos.push(callback(mes[i]))
  }
  return gastos
}
function gastoSemana_Opcion_1(semana) {
  let acc = 0
  for (let i = 0; i < semana.length; i++) {
    console.log(semana[i]);
    
    acc += semana[i]
  }
  return acc
}
// ----------------------------------------------------------------------------------------------------
// CALLBACKS OPCION 2
// GASTOS DE CADA SEMANA

function gastosSemanales_Opcion_2(mes, callback) {
  let gastoTotalSemanal = []
  mes.forEach(semana => {
    gastoTotalSemanal.push(callback(semana))
  });
  return gastoTotalSemanal  
}
function gastoSemana_Opcion_2(semana) {
  let total = semana.reduce((acc, curr) => {
    return acc += curr
  }, 0)
  return total
}


let enero = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28]
];

let gastoSemana1_Enero = gastoSemanal_Opcion_1(enero, 1)
let gastoSemana3_Enero = gastoSemanal_Opcion_1(enero, 3)
let gastoSemana2_Enero = gastoSemanal_Opcion_2(enero, 2)
let gastoSemana4_Enero = gastoSemanal_Opcion_2(enero, 4)
console.log(gastoSemana1_Enero); // output: 28
console.log(gastoSemana3_Enero); // output: 126
console.log(gastoSemana2_Enero); // output: 77
console.log(gastoSemana4_Enero); // output: 175

let gastoLunes_Enero = gastoPorDia(enero, 1)
let gastoMartes_Enero = gastoPorDia(enero, 2)
let gastoMiercoles_Enero = gastoPorDia(enero, 3)
let gastoJueves_Enero = gastoPorDia(enero, 4)
let gastoViernes_Enero = gastoPorDia(enero, 5)
let gastoSabado_Enero = gastoPorDia(enero, 6)
let gastoDomingo_Enero = gastoPorDia(enero, 7)
console.log(gastoLunes_Enero); // output: 46
console.log(gastoMartes_Enero); // output: 50
console.log(gastoMiercoles_Enero); // output: 54
console.log(gastoJueves_Enero); // output: 58
console.log(gastoViernes_Enero); // output: 62
console.log(gastoSabado_Enero); // output: 66
console.log(gastoDomingo_Enero); // output: 70

let gastoEnero = gastoMensualTotal(enero)
console.log(gastoEnero);

let gastoPorSemana_Enero;

gastoPorSemana_Enero = gastosSemanales_Opcion_1(enero, gastoSemana_Opcion_1)
console.log(gastoPorSemana_Enero); // output: [ 28, 77, 126, 175 ] 

gastoPorSemana_Enero = gastosSemanales_Opcion_2(enero, gastoSemana_Opcion_2)
console.log(gastoPorSemana_Enero); // output: [ 28, 77, 126, 175 ] 