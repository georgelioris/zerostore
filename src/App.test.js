import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./App";

it("renders without crashing", () => {
  const root = document.createElement("root");
  ReactDOM.render(<Root />, root);
  ReactDOM.unmountComponentAtNode(root);
});
