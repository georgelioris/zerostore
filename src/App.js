import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import history from "./history";
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import "material-icons";

const App = () => (
  <Router history={history}>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
