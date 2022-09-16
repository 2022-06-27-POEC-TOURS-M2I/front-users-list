export function TodoItem(todo, barrer = true) {
  return `<a href='pages/todos-details.html?id=${
    todo.id
  }'><div class="todo" ><p class="${
    !todo.completed && barrer ? "barre" : ""
  }">${todo.id} - ${todo.title}</p></a>`;
}
