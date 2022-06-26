import { AppBar, Grid, Paper, Toolbar, Typography } from "@material-ui/core";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";
import { TodoContextProvider } from "../contexts/todo-context";

const TodoApp = () => {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="secondary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">To Do With Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoContextProvider>
            <TodoForm />
            <TodoList />
          </TodoContextProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
