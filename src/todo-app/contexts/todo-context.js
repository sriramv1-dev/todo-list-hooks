import { createContext, useReducer } from "react";
import { TodoReducer } from "../reducers/todo-reducer";

const defaultTodos = [{ id: 1, task: "Do This", completed: false }];

export const TodoContext = createContext();
export const TodoDispatchContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(TodoReducer, defaultTodos);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};
