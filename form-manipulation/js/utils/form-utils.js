import { FormErrorUtils } from "./form-errors.js";

export class FormUtils {
  static emptyForm(formFields) {
    for (let formField of formFields) {
      formField.value = "";
    }
  }

  static isFormValid1(formFields) {
    // return formFields.every((field) => field.value);
    return formFields.every((field) => field.value !== "");
  }

  static isFormValid2(formFields) {
    for (const field of formFields) {
      if (!field.value) {
        return false;
      }
    }
    return true;
  }
}
