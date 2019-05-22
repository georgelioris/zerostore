import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import "./index.css";
import { initState } from "./preloadState";
//import history from "./history";

/* eslint-disable no-underscore-dangle */
const store = createStore(reducer, initState);
console.log(store.getState());

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

render(<Root />, document.getElementById("root"));
