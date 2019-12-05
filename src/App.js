import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { Provider } from "react-redux";
import { initState } from "./preloadState";
import Navbar from "./components/Navbar";
import Shop from "./containers/Shop";
import Cart from "./containers/Cart";
import Inventory from "./containers/Inventory";
import ItemPage from "./containers/ItemPage";
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import "material-icons/iconfont/material-icons.css";
import history from "./history";

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
  countCart: Object.values(state.cartItems).reduce((acc, cartItem) => {
    return acc + cartItem.quantity;
  }, 0)
});

const ConnectedApp = connect(mapStateToProps)(App);

const store = createStore(rootReducer, initState);

export const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
};
