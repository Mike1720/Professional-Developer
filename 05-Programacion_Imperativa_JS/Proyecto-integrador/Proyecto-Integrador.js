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
  showAllCategories()
  let categoryIndex = parseInt(prompt("Ingrese el indice de la categoria a enlazar: "))
  if (categoryIndex >= 0 && categoryIndex < categories.length) {
    let task = {
      name: taskName,
      isCompleted: false,
      deadLine: deadLine,
      category: categoryIndex
    }
    tasks.push(task);
    console.log("Tarea agregada con exito!");
  } else {
    console.log("Indice de categoria incorrecto");
  }
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
function modifyTask(taskIndex, newTaskName, newDeadLine = null, newCategory) {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].name = (newTaskName !== undefined) ? newTaskName : tasks[taskIndex].name;
    tasks[taskIndex].deadLine = (newDeadLine !== undefined) ? newDeadLine : tasks[taskIndex].deadLine;
    tasks[taskIndex].category = (newCategory !== undefined) ? newCategory : tasks[taskIndex].category;
    console.log("Tarea modificada con exito!");
  } else {
    console.log("Tarea Invalida");
  }
}

// ------ MOSTRAR INDICE-TAREA
function showTaksIndex() {
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i}: ${tasks[i].name}`);
  }
}

// ------ FILTRAR TAREAS POR CATEGORIA
function filterTasksByCategory(categoryIndex) {
  let filteredTasks = tasks.filter((task) => task.category === categoryIndex);
  return filteredTasks
}

// ------ FILTRAR TAREAS COMPLETADAS POR CATEGORIA
function filterCompletedTasks(categoryIndex) {
  let filteredTasks = filterTasksByCategory(categoryIndex)
  let completedTasks = filteredTasks.reduce((acc, task) => {
    return task.isCompleted === true ? acc += 1 : acc;
  }, 0);
  let totalTask = filteredTasks.length;
  console.log(`Tareas completadas de la categoria: ${categoryIndex}: ${completedTasks} de ${totalTask} tareas`);
}

// ------ FILTRAR TAREAS INCOMPLETAS
function filterIncompletedTasks() {
  console.log("Tareas aún no completadas");
  tasks.forEach(task => {
    if (!task.isCompleted) {
      console.log(`Tareas: ${task.name}, Categoria: ${categories[task.category]}`);
    }
  })
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
  8. Filtrar por categoria
  9. Cantidad de tareas completadas por categoria
  10. Tareas No completadas
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
    let taskIndex;
    let categoryIndex;
    switch (option) {
      case 1:
        let taskName = prompt("Ingrese el nombre de la tarea: ");
        addTask(taskName);
        break;
      case 2:
        showTaksIndex()
        taskIndex = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "))
        deleteTask(taskIndex);
        break;
      case 3:
        showTaksIndex()
        taskIndex = parseInt(prompt("Ingrese el indice de la tarea a completar: "))
        completeTask(taskIndex);
        break;
      case 4:
        showTaksIndex()
        taskIndex = parseInt(prompt("Ingrese el indice de la tarea a modificar: "))
        console.log("¿Qué propiedad desea modificar?");
        let option = parseInt(prompt("1.Nombre  2.Fecha limite 3.Categoria: "));
        switch (option) {
          case 1:
            let newTaskName = prompt("Ingrese el nuevo nombre de la tarea: ");
            modifyTask(taskIndex, newTaskName);
            break;
          case 2:
            let newDeadLine = prompt("Ingrese la nueva fecha limite: ");
            modifyTask(taskIndex, undefined, newDeadLine);
            break;
          case 3:
            showAllCategories()
            let newCategory = parseInt(prompt("Ingrese el indice de la nueva categoria: "));
            if (newCategory >= 0 && newCategory < categories.length) {
              modifyTask(taskIndex, undefined, undefined, newCategory)
            } else {
              console.log("Indice de categoria incorrecto");
            }
            break;
          default:
            console.log("Propiedad incorrecta");
            break;
        }
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
      case 8:
        showAllCategories()
        categoryIndex = parseInt(prompt("Ingresa el número de la categoria a filtrar: "))
        let filteredTasks = filterTasksByCategory(categoryIndex)
        console.log("Tareas de la categoria seleccionada");
        console.log(filteredTasks);
        break;
      case 9:
        categoryIndex = parseInt(prompt("Ingresa el número de la categoria a visualizar: "))
        filterCompletedTasks(categoryIndex)
        break;
      case 10:
        filterIncompletedTasks()
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