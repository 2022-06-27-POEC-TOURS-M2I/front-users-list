function emptyForm(formFields) {
  for (let formField of formFields) {
    formField.value = "";
  }
}

function isFormValid(formFields) {
  for (let formField of formFields) {
    if (!formField.value) {
      return false;
    }
  }
  return true;
}

function displayErrorMessages(field) {
  const fieldDisplayName = field.getAttribute("data-name");
  const errorField = document.querySelector(`#err_${field.name}`);
  if (!field.value) {
    errorField.innerText = `${fieldDisplayName} cannot be empty`;
    errorField.classList.add("error");
    return;
  }
  errorField.innerText = "";
  errorField.classList.remove("error");
}

function createColumn({ text = "", button = null }) {
  const column = document.createElement("td");
  if (button) {
    column.appendChild(button);
  }
  column.innerText = text;
  return column;
}

function createRow(columns) {
  const row = document.createElement("tr");
  for (let column of columns) {
    row.appendChild(column);
  }

  return row;
}

function createButton({ text, callback }) {
  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", callback);
  return button;
}

function deleteUserRow() {
  this.parentElement.parentElement.remove();
}
