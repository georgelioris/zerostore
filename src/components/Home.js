import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, incQuant } from "../actions";
import Cart from "./Cart";

class Home extends Component {
  handleClick = item => {
    //Check if the item is already in cart
    const itemInCart = this.props.cartItems.find(
      cartItem => item.id === cartItem.id
    );
    //If item is allready in cart increase quantity
    //Else add it in cart
    return itemInCart
      ? this.props.incQuant(itemInCart)
      : this.props.addToCart(item);
  };

  renderItems() {
    return (
      <div className="item-container">
        {this.props.items.map(item => {
          return (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                <span className="card-title">{item.title}</span>
                <span
                  to="/"
                  className="btn-floating halfway-fab waves-effect waves-light red"
                  onClick={() => this.handleClick(item)}
                >
                  <i className="material-icons">add</i>
                </span>
              </div>

              <div className="card-content">
                <p>{item.desc}</p>
                <p>
                  <b>Price: {item.price}$</b>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s10">
            <h3>Items</h3>
            {this.renderItems()}
          </div>
          <Cart />
        </div>
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
