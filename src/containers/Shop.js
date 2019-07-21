import React, { useEffect } from "react";
import { connect } from "react-redux";
import { onlyUnique, sortHigh, sortLow } from "../helpers";
import {
  addToCart,
  removeFromCart,
  incQuant,
  setCategoryFilter,
  setPriceFilter
} from "../actions";
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
  const visibleItems =
    filters.categoryFilter === "All"
      ? Object.values(itemsObj)
      : Object.values(itemsObj).filter(
          i => i.category === filters.categoryFilter
        );
  return filters.priceFilter === "low"
    ? sortHigh(visibleItems)("price")
    : filters.priceFilter === "high"
    ? sortLow(visibleItems)("price")
    : visibleItems;
};

const categories = itemsObj => {
  const itemsArr = Object.values(itemsObj);
  const categories = itemsArr.reduce(
    (acc, item) => [...acc, item.category],
    []
  );
  return onlyUnique(categories);
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
