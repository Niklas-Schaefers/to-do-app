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

const heatTeeElement = createTaskElement("Tee kochen");
const drinkTeeElement = createTaskElement("Tee trinken");

const tasksGroupElement = document.querySelector(".checkbox-group");

tasksGroupElement.append(heatTeeElement, drinkTeeElement);
