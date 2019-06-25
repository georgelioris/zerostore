import React, { Component } from "react";
import { connect } from "react-redux";
import { incQuant, decQuant, removeFromCart } from "../actions";
import CartItemList from "./CartItemList";

class Cart extends Component {
  handleIncQuant = cartItem => {
    this.props.incQuant(cartItem);
  };
  handleDecQuant = cartItem => {
    const quantCheck = cartItem.quantity > 1;
    return quantCheck
      ? this.props.decQuant(cartItem)
      : this.props.removeFromCart(cartItem);
  };
  handleRemove = cartItem => {
    this.props.removeFromCart(cartItem);
  };

  render() {
    return (
      <div className="col s2">
        <h4>Cart</h4>
        <CartItemList
          {...this.props}
          IncQuant={this.handleIncQuant}
          DecQuant={this.handleDecQuant}
          RemoveItem={this.handleRemove}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    cartItems: state.cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incQuant: cartItem => {
      dispatch(incQuant(cartItem));
    },
    decQuant: cartItem => {
      dispatch(decQuant(cartItem));
    },
    removeFromCart: cartItem => {
      dispatch(removeFromCart(cartItem));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
