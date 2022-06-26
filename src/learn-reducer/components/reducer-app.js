import React, { useReducer } from "react";
import "../../App.css";

// dispatch function loads the reducer with data for actions and
// the useReducer provides the state values to change.

const countReducer = (state, action) => {
  const { count } = state;
  const { type, value } = action;
  switch (type) {
    case "INCREMENT":
      return { count: count + value };
    case "DECREMENT":
      return { count: count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return { count: count };
  }
};

const ReducerApp = (props) => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        Subtract 1
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default ReducerApp;
