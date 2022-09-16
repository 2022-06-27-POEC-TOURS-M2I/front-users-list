import { CreateButton } from "./js/components/button.js";
import { Table } from "./js/components/table.js";
import { FormErrorUtils } from "./js/utils/form-errors.js";
import { FormUtils } from "./js/utils/form-utils.js";

const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const country = document.querySelector("#country");
const submitButton = document.querySelector("#submit_button");
const usersTableBody = document.querySelector("#users_list");

const formFields = [firstName, lastName, email, country, phoneNumber];

// # Tant que tous les champs ne sont pas remplis, ne rien ajouter au tableau
// # Les messages d'erreurs doivent disparaitre pour les champs remplis
//     Si dans une précédente validation ces champs étaient vides
// #
// # Ajouter un bouton supprimer dans la colonne action
// # Supprimer la ligne quand on clique sur le bouton
// # Supprimer les messages d'erreur quand les champs sont valides

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (!FormUtils.isFormValid1(formFields)) {
    for (const field of formFields) {
      FormErrorUtils.displayErrorMessages(field);
    }
    return;
  }

  const columns = [];
  for (const field of formFields) {
    const column = Table.CreateColumn({ text: field.value });
    columns.push(column);
  }

  const deleteButton = CreateButton({
    text: "Supprimer",
    callback: Table.deleteRow,
  });

  const actionsColumn = Table.CreateColumn({
    button: deleteButton,
  });

  actionsColumn.appendChild(deleteButton);

  columns.push(actionsColumn);

  const row = Table.CreateRow(columns);

  usersTableBody.appendChild(row);

  FormUtils.emptyForm(formFields);
  FormErrorUtils.emptyErrors(formFields);
});

//

// function loopField(formFields, callback) {
//   for (const field of formFields) {
//     callback(field);
//   }
// }
