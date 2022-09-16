export function CreateColumn(textContent) {
  const column = document.createElement("td");
  column.innerText = textContent;
  return column;
}
