import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, incQuant, setVisibility } from "../actions";
import Cart from "./Cart";
import Inventory from "./Inventory";
import ItemList from "./ItemList";
import ItemFilters from "./ItemFilters";
import M from "materialize-css";

class Home extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  handleClick = item => {
    const itemInCart = this.props.cartItems.find(
      cartItem => item.id === cartItem.id
    );
    return itemInCart
      ? this.props.incQuant(itemInCart)
      : this.props.addToCart(item);
  };
  handleFilter = filter => {
    this.props.setVisibility(filter);
  };
  render() {
    return (
      <div className="row">
        <div className="col s10">
          <h3>Items</h3>
          <ItemFilters
            categories={this.props.filters}
            active={this.props.visibilityFilter}
            onClick={this.handleFilter}
          />
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
    items: visibleItems(state.items, state.visibilityFilter),
    cartItems: state.cartItems,
    visibilityFilter: state.visibilityFilter,
    filters: filters(state.items)
  };
};

const visibleItems = (items, filter) => {
  const itemsArr = Object.values(items);

  return filter === "All"
    ? itemsArr
    : itemsArr.filter(i => i.category === filter);
};

const filters = items => {
  const itemsArr = Object.values(items);
  const categories = itemsArr.reduce(
    (acc, item) =>
      acc.find(category => category === item.category)
        ? acc
        : [...acc, item.category],
    []
  );
  return categories;
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch(addToCart(item));
    },
    incQuant: item => {
      dispatch(incQuant(item));
    },
    setVisibility: filter => {
      dispatch(setVisibility(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
