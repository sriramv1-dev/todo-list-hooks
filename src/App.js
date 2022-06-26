import "./App.css";
import TodoApp from "./todo-app/components/todo-app";
import ContextApp from "./context-app/components/context-app";
import ContextAppHooks from "./context-app-hooks/components/context-app";
import LearnReducer from "./learn-reducer-app/components/learn-reducer";

function App() {
  // return <LearnReducer />;
  return <TodoApp />;
  // return <ContextApp />;
  // return <ContextAppHooks />;
}

export default App;
