import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import SideCartItemList from "../components/SideCartItemList";

const SideCart = ({ ...props }) => {
  return <SideCartItemList {...props} />;
};

const mapStateToProps = state => {
  return {
    items: state.items,
    cartItems: state.cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: cartItem => {
      dispatch(removeFromCart(cartItem));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideCart);
