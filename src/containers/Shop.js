import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart, incQuant, setVisibility } from "../actions";
// import Inventory from "./Inventory";
import ItemCardList from "../components/ItemCardList";
import FilterList from "../components/FilterList";
import SideCart from "../components/SideCart";
import M from "materialize-css";

const Shop = ({ ...props }) => {
  useEffect(() => {
    const sideCart = document.getElementById("slide-out");
    M.Sidenav.init(sideCart, { edge: "right" });
  }, []);
  return (
    <div>
      <SideCart {...props} />
      <div className="container">
        <h4>{props.visibilityFilter} Items</h4>
        <FilterList {...props} />
        <ItemCardList {...props} />
      </div>
    </div>
  );
};

const visibleItems = (itemsObj, filter) => {
  const itemsArr = Object.values(itemsObj);
  return filter === "All"
    ? itemsArr
    : itemsArr.filter(i => i.category === filter);
};

const categories = itemsObj => {
  const itemsArr = Object.values(itemsObj);
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
    items: state.items,
    visibleItems: visibleItems(state.items, state.visibilityFilter),
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
    },
    removeFromCart: cartItem => {
      dispatch(removeFromCart(cartItem));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
