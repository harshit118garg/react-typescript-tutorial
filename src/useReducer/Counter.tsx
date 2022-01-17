import { type } from "os";
import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

/* 
    since payload becomes useless in reset acction so we create 2 new Action types as UpdateAction type & ResetAction type and pass the necessary actions in them making the payload's behaviour as bogus and finally assigning these both Actio types to the original CounterAction in discriminated union approach 
*/

type UpdateAction = {
  type: "INC" | "DEC";
  payload: number;
};

type ResetAction = {
  type: "RESET";
};

type CounterAction = UpdateAction | ResetAction; // discriminated unios approach

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  // due to type inference we need to specify the type of props in the reducer function
  switch (action.type) {
    case "INC":
      return { count: state.count + action.payload };

    case "DEC":
      return { count: state.count - action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2 className="display-4">
        Basic Counter <code>Use Reducer Hook</code>
      </h2>
      <div className="container">
        <div className="row d-flex justify-content-center align-content-center">
          <h2 className="display-3">Count : {state.count} </h2>
          <button
            className="btn btn-warning col-md-3 btn-lg mx-2"
            onClick={() => dispatch({ type: "INC", payload: 10 })}
          >
            Increment by 10
          </button>
          <button
            className="btn btn-warning col-md-3 btn-lg mx-2"
            onClick={() => dispatch({ type: "DEC", payload: 10 })}
          >
            Decrement by 10
          </button>
          <button
            className="btn btn-warning col-md-3 btn-lg mx-2"
            onClick={() => dispatch({ type: "RESET" })}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
