export const IncrementAction = counter => {
  return {
    type: "INCREMENT",
    payload: counter
  };
};
export const AddTodoAction = todoList => {
  return {
    type: "ADD_TODO",
    payload: todoList
  };
};
