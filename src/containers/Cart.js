import React from "react";
import { connect } from "react-redux";
import { incQuant, decQuant, removeFromCart } from "../actions";
import CartItemList from "../components/CartItemList";

const Cart = ({ ...props }) => {
  return (
    <main>
      <div className="container">
        <CartItemList {...props} />
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  items: state.items,
  cartItems: Object.values(state.cartItems)
});

const mapDispatchToProps = dispatch => ({
  incQuant: cartItem => {
    dispatch(incQuant(cartItem));
  },
  decQuant: cartItem => {
    dispatch(decQuant(cartItem));
  },
  removeFromCart: cartItem => {
    dispatch(removeFromCart(cartItem));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
