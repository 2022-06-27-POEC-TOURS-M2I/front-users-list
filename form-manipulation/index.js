const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const country = document.querySelector("#country");
const submitButton = document.querySelector("#submit_button");
const usersTableBody = document.querySelector("#users_list");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const row = document.createElement("tr");
  
  const firstNameColumn = document.createElement("td");
  firstNameColumn.innerText = firstName.value;

  const lastNameColumn = document.createElement("td");
  lastNameColumn.innerText = lastName.value;

  const emailColumn = document.createElement("td");
  emailColumn.innerText = email.value;

  const phoneNumberColumn = document.createElement("td");
  phoneNumberColumn.innerText = phoneNumber.value;

  const countryColumn = document.createElement("td");
  countryColumn.innerText = country.value;

  row.append(
    lastNameColumn,
    firstNameColumn,
    emailColumn,
    countryColumn,
    phoneNumberColumn
  );

  usersTableBody.appendChild(row);
});
