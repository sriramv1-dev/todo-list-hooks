import {
  Paper,
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";
import useToggle from "../custom-hooks/useToggle";
import EditTodoForm from "./edit-todo-form";
import { TodoDispatchContext } from "../contexts/todo-context";
import { useContext } from "react";

const Todo = ({ id, task, completed }) => {
  const dispatch = useContext(TodoDispatchContext);
  const [isEditing, toggleEdit] = useToggle();

  return (
    <Paper>
      <ListItem style={{ height: "64px" }}>
        {isEditing ? (
          <EditTodoForm id={id} task={task} toggleEditForm={toggleEdit} />
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onChange={() => dispatch({ type: "TOGGLE", id })}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => dispatch({ type: "REMOVE", id })}>
                <DeleteIcon aria-label="Delete" />
              </IconButton>
              <IconButton onClick={toggleEdit}>
                <EditIcon aria-label="Edit" />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </Paper>
  );
};

export default Todo;
