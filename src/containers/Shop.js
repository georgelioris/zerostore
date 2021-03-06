import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { onlyUnique, sortAscend, sortDescend } from "../helpers";
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
          item => item.category === filters.categoryFilter
        );
  return filters.priceFilter === "Highest"
    ? sortDescend(visibleItems, "price")
    : filters.priceFilter === "Lowest"
    ? sortAscend(visibleItems, "price")
    : visibleItems;
};

const categories = itemsObj =>
  onlyUnique(Object.values(itemsObj).map(item => item.category));

const mapStateToProps = state => ({
  items: state.items,
  visibleItems: visibleItems(state.items, state.filters),
  cartItems: Object.values(state.cartItems),
  cartObject: state.cartItems,
  filters: state.filters,
  categories: categories(state.items)
});

const mapDispatchToProps = dispatch => ({
  handleItemClick: (item, cartObject) => {
    const itemInCart = cartObject[item.id];
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
});

Shop.propTypes = {
  filters: PropTypes.shape({
    categoryFilter: PropTypes.string
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
