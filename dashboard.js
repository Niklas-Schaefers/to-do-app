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

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
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
  const checkboxInputs = document.querySelectorAll(".checkbox-group__input");
  checkboxInputs.forEach((checkboxInput) => {
    checkboxInput.onchange = () =>
      filterAndApplyToLocalStorage(checkboxInput.id);
  });
}

//check if items are completed or not (gets task from storage)
function filterAndApplyToLocalStorage(id) {
  console.log(id);
  const list = parseJSONFromLocalStorage("taskList", []);
  list.forEach((task) => {
    if (task.name === id) {
      task.completed = !task.completed;
    }
  });
  stringifyJSONToLocalStorage("taskList", list);
}
