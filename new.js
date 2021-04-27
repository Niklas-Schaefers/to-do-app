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
const taskNameInput = document.querySelector(".add-new");
const formElement = document.querySelector(".formNewPage");

formElement.onsubmit = function (event) {
  event.preventDefault();
  const checkedDateInput = document.querySelector(
    ".radioContainer__input:checked"
  );

  console.log(taskNameInput.value, checkedDateInput.value);
};
