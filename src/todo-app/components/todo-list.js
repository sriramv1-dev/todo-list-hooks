import React from "react";
import { List, Divider } from "@material-ui/core";
import Todo from "./todo";
import { TodoContext } from "../contexts/todo-context";
import { useContext } from "react";

const TodoList = (props) => {
  const todos = useContext(TodoContext);
  if (todos.length > 0) {
    return (
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={i}>
            <Todo {...todo} key={todo.id} />
            {i < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    );
  }
  return null;
};

export default TodoList;
