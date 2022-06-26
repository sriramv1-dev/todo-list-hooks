import { TextField } from "@material-ui/core";
import useInputState from "../custom-hooks/useInputState";
import { TodoDispatchContext } from "../contexts/todo-context";
import { useContext } from "react";

const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const dispatch = useContext(TodoDispatchContext);
  const [editTask, handleEditTask, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id, newTask: editTask });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        value={editTask}
        margin="normal"
        label="Edit Todo"
        fullWidth
        onChange={handleEditTask}
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
