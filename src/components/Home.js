import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, incQuant } from "../actions";
import Cart from "./Cart";
import Inventory from "./Inventory";

import ItemList from "./ItemList";

class Home extends Component {
  handleClick = item => {
    const itemInCart = this.props.cartItems.find(
      cartItem => item.id === cartItem.id
    );
    return itemInCart
      ? this.props.incQuant(itemInCart)
      : this.props.addToCart(item);
  };

  render() {
    return (
      <div className="row">
        <div className="col s10">
          <ItemList items={this.props.items} onClick={this.handleClick} />
          <Inventory />
        </div>
        <div className="col s2">
          <Cart />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: getItems(state.items, "SHOW_ALL"),
    cartItems: state.cartItems
  };
};

const getItems = (items, filter) => {
  const itemsArr = Object.values(items);
  switch (filter) {
    case "SHOW_ALL":
      return itemsArr;
    case "SHOW_NEW":
      return itemsArr.filter(i => i.category === "New");
    case "SHOW_ON_SALE":
      return itemsArr.filter(i => i.category === "On Sale");
    case "SHOW_WINTER":
      return itemsArr.filter(i => i.category === "Winter");
    case "SHOW_SUMMER":
      return itemsArr.filter(i => i.category === "Summer");
    default:
      return itemsArr;
  }
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
