import { Injectable } from '@angular/core';
import { User } from "../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    let users: User[] = [
      { username: "jksd", email: '123@234.com', age: 12 },
      { username: "gtf", email: '9k8k@234.com', age: 96 },
      { username: "jksd", email: '5th6@234.com', age: 32 }
    ];
    return users;
  }
}
