import "./App.css";
import TodoApp from "./todo-app/components/todo-app";
import ContextApp from "./context-app/components/context-app";
import ContextAppHooks from "./context-app-hooks/components/context-app";
import ReducerApp from "./learn-reducer/components/reducer-app";

function App() {
  return <ReducerApp />;
  // return <TodoApp />;

  // return <ContextApp />;
  // return <ContextAppHooks />;
}

export default App;
