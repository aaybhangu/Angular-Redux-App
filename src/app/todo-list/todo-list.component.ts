import { IAppState } from "./../store/store";
import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  @select() todoList$;
  todoList = [];
  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.todoList$.subscribe(list => (this.todoList = list));
  }
}
