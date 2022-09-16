export class FormErrorUtils {
  static displayErrorMessages(field) {
    const fieldDisplayName = field.getAttribute("data-name");
    const errorField = document.querySelector(`#err_${field.name}`);
    if (!field.value) {
      errorField.innerText = `${fieldDisplayName} cannot be empty`;
      errorField.classList.add("error");
    } else {
      errorField.innerText = "";
    }
  }

  static emptyErrors(formFields) {
    for (const field of formFields) {
      document.querySelector(`#err_${field.name}`).innerText = "";
    }
  }
}
