import { createStore, Store } from "redux";
import { rootReducers } from "./reducers";
export interface IAppState {
  counter: number;
  todoList: [];
}

export const store = createStore(rootReducers) as Store<IAppState>;
