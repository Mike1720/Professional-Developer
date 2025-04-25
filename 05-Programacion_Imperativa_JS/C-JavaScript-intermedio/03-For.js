// For
/* 
  El ciclo for es utilizado para ejecutar un bloque de código un número especifico de veces.
*/

/*  
  for (let index = 0; index < array.length; index++) {
    Bloque de código a ejecutar en cada iteración
  }
  
  for -> Palabra reservada para declarar el ciclo for
  Dentro del paréntesis se encuentran tres partes que se separan por punto y coma ";":
    -let index -> Declaración e inicialización de variable (index)
    -index < array.length -> Condión evaluada antes de cada iteración
    -index++ -> Incremento o decremento de la variable (index)
*/

// Muestra los numeros del 0 al 10 por consola
{
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

// Muestra los números de 2 en 2 hasta el 10
{
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
}
