import { createContext } from "react";
import useTodoState from "../custom-hooks/useTodoState";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const initialTodos = [{ id: 1, task: "Do This", completed: false }];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(initialTodos);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
