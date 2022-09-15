import { UserRow } from "../components/user-row.js";
import { UsersService } from "../services/users.service.js";

class Index {
  constructor() {
    this.users = [];
    this.userService = new UsersService();
    this.$users = document.querySelector("#users");
  }

  async render() {
    this.users = await this.userService.fetchUsers();
    for (let user of this.users) {
      const row = UserRow(user);
      this.$users.appendChild(row);
    }
  }
}

const index = new Index();
index.render();

//   # Ajouter page appelé : users-details.html
//   # Ajouter dans l'en-tête du tableau une colonne Actions
//   # Pour chaque user ajouter dans la colonne un lien avec
//      le text `voir` et redirige vers la page `users-details.html`
//      en passant l'id comme paramètre de l'url(ex : ?id=1)
//   # Dans la page 2, faire des recherches sur l'utilisation
//  URLSearchParam pour pouvoir récupérer l'ID afin de l'utiliser
//  Pour faire un appel HTTP et récupérer un user par son id
// Puisser afficher le résultat dans une UI de votre choix
