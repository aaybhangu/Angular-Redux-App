import { IAppState } from "../store/store";
import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { AddTodoAction } from "../store/action";
@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.css"]
})
export class CreateTodoComponent implements OnInit {
  todoTask = "";
  @select() todoList$;
  todoList = [];
  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    const storedList = localStorage.getItem("datalist")
      ? localStorage.getItem("datalist")
      : null;
    console.log("storedList === ", storedList);
    console.log("JSON.parse(storedList) === ", JSON.parse(storedList));
    if (storedList)
      this.ngRedux.dispatch(AddTodoAction(JSON.parse(storedList)));
    this.todoList$.subscribe(list => (this.todoList = list));
    console.log(this.todoList);
  }
  addTask() {
    const curDate = new Date().toLocaleString();

    const todoObj = { task: this.todoTask, date: curDate };

    this.ngRedux.dispatch(AddTodoAction(todoObj));

    localStorage.setItem("datalist", JSON.stringify(this.todoList));
    console.log(this.todoList);
  }
}
