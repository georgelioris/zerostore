import React from "react";
import { connect } from "react-redux";
import { incQuant, decQuant, removeFromCart } from "../actions";
import CartItemList from "../components/CartItemList";

const Cart = ({ ...props }) => {
  return (
    <div className="container">
      <CartItemList {...props} />
    </div>
  );
};

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
