import React, { Component } from "react";
import { connect } from "react-redux";
import { incQuant, decQuant, removeFromCart } from "../actions";
import CartItemList from "./CartItemList";

class Cart extends Component {
  handleIncQuant = item => {
    this.props.incQuant(item);
  };
  handleDecQuant = item => {
    const quantCheck =
      this.props.cartItems.find(cartItem => item.id === cartItem.id).quantity >
      1;
    return quantCheck
      ? this.props.decQuant(item)
      : this.props.removeFromCart(item);
  };
  handleRemove = item => {
    this.props.removeFromCart(item);
  };

  render() {
    return (
      <div className="col s2">
        <h4>Cart</h4>
        <CartItemList
          cartItems={this.props.cartItems}
          items={this.props.items}
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
    incQuant: item => {
      dispatch(incQuant(item));
    },
    decQuant: item => {
      dispatch(decQuant(item));
    },
    removeFromCart: item => {
      dispatch(removeFromCart(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
