import React, { Component } from "react";
import { connect } from "react-redux";
import { INC_QUANT } from "../constants";

class Cart extends Component {
  renderCart() {
    return (
      <div className="cartList">
        {this.props.cartItems.map(cartItem => {
          return (
            <div className="card grey darken-1" key={cartItem.id}>
              <div className="card-content white-text">
                <span className="card-title">
                  {this.props.items.find(item => cartItem.id === item.id).title}

                  <span> &times; </span>
                  <span>{cartItem.quantity}</span>
                </span>
                <div className="action">
                  <br />
                  <span>Subtotal: {cartItem.price * cartItem.quantity}$</span>
                </div>
              </div>
            </div>
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
    cartItems: state.cartItems,
    cartTotal: state.items.cartTotal
  };
};

export default connect(mapStateToProps)(Cart);
