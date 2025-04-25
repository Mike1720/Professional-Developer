import PromptSync from "prompt-sync"; "prompt-sync";

const prompt = PromptSync({ sigint: true })

function suma(numero1, numero2) {
  return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

function division(numero1, numero2) {
  if (numero2 === 0) return "Error: División no permitida"
  return numero1 / numero2;
}

console.log(`
Bienvenido a la calculadora digital
Opciones:
  1. Suma
  2. Resta
  3. Multiplicación
  4. División
`);

let option = parseInt(prompt("Ingrese una opción a realizar:"))
let numero1;
let numero2;
let resultado;

switch (option) {
  case 1:
    numero1 = parseInt(prompt("Ingresa el primer número:"));
    numero2 = parseInt(prompt("Ingresa el segundo número:"))
    resultado = suma(numero1, numero2);
    break;
  case 2:
    numero1 = parseInt(prompt("Ingresa el primer número:"));
    numero2 = parseInt(prompt("Ingresa el segundo número:"))
    resultado = resta(numero1, numero2);
    break;
  case 3:
    numero1 = parseInt(prompt("Ingresa el primer número:"));
    numero2 = parseInt(prompt("Ingresa el segundo número:"))
    resultado = multiplicacion(numero1, numero2);
    break;
  case 4:
    numero1 = parseInt(prompt("Ingresa el primer número:"));
    numero2 = parseInt(prompt("Ingresa el segundo número:"))
    resultado = division(numero1, numero2);
  default:
    break;
}

if (typeof resultado != "string"){
  console.log(`El resultado de la operación es: ${resultado}`);
} else {
  console.log(resultado);
}