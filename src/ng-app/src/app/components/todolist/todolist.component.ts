import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoMessage: string;
  list = [];
  constructor() { }

  ngOnInit() {
  }
  submitMessage(event) {
    if (event.keyCode == 13) {
      this.list.push({name:this.todoMessage,status:0});
      this.todoMessage = '';
    }

  }
  deleteItem(index) {
    this.list.splice(index, 1);
  }
  changeStatus(index){
    this.list[index].status=1;
  }
}
