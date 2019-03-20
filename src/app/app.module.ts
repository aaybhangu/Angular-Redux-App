import { IAppState, store } from "./store/store";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { CreateTodoComponent } from "./create-todo/create-todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
@NgModule({
  declarations: [AppComponent, CreateTodoComponent, TodoListComponent],
  imports: [BrowserModule, NgReduxModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
