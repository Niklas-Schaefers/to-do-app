// function createTaskElement(task) {
//   const label = document.createElement("label");
//   const input = document.createElement("input");
//   const span = document.createElement("span");

//   input.type = "checkbox";
//   input.className = "checkbox-group__input";

//   span.className = "checkbox-group__title";
//   span.innerText = task.taskName;
//   input.checked = task.completed;

//   label.append(input, span);
//   return label;
// }

// function parseJSONFromLocalStorage(key, defaultValue) {
//   const json = localStorage.getItem(key);
//   if (json === null) {
//     return defaultValue;
//   }
//   const data = JSON.parse(json);
//   return data;
// }

// function stringifyJSONToLocalStorage(key, value) {
//   const json = JSON.stringify(value);
//   localStorage.setItem(key, json);
// }

// // // Get Array with task Objects from localStorage
// const taskList = parseJSONFromLocalStorage("taskList", []);

// // // Create taskElements array consisting of html elements base on the taskList
// // const taskElements = taskList.map(function (task) {
// //   return createTaskElement(task.name);
// // });

// // // Get parent element of tasks
// // const tasksGroupElement = document.querySelector(".checkbox-group");

// // // Append all elements in taskElement to task group
// // tasksGroupElement.append(...taskListElements);

// // // select all date radio buttons
// // const radioButtons = document.querySelectorAll(".radio-group__input");

// // console.log(radioButtons);

// // // add what should onchange to these radio buttons
// // radioButtons.forEach(radioButton => {
// //   radioButton.onchange = () => console.log(radioButton.value);
// // };

// /////////////////////////////////////////////////
// /// NEW FUNC
// function filterAndAppendDate(TaskDate) {
//   const tasksWithSelectedDate = taskList.filter(
//     (task) => task.dateInput === TaskDate
//   );
//   const taskElements = tasksWithSelectedDate.map(function (task) {
//     return createTaskElement(task);
//   });
//   const tasksGroupElement = document.querySelector(".checkbox-group");
//   removeAllChildNodes(tasksGroupElement);
//   tasksGroupElement.append(...taskElements);
// }
// // Wählt die input-Elemente aller radiobuttons
// const dateInputs = document.querySelectorAll(".radio-group__input");
// // Für jeden Eintrag in dieser Liste wird eine Aktion ausgeführt
// dateInputs.forEach((dateInput) => {
//   dateInput.onchange = () => filterAndAppendDate(dateInput.value);
// });

// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// }

// Wählt die input-Elemente aller radiobuttons
const dateInputs = document.querySelectorAll(".radio-group__input");
// Für jeden Eintrag in dieser Liste wird eine Aktion ausgeführt
dateInputs.forEach((dateInput) => {
  dateInput.onchange = () => filterAndAppendDate(dateInput.value);
});

//create HTML Task
function filterAndAppendDate(TaskDate) {
  const taskList = parseJSONFromLocalStorage("taskList", []);
  const tasksDate = taskList.filter((task) => task.date === TaskDate);
  const taskElements = tasksDate.map(function (task) {
    return createTaskElement(task);
  });
  const tasksGroupElement = document.querySelector(".checkbox-group");
  removeAllChildren(tasksGroupElement);
  tasksGroupElement.append(...taskElements);
  applyOnClickToCheckboxes();
}

function createTaskElement(task) {
  //Create Elements for HTML
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  //fills Element with attributes
  input.type = "checkbox";
  input.className = "checkbox-group__input";
  input.checked = task.completed;
  input.id = task.name;

  //define input and span as child of the parent label
  span.className = "checkbox-group__title";
  span.innerText = task.name;

  label.append(input, span);
  return label;
}
// get values of the key "taskList" from the browser-storage and convert/parse this value to an object
function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  // if no tasks in array set defaultValue
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}
//get array with task objects from local Storage
//create taskElements array consisting of html elements base on the ...
function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function applyOnClickToCheckboxes() {
  const radioInputs = document.querySelectorAll(".checkbox-group__input");
  radioInputs.forEach((radioInput) => {
    radioInput.onclick = () => filterAndApplyToLocalStorage(radioInput);
  });
}

//check if items are completed or not (gets task from storage)
function filterAndApplyToLocalStorage(inputElement) {
  const list = parseJSONFromLocalStorage("taskList", []);
  list.forEach((task) => {
    if (task.name === inputElement.id) {
      task.completed = !task.completed;
    }
  });
  stringifyJSONToLocalStorage("taskList", list);
}
function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
