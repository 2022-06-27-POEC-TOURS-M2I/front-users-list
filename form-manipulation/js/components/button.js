export function CreateButton({ text, callback }) {
  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", callback);
  return button;
}
