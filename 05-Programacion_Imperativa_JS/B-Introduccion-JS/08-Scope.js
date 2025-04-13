// Scope y retornos

// Scope
// Es el contexto en el que los valores y expresiones son visibles o pueden ser referenciados.

/*  
  Existen 2 tipos de variables:
    -Variable global: Puede ser accedida en diferentes partes del código
    -Variable local: Solo puede ser accedida en el bloque de código en el cual fue declarada
*/

let global = "Soy una variable global"
let x = 25

// Bloque de código
{
  let local = "Soy una variable dentro de un bloque de código"
  let x = 30
  console.log(local); // output -> Soy una variable dentro de un bloque de código
  console.log(global); // output -> Soy una variable global
  console.log(x); // output -> 30 (lee el valor de la variable local)
}

console.log(x); // output -> 25
// console.log(local); // local is not defined

/* 
  Resumen: 
    Una variable declarada en un bloque de código puede ser leida en el mismo bloque, pero no desde afuera.
    Mientras que una variable global puede ser leida en diferentes partes del código.
*/