import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  selectCount,
} from "./counterReducer.js";
import "./counter.css";

// Creating objects and defining the actions in this file. The functionalities for the actions would be defined in the reducer file.
function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [decrementAmount, setDecrementAmount] = useState("2");

  return (
    <div className="container">
      <div className="row">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="value">{count}</span>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="row">
        <input
          className="textbox"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="button"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
      <div className="row">
        <input
          className="textbox"
          aria-label="Set decrement amount"
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(e.target.value)}
        />
        <button
          className="button"
          onClick={() =>
            dispatch(decrementByAmount(Number(decrementAmount) || 0))
          }
        >
          Reduce Amount
        </button>
      </div>
      <h3>Counter example using redux</h3>
      <p>
        Add redux dev tools add-on/plugin to your browser to track the state
        <br />
        changes and actions log while you click on the buttons.
      </p>
    </div>
  );
}

export default Counter;
