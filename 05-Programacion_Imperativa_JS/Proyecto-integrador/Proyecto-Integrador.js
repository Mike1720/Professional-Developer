// Proyecto Integrador
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })

// ALMACENAMIENTO DE TAREAS
let tasks = [];

// CATEGORIAS
let categories = ["Trabajo", "Personal"]

// ------ MOSTRAR TODAS LAS CATEGORIAS
function showAllCategories() {
  console.log("Categorias existentes:");
  categories.forEach((category, index) => console.log(`${index}. ${category}`)
  )
}

// ------ AGREGAR CATEGORIAS
function addCategory(category) {
  categories.push(category)
  console.log(`Categoria: ${category} agregada con éxito!`);
}

// ------ AGREGAR NUEVA TAREA
function addTask(taskName, deadLine = null) {
  let task = {
    name: taskName,
    isCompleted: false,
    deadLine: deadLine
  }
  tasks.push(task);
  console.log("Tarea agregada con exito!");

}

// ------ ELIMINAR TAREA
function deleteTask(taskIndex) {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks.splice(taskIndex, 1);
    console.log("Tarea eliminada correctamente!");
  } else {
    console.log("Indice de tarea incorrecto");
  }
}

// ------ COMPLETAR TAREA
function completeTask(taskIndex) {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].isCompleted = true;
    console.log("Tarea completada!");
  } else {
    console.log("Tarea invalida");

  }
}

// ------ MODIFICAR TAREA
function modifyTask(taskIndex, newTaskName, newDeadLine = null) {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].name = newTaskName;
    tasks[taskIndex].isCompleted = false;
    if (newDeadLine !== null) {
      tasks[taskIndex].deadLine = newDeadLine
    }
    console.log("Tarea modificada con exito!");
  } else {
    console.log("Tarea Invalida");
  }
}

// ------ MOSTRAR MENÚ
function showMenu() {
  console.log(
    `
---- Menú ----
  1. Agregar tarea
  2. Eliminar tarea
  3. Completar tarea
  4. Modificar tarea
  5. Mostrar tareas
  6. Ver todas las categorias
  7. Agregar nueva categoria
  0. Salir
`
  );
}

// ------ INTERACTUAR CON USUARIO
function interactUser() {
  let option = -1
  while (option !== 0) {
    showMenu()

    option = parseInt(prompt("Selecciona una opción: "))
    let taskIndex

    switch (option) {
      case 1:
        let taskName = prompt("Ingrese el nombre de la tarea: ");
        addTask(taskName);
        break;
      case 2:
        taskIndex = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "))
        deleteTask(taskIndex);
        break;
      case 3:
        taskIndex = parseInt(prompt("Ingrese el indice de la tarea a completar: "))
        completeTask(taskIndex);
        break;
      case 4:
        taskIndex = parseInt(prompt("Ingrese el indice de la tarea a modificar: "))
        let newTaskName = prompt("Ingrese el nuevo nombre de la tarea: ");
        modifyTask(taskIndex, newTaskName);
        break;
      case 5:
        console.log("---- Lista de tareas ----");
        console.log(tasks);
        break;
      case 6:
        showAllCategories()
        break;
      case 7:
        let newCategory = prompt("Ingresa el nombre de la nueva categoria: ")
        addCategory(newCategory)
        break;
      case 0:
        break;
      default:
        console.log("Opción invalida");
        break;
    }
  }
}

interactUser()