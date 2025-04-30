// Objetos literales

// Crear un objeto
let Persona = {
  nombre: "Miguel",
  apellido: "Miranda",
  edad: 25,
  coloresFavoritos: ["Azul", "Amarillo"],
  saludar: function () {
    return ("Hola, me llamo Miguel");
  }
}

let NewPersona = {
  nombre: this.nombre,
  apellido: this.apellido,
  edad: this.edad,
  saludar: function () {
    return (`Hola, mi nombre es ${this.nombre}`)
  }
}

// Acceder a las propiedades de un objeto
let nombrePersona = Persona.nombre
console.log(nombrePersona); // output: "Miguel"

let primerColorFavoritoPersona = Persona.coloresFavoritos[0]
console.log(primerColorFavoritoPersona); // output: "Azul"

// Destructuración
let { nombre, apellido, edad } = Persona
console.log(nombre); // output: "Miguel"

// Agregar nueva propiedad
Persona.deporteFavorito = "MMA"
console.log(Persona); // output: { nombre: "Miguel", apellido: "Miranda", edad: 25, coloresFavoritos: ["Azul", "Amarillo"], deporteFavorito: "MMA" }

// Modificar valor de una propiedad
Persona.edad = 18
console.log(Persona.edad); // output: 18

// Eliminar propiedad
delete Persona.deporteFavorito
console.log(Persona); // output: { nombre: "Miguel", apellido: "Miranda", edad: 25, coloresFavoritos: ["Azul", "Amarillo"] }

// Acceder a un metodo de un objeto
let saludoRecibido = Persona.saludar()
console.log(saludoRecibido); // output: "Hola, me llamo Miguel"

// this
Persona.nombre = "Edson"
saludoRecibido = Persona.saludar()
console.log(saludoRecibido); // output: "Hola, me llamo Miguel"

NewPersona.nombre = "Edson";
let newSaludo = NewPersona.saludar();
console.log(newSaludo); // output: "Hola, mi nombre es Edson"

NewPersona.nombre = "Ameyali"
newSaludo = NewPersona.saludar()
console.log(newSaludo); // output: "Hola, mi nombre es Edson"