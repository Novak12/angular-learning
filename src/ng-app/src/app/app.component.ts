import { Component } from '@angular/core';
import { User } from "../model/user.model";
import { UserService } from "./service/user.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  users: User[];

  constructor(private userService: UserService) {
    this.users = userService.getUsers();
  }

  onUpdate(id, text) {
    this.userService.updateUserName(id, text);
  }
}
