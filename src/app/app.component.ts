import { Map } from "immutable";
import { IncrementAction } from "./store/action";
import { IAppState } from "./store/store";
import { NgRedux, select } from "@angular-redux/store";
import { Component } from "@angular/core";
import { bindActionCreators } from "redux";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular-Redux-App";

  @select() counter;

  constructor(private ngRedux: NgRedux<IAppState>) {}
  increment() {
    this.ngRedux.dispatch(IncrementAction(this.counter));
  }
}
