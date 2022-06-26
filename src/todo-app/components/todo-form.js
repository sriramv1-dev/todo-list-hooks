import { Paper, TextField } from "@material-ui/core";
import useInputState from "../custom-hooks/useInputState";
import { TodoContext } from "../contexts/todo-context";
import { useContext } from "react";

const TodoForm = (props) => {
  const { addTodo } = useContext(TodoContext);
  const [value, handleChange, reset] = useInputState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={onSubmit} style={{ height: "64px" }}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
