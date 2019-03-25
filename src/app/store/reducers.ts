import { combineReducers } from "redux";

function todoReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, ...action.payload];
    default:
      return state;
  }
}

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return action.payload + 1;
    //return Object.assign({}, state, { counter: state.counter + 1 });
    // return tassign(state, { counter: state.counter + 1 });
    //return state.set("counter", state.get("counter") + 1);
    default:
      return state;
  }
}

export const rootReducers = combineReducers({
  counter: counterReducer,
  todoList: todoReducer
});
