import { CreateColumn } from "./js/components/create-column.js";

const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const country = document.querySelector("#country");
const submitButton = document.querySelector("#submit_button");
const usersTableBody = document.querySelector("#users_list");

const firstNameError = document.querySelector("#err_first_name");
const lastNameError = document.querySelector("#err_last_name");
const emailError = document.querySelector("#err_email");
const phoneNumberError = document.querySelector("#err_phone_number");
const countryError = document.querySelector("#err_country");

const formFields = [firstName, lastName, email, country, phoneNumber];

// # Tant que tous les champs ne sont pas remplis, ne rien ajouter au tableau
// # Les messages d'erreurs doivent disparaitre pour les champs remplis
//     Si dans une précédente validation ces champs étaient vides

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (!firstName.value) {
    firstNameError.innerText = "Prenom cannot be empty";
    firstNameError.style.color = "red";
  } else {
    firstNameError.innerText = "";
  }

  if (!lastName.value) {
    lastNameError.innerText = "Nom cannot be empty";
    lastNameError.style.color = "red";
  } else {
    lastNameError.innerText = "";
  }

  if (!email.value) {
    emailError.innerText = "Email cannot be empty";
    emailError.style.color = "red";
  } else {
    emailError.innerText = "";
  }

  if (!phoneNumber.value) {
    phoneNumberError.innerText = "Phone cannot be empty";
    phoneNumberError.style.color = "red";
  } else {
    phoneNumberError.innerText = "";
  }

  if (!country.value) {
    countryError.innerText = "Country ne peut pas être vide";
    countryError.style.color = "red";
  } else {
    countryError.innerText = "";
  }

  if (!formFields.some((field) => !field.value)) {
    const row = document.createElement("tr");
    for (const field of formFields) {
      const column = CreateColumn(field.value);
      row.appendChild(column);
    }

    usersTableBody.appendChild(row);
  }
  return;
});
