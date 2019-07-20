import React, { useEffect } from "react";
import { connect } from "react-redux";
import { unique } from "../helpers";
import {
  addToCart,
  removeFromCart,
  incQuant,
  setCategoryFilter,
  setPriceFilter
} from "../actions";
// import Inventory from "./Inventory";
import ItemCardList from "../components/ItemCardList";
import FilterList from "../components/FilterList";
import SideCart from "../components/SideCart";
import M from "materialize-css";

const Shop = ({ ...props }) => {
  useEffect(() => {
    M.AutoInit();
    const sideCart = document.getElementById("slide-out");
    M.Sidenav.init(sideCart, { edge: "right" });
  }, []);
  return (
    <main>
      <SideCart {...props} />
      <div className="container">
        <h4>{props.filters.categoryFilter} Items</h4>
        <FilterList {...props} />
        <ItemCardList {...props} />
      </div>
    </main>
  );
};

const visibleItems = (itemsObj, filters) => {
  const itemsArr =
    filters.categoryFilter === "All"
      ? Object.values(itemsObj)
      : Object.values(itemsObj).filter(
          i => i.category === filters.categoryFilter
        );
  return filters.priceFilter === "low"
    ? itemsArr.sort((a, b) => a.price - b.price)
    : filters.priceFilter === "high"
    ? itemsArr.sort((a, b) => b.price - a.price)
    : itemsArr;
};

const categories = itemsObj => {
  const itemsArr = Object.values(itemsObj);
  const categories = itemsArr.reduce(
    (acc, item) => [...acc, item.category],
    []
  );
  return categories.filter(unique).filter(Boolean);
};

const mapStateToProps = state => {
  return {
    items: state.items,
    visibleItems: visibleItems(state.items, state.filters),
    cartItems: state.cartItems,
    filters: state.filters,
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
    removeFromCart: cartItem => {
      dispatch(removeFromCart(cartItem));
    },
    setCategoryFilter: filter => {
      dispatch(setCategoryFilter(filter));
    },
    setPriceFilter: cartItem => {
      dispatch(setPriceFilter(cartItem));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
