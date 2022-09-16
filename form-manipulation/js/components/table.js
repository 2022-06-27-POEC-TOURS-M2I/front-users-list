export class Table {
  static CreateColumn({ text = "", button = null }) {
    const column = document.createElement("td");
    if (button) {
      column.appendChild(button);
    }
    column.innerText = text;
    return column;
  }

  static CreateRow(columns) {
    const row = document.createElement("tr");
    for (let column of columns) {
      row.appendChild(column);
    }

    return row;
  }

  static deleteRow() {
    this.parentElement.parentElement.remove();
  }
}


