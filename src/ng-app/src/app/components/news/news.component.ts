import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { UserService } from "../../service/user.service";
import { User } from "../../../model/user.model";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  //property define
  news = 'this is app-news';
  public name: string;
  private age: number = 20;
  protected address: string;//只能在该类及子类中使用
  Message: string = 'hello';
  public cities: any[]
  public users:User[];

  constructor(private uservice: UserService) {
    this.address = 'shanghai';
    this.name = 'jonny';
    this.Message = '<h3>add inner html</h3>';
    this.cities = ['shanghai', 'beijing', 'new york'];
    this.users=uservice.getUsers();

  }

  ngOnInit() {
  }

}
