import React from "react";
import { connect } from "react-redux";
import { addToCart, incQuant, setVisibility } from "../actions";
// import Inventory from "./Inventory";
import ItemList from "../components/ItemList";
import ItemFilters from "../components/ItemFilters";
// import Cart from "./Cart";

const Shop = ({ ...props }) => (
  <div className="container">
    <h3>Items</h3>
    <ItemFilters {...props} />
    <ItemList {...props} />
  </div>
);

const visibleItems = (items, filter) => {
  const itemsArr = Object.values(items);
  return filter === "All"
    ? itemsArr
    : itemsArr.filter(i => i.category === filter);
};

const categories = items => {
  const itemsArr = Object.values(items);
  const categories = itemsArr.reduce(
    (acc, item) =>
      acc.find(category => category === item.category || item.category === "")
        ? acc
        : [...acc, item.category],
    []
  );
  return categories;
};

const mapStateToProps = state => {
  return {
    items: visibleItems(state.items, state.visibilityFilter),
    cartItems: state.cartItems,
    visibilityFilter: state.visibilityFilter,
    categories: categories(state.items)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleItemClick: (item, cartItems) => {
      const itemInCart = cartItems.find(cartItem => item.id === cartItem.id);
      return itemInCart
        ? dispatch(incQuant(itemInCart))
        : dispatch(addToCart(item));
    },
    setFilter: filter => {
      dispatch(setVisibility(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
