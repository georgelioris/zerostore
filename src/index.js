import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import "./index.css";
import { initState } from "./preloadState";

//import history from "./history";

const logger = store => next => action => {
  console.log("dispatching", action);
  let { item } = action;
  console.log("id", item.id);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

/* eslint-disable no-underscore-dangle */
const store = createStore(reducer, initState, applyMiddleware(logger, logger));
console.log(store.getState());

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

render(<Root />, document.getElementById("root"));
