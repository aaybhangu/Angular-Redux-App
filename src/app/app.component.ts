import { Map } from "immutable";
import { IncrementAction } from "./store/action";
import { IAppState } from "./store/store";
import { NgRedux, select } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { bindActionCreators } from "redux";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Angular-Redux-App";

  @select() counter$;
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {}
  ngOnInit() {
    this.counter$.subscribe(count => (this.counter = count));
  }
  increment() {
    this.ngRedux.dispatch(IncrementAction(this.counter));
  }
}
