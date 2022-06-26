import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "./useLocalStorageState";

const useTodoState = (initialTodos = []) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false },
      ]);
    },

    removeTodo: (id) => {
      const updatedTodos = todos.filter((td) => td.id !== id);
      setTodos(updatedTodos);
    },

    toggleTodo: (id) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },

    editTodo: (id, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
};

export default useTodoState;
