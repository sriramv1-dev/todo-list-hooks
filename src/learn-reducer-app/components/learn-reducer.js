import React, { useReducer } from "react";
import { CountReducer } from "../reducers/count-reducer";
import "../../App.css";

// dispatch function loads the reducer with data for actions and
// the useReducer provides the state values to change.

const LearnReducer = (props) => {
  const [state, dispatch] = useReducer(CountReducer, { count: 0 });
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

export default LearnReducer;
