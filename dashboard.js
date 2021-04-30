function createTaskElement(taskName) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkbox-group__input";

  span.className = "checkbox-group__title";
  span.innerText = taskName;

  label.append(input, span);
  return label;
}

function parseJSONFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

// Get Array with task Objects from localStorage
const taskList = parseJSONFromLocalStorage("taskList", []);

// Create taskElements array consisting of html elements base on the taskList
const taskElements = taskList.map(function (task) {
  return createTaskElement(task.name);
});

// Get parent element of tasks
const tasksGroupElement = document.querySelector(".checkbox-group");

// Append all elements in taskElement to task group
tasksGroupElement.append(...taskListElements);

// select all date radio buttons
const radioButtons = document.querySelectorAll(".radio-group__input");

console.log(radioButtons);

// add what should onchange to these radio buttons
radioButtons.forEach(radioButton => {
  radioButton.onchange = () => console.log(radioButton.value);
};