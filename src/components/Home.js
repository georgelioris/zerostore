import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, incQuant } from "../actions";
import Cart from "./Cart";
import Inventory from "./Inventory";

import ItemList from "./ItemList";

class Home extends Component {
  handleClick = item => {
    const itemInCart = this.props.cartItems.find(
      cartItem => item.id === cartItem.id
    );
    return itemInCart
      ? this.props.incQuant(itemInCart)
      : this.props.addToCart(item);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s10">
            <h3>Items</h3>
            <ItemList items={this.props.items} onClick={this.handleClick} />
            <Inventory />
          </div>
          <Cart />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: Object.values(state.items),
    cartItems: state.cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch(addToCart(item));
    },
    incQuant: item => {
      dispatch(incQuant(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
