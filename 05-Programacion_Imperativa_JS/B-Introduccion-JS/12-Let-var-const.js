// let vs var vs const

// VAR
{
  // -ÁMBITO GLOBAL O FUNCIÓN/LOCAL
  {
    var tester = "hey"
    function nuevaFuncion() {
      var hola = "hola"
    }
    // console.log(hola); // output -> hola is not defined
  }

  // -REDECLARACIÓN
  {
    var saludar = "Hey, hola!"
    var tiempos = 4
    if (tiempos > 3) {
      var saludar = "Dice hola tambien"
      console.log(saludar);
    }
    console.log(saludar); // output -> Dice hola tambien
  }

  // -MODIFICABLES
  {
    var saludar = "Hola"
    var saludar = "hola como estas"

    var despedida = "Adios"
    despedida = "Hasta luego"
  }

  // HOISTING
  {
    console.log(str); // output -> undefined
    var str = "que?"
    /* 
      Es lo mismo a:
        var str
        console.log(str) -> undefined
        str = "que?"
    */
  }

}

// LET
{
  // ÁMBITO DE BLOQUE
  {
    let saludar = "Dice hola"
    let tiempos = 4
    if (tiempos > 3) {
      let hola = "Dice hola tambien"
      console.log(hola); // output -> Dice hola tambien
    }
    // console.log(hola); // output -> hola is not defined
  }

  // MODIFICABLE PERO NO REDECLARABLE
  {
    let saludar = "Hola"
    saludar = "Como estas?"

    let despedida = "Adios"
    // let despedida = "Hasta luego" // output -> error

    let random = "lola"
    if (true) {
      let random = "balalala"
      console.log(random); // output -> balalala
    }
    console.log(random); // output -> lola
  }

  // HOISTING
  {
    // console.log(numero); // output reference error (No se puede leer antes de ser inicializada)
    let numero = 4
  }
}

// CONST
{
  // ÁMBITO DE BLOQUE
  {
    const randomNumber = 18821
    { // -> Bloque de codigo
      const randomNumber = 13
    }
    console.log(randomNumber); // 18821
  }

  // NO PUEDE MODIFICARSE NI REDECLARARSE
  {
    const isBad = true
    // const isBad = false -> Erro
    // isBad = false -> Error

    const obj = {
      magicNumber: 18,
      randomNumber: 121
    }

    // obj = { otherNumber: 90 } -> Error
    obj.otherNumber = 117
    console.log(obj); // output -> { magicNumber: 18, randomNumber: 121, otherNumber: 117 }
  }
}