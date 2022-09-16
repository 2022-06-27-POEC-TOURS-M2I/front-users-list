import { TodoItem } from "../components/todo-item.js";
import todosService from "../services/todos.service.js";

class Index {
  constructor(todoservice) {
    this.todos = [];
    this.$todos = document.querySelector("#todos");
    this.todoservice = todoservice;
  }

  async render() {
    this.todos = await this.todoservice.fetchTodos();
    for (let todo of this.todos) {
      const row = TodoItem(todo);
      this.$todos.innerHTML += row;
    }
  }
}

const index = new Index(todosService);
index.render();

//   # Ajouter page appelé : todos-details.html
//   # Ajouter dans l'en-tête du tableau une colonne Actions
//   # Pour chaque todo ajouter dans la colonne un lien avec
//      le text `voir` et redirige vers la page `todos-details.html`
//      en passant l'id comme paramètre de l'url(ex : ?id=1)
//   # Dans la page 2, faire des recherches sur l'utilisation
//  URLSearchParam pour pouvoir récupérer l'ID afin de l'utiliser
//  Pour faire un appel HTTP et récupérer un todo par son id
// Puisser afficher le résultat dans une UI de votre choix
