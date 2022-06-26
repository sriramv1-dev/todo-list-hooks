import { createContext, useReducer } from "react";
import { TodoReducer } from "../reducers/todo-reducer";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const defaultTodos = [{ id: 1, task: "Do This", completed: false }];
  const [todos, dispatch] = useReducer(TodoReducer, defaultTodos);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
