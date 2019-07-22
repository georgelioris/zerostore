import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import "material-icons";
import Navbar from "./components/Navbar";
import Shop from "./containers/Shop";
import Cart from "./containers/Cart";
import Inventory from "./containers/Inventory";
import ItemPage from "./containers/ItemPage";

const App = ({ ...props }) => (
  <Router history={history}>
    <div className="App">
      <Navbar {...props} />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Inventory" component={Inventory} />
        <Route path="/Shop/items/:id" component={ItemPage} />
      </Switch>
    </div>
  </Router>
);

const mapStateToProps = state => ({
  countCart: state.cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity;
  }, 0)
});

export default connect(mapStateToProps)(App);
