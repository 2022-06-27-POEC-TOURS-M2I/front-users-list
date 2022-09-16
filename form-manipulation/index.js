const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const country = document.querySelector("#country");
const submitButton = document.querySelector("#submit_button");
const usersTableBody = document.querySelector("#users_list");

const formFields = [firstName, lastName, email, phoneNumber, country];

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const row = document.createElement("tr");

  for (const field of formFields) {
    const column = CreateColumn(field.value);
    row.appendChild(column);
  }

  usersTableBody.appendChild(row);
});

function CreateColumn(textContent) {
  const column = document.createElement("td");
  column.innerText = textContent;
  return column;
}
