import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";

class Home extends Component {
  addToCart = item => {
    this.props.addToCart(item);
    console.log(this.props.cartItems);
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
                  onClick={() => this.addToCart(item)}
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
        <h3>Home</h3>
        {this.renderItems()}
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
