console.log("----------------------------------------------------------------------------------------------------");
// VALIDADOR DE CONTRASEÑA
/* 
  Crea una variable llamada "contraseña" donde guardaras un valor especifico.
  Luego, crea una función que reciba por parametro un dato y utilizando operadores lógicos y condicionales, verifica si
  dicho parametro coincide con la variable llamada "contraseña". La función deberá mostrar por consola si la contraseña recibida
  es válida o no
 */
{
  console.log("VALIDADOR DE CONTRASEÑA");
  function validatePassword(input) {
    if (input === PASSWORD) {
      console.log("contraseña valida");
    } else {
      console.log("contraseña invalida");
    }
  }
  const PASSWORD = "Mtk117&g20"
  let input = "Mtk117&g20"
  validatePassword(input)
}
console.log("----------------------------------------------------------------------------------------------------");


// CALCULADORA IMC
/* 
  Crea una función que calcule el IMC utilizando los parámetros de peso y altura.
  Usa operadores aritméticos y condicionales para evaluar diferentes rangos de IMC
  (Bajo de peso, peso normal, sobrepeso, etc.)
 */
{
  console.log("CALCULADORA IMC");
  function calculatorIMC(height, weight) {
    let IMCResult
    let IMC = weight / (height ** 2)
    IMC = Number(IMC.toFixed(2))

    // OPCION 1
    // if (IMC > 40) {
    //   IMCResult = "Obesidad grave o de alto riesgo"
    // } else if (IMC >= 30) {
    //   IMCResult = "Obeso"
    // } else if (IMC >= 25) {
    //   IMCResult = "Sobrepeso"
    // } else if (IMC >= 18.5) {
    //   IMCResult = "Saludable"
    // } else {
    //   IMCResult = "Por debajo del peso"
    // }

    // OPCION 2
    if (IMC < 18.5) {
      IMCResult = "Por debajo del peso"
    } else if (IMC < 25) {
      IMCResult = "Saludable"
    } else if (IMC < 30) {
      IMCResult = "Sobrepeso"
    } else if (IMC < 40) {
      IMCResult = "Obeso"
    } else {
      IMCResult = "Obesidad grave o de alto riesgo"
    }

    return `Tu IMC es: ${IMC}, e indica ${IMCResult}`
  }

  let height = 1.40
  let weight = 32

  let result = calculatorIMC(height, weight)
  console.log(result);

}
console.log("----------------------------------------------------------------------------------------------------");


// CONVERSOR DE MONEDA
/* 
  Crea una función que convierta una cantidad de dinero de una moneda a otra.
  Usa variables para almacenar las tasas de cambio y condicionales para manejar diferentes tipos de monedas.
*/
{
  console.log("CONVERSOR DE MONEDA");

  function currencyConverterUSD(quantity, currency) {

    let typeofCurrency;

    switch (currency) {
      case "USD":
        typeofCurrency = 1.0;
        break;
      case "MXN":
        typeofCurrency = 19.62;
        break;
      case "EUR":
        typeofCurrency = 0.88;
        break;
      default:
        console.log("Error: Moneda no soportada");
        return -1;
    }

    let result = quantity * typeofCurrency;
    return `Cantidad convertida a ${currency}: ${result}`;
  }

  let res = currencyConverterUSD(50, "MXN")
  console.log(res);

}
console.log("----------------------------------------------------------------------------------------------------");


// EVALUDADOR DE RANGO DE EDAD
/* 
  Escribe una función que determine en qué categoría de edad se encuentra una persona. 
  Utiliza las estructuras que consideres necesarias para clasificar a las personas como niño, adolescente,
  adulto joven, adulti, etc., según su edad.
*/
{
  console.log("EVALUADOR DE EDAD");

  function ageEvaluator(age) {
    let category;
    if (age < 12 ) {
      category = "Niño"
    } else if (age < 18) {
      category = "Adolescente"
    } else if (age < 30) {
      category = "Adulto joven"
    } else{
      category = "Adulto"
    }
    return category;
  }
  let result = ageEvaluator(28)
  console.log(result);
}
console.log("----------------------------------------------------------------------------------------------------");


// GENERADOR DE MENSAJES PERSONALIZADOS
/* 
  Crea una función que genere un mensaje personalizado para un usuario, segun su nombre y el momento del dia
  (solo tendremos en consideración si es de mañana, o es de tarde). Utiliza concatenación e interpolación para 
  construir el mensaje, y condicionales (if ternario) para incluir diferentes saludos.
*/
{
  console.log("GENERADOR DE MENSAJES PERSONALIZADOS");

  function customMessageGenerator(name, timeOfDay) {
    let greeting = timeOfDay === "mañana" ? "Buenos dias" : "Buenas tardes";
    console.log(`${greeting} ${name}`);
  }
  customMessageGenerator("Matias", "mañana")
}
console.log("----------------------------------------------------------------------------------------------------");