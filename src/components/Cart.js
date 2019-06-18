import React, { Component } from "react";
import { connect } from "react-redux";
import { incQuant, decQuant, removeFromCart } from "../actions";
import CartItem from "./CartItem";

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

  renderCart() {
    return (
      <div className="cartList">
        {this.props.cartItems.map(cartItem => {
          return (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              items={this.props.items}
              IncQuant={() => this.handleIncQuant(cartItem)}
              DecQuant={() => this.handleDecQuant(cartItem)}
              RemoveItem={() => this.handleRemove(cartItem)}
            />
          );
        })}
        <hr />
        <div className="total">
          Total:
          <span>
            {this.props.cartItems.reduce((acc, item) => {
              return acc + item.price * item.quantity;
            }, 0)}
            $
          </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="col s2">
        <h4>Cart</h4>
        {this.renderCart()}
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
