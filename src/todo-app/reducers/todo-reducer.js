import { v4 as uuidv4 } from "uuid";

export const TodoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        { id: uuidv4(), task: action.newTask, completed: false },
      ];
    case "REMOVE":
      return todos.filter((td) => td.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return todos;
  }
};
