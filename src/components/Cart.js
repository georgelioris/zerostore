import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  renderCart() {
    return (
      <div className="cartList">
        {this.props.cartItems.map(cartItem => {
          return (
            <div className="card grey darken-1" key={cartItem.id}>
              <div className="card-content white-text">
                <span className="card-title">{cartItem.title}</span>
                <div className="action">
                  <span>{cartItem.quantity}</span>
                  <span> x </span>
                  <span>{cartItem.price}$</span>
                </div>
              </div>
            </div>
          );
        })}
        <hr />
        <span>Total:$$</span>
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
    cartItems: state.cartItems,
    cartTotal: state.items.cartTotal
  };
};

export default connect(mapStateToProps)(Cart);
