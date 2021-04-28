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
  } else {
    const task = {
      taskName: taskNameInput.value,
      dateInput: checkedDateInput.value,
    };

    const taskJSON = JSON.stringify(task);
    localStorage.setItem("task", taskJSON);
  }
};
