import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

//ACTION => DESCRIBES WHAT WE WANT TO DO | RETURNS AN OBJ
const icrementAction = () => {
  return {
    type: "INCREMENT"
  };
};

const decrementAction = () => {
  return {
    type: "DECREMENT"
  };
};

//REDUCER => USES 'ACTION' TO TRANSFORMS STATE
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    // no default
  }
  return state;
};

//STORE => GLOBALIZED STATE
let store = createStore(counterReducer);

//Display state from store
store.subscribe(() => console.log(store.getState()));

//DISPATCH => SEND OUR 'ACTION' TO THE 'REDUCER'
store.dispatch(icrementAction());
store.dispatch(decrementAction());
store.dispatch(icrementAction());
store.dispatch(icrementAction());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
