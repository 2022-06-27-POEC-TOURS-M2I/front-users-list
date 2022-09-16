import { TodoItem } from "../components/todo-item.js";
import todossService from "../services/todos.service.js";
import { getParams } from "../utils/get-param.js";

class TodosDetails {
  constructor(todossService) {
    this.id = getParams("id");
    this.$todosDetails = document.querySelector("#todos-details");
    this.todossService = todossService;
    this.todo = null;
  }

  async render() {
    this.todo = await this.todossService.fetchTodoById(this.id);
    this.$todosDetails.innerHTML = TodoItem(this.todo, false);
  }
}

const todossDetails = new TodosDetails(todossService);
todossDetails.render();
