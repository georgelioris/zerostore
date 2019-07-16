import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import "material-icons";
import Navbar from "./components/Navbar";
import Shop from "./containers/Shop";
import Cart from "./containers/Cart";
import Inventory from "./containers/Inventory";

const App = () => (
  <Router history={history}>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Inventory" component={Inventory} />
      </Switch>
    </div>
  </Router>
);

export default App;
