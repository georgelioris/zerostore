import React, { Component } from "react";
import { connect } from "react-redux";
import { incQuant, decQuant, removeFromCart } from "../actions";
import Icon from "@material-ui/core/Icon";

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
  handleRemoveFromCart = item => {
    this.props.removeFromCart(item);
  };

  renderCart() {
    return (
      <div className="cartList">
        {this.props.cartItems.map(cartItem => {
          return (
            <div className="card grey darken-1" key={cartItem.id}>
              <div className="card-content white-text">
                <span className="card-title">
                  {this.props.items.find(item => cartItem.id === item.id).title}
                  <div className="remove">
                    <span onClick={() => this.handleRemoveFromCart(cartItem)}>
                      <Icon>clear</Icon>
                    </span>
                  </div>
                </span>

                <div className="action">
                  <span onClick={() => this.handleDecQuant(cartItem)}>
                    <Icon>remove_circle</Icon>
                  </span>
                  <span className="quantity">{cartItem.quantity}</span>
                  <span onClick={() => this.handleIncQuant(cartItem)}>
                    <Icon>add_circle</Icon>
                  </span>
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
