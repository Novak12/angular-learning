import { Injectable } from '@angular/core';
import { User } from "../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]
  constructor() { }

  getUsers() {
    this.users = [
      { username: "jksd", email: '123@234.com', age: 12 },
      { username: "gr", email: '5th6@234.com', age: 32 }
    ];
    return this.users;
  }

  updateUserName(index, message) {
    this.users[index].username = message;
  }
}
