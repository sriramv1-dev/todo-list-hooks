import { Paper, TextField } from "@material-ui/core";
import useInputState from "../custom-hooks/useInputState";
import { TodoDispatchContext } from "../contexts/todo-context";
import { useContext } from "react";

const TodoForm = (props) => {
  const dispatch = useContext(TodoDispatchContext);
  const [value, handleChange, reset] = useInputState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", newTask: value });
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
