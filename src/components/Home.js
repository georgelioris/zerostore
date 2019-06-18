import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, incQuant } from "../actions";
import Cart from "./Cart";
import Inventory from "./Inventory";
import ItemList from "./ItemList";

class Home extends Component {
  handleClick = item => {
    //Check if the item is already in cart
    const itemInCart = this.props.cartItems.find(
      cartItem => item.id === cartItem.id
    );
    //If true, increase quantity
    //Else, add it in cart
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
          </div>
          <Cart />
        </div>
        <Inventory />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    cartItems: state.cartItems,
    cartTotal: state.items.cartTotal
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
