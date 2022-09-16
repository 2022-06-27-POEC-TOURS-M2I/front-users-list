import { UserItem } from "../components/user-item.js";
import usersService from "../services/users.service.js";
import { getParams } from "../utils/get-param.js";

class UsersDetails {
  constructor(usersService) {
    this.id = getParams("id");
    this.$userDetails = document.querySelector("#user-details");
    this.usersService = usersService;
    this.user = null;
  }

  async render() {
    this.user = await this.usersService.fetchUserById(this.id);
    this.$userDetails.innerHTML = UserItem(this.user);
  }
}

const usersDetails = new UsersDetails(usersService);
usersDetails.render();
