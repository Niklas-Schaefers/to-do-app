// // Query elements from DOM
// const taskNameInput = document.querySelector(".add-new");
// const submitTaskInput = document.querySelector(".addtaskButton");

// function handleClick() {
//   const checkedDateInput = document.querySelector(
//     ".radioContainer__input:checked"
//   );
//   console.log(taskNameInput.value, checkedDateInput.value);
// }

// submitTaskInput.onclick = handleClick;

// const submitTaskInput = document.querySelector(".addtaskButton");

// formElement.onsubmit = function (event) {
//   event.preventDefault();
//   const taskNameInput = document.querySelector(".add-new");
//   const checkedDateInput = document.querySelector(
//     ".radioContainer__input:checked"
//   );
//   if (checkedDateInput !== null && !taskNameInput.value) {
//     alert(taskNameInput.value + " " + checkedDateInput.value);
//   } else {
//     alert("Ups, please fill in task and select date");
//   }
// };

const formElement = document.querySelector(".formNewPage");

formElement.onsubmit = function (event) {
  //Prevent the default form submit behavior (sending data to a server an reloading page)
  event.preventDefault();

  const taskNameInput = document.querySelector(".add-new");
  const checkedDateInput = document.querySelector(
    ".radioContainer__input:checked"
  );

  if (!taskNameInput.value) {
    console.log("Text input is empty");
    return;
  } else if (!checkedDateInput) {
    console.log("Select date is empty");
    return;
  }
  const task = {
    taskName: taskNameInput.value,
    dateInput: checkedDateInput.value,
    completed: false,
  };
  // const taskJSON = JSON.stringify(task);
  // localStorage.setItem("task", taskJSON);

  // Get existing taskList (localStorage.getItem, JSON.parse)
  // const taskList - ???;

  // const taskArray = JSON.parse(localStorage.getItem("taskList"));
  // if (!taskArray) {
  //   localStorage.setItem("taskList", "[]");
  //   taskArray = JSON.parse(localStorage.getItem("taskList"));
  // }
  // // Append new task to exsiting taskList
  // taskArray.push(task);

  // // Save updated taskList (localStorage.setItem, JSON.stringify)
  // localStorage.setItem("taskList", JSON.stringify(taskArray));

  function parseJSONFromLocalStorage(key, defaultValue) {
    const json = localStorage.getItem(key);
    if (json === null) {
      return defaultValue;
    }
    const data = JSON.parse(json);
    return data;
  }

  function appendToArray(item, array) {
    return [...array, item];
  }

  function stringifyJSONToLocalStorage(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  }

  function goToPage(href) {
    location.href = href;
  }

  const taskList = parseJSONFromLocalStorage("taskList", []);
  const newTasklist = appendToArray(task, taskList); //[...taskList, task];
  stringifyJSONToLocalStorage("taskList", newTasklist);
  goToPage("/dashboard.html");
};
