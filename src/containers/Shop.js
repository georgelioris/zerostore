import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart, incQuant, setVisibility } from "../actions";
import Inventory from "../components/Inventory";
import ItemList from "../components/ItemList";
import ItemFilters from "../components/ItemFilters";
import M from "materialize-css";

const Shop = ({
  items,
  categories,
  visibilityFilter,
  setFilter,
  cartItems,
  addToCart,
  incQuant
}) => {
  useEffect(() => {
    M.AutoInit();
  });

  const handleClick = (item, cartItems) => {
    const itemInCart = cartItems.find(cartItem => item.id === cartItem.id);
    return itemInCart ? incQuant(itemInCart) : addToCart(item);
  };

  return (
    <div className="row">
      <div className="col s12">
        <h3>Items</h3>
        <ItemFilters
          categories={categories}
          active={visibilityFilter}
          onClick={setFilter}
        />
        <ItemList items={items} cartItems={cartItems} onClick={handleClick} />
        <Inventory />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: visibleItems(state.items, state.visibilityFilter),
    cartItems: state.cartItems,
    visibilityFilter: state.visibilityFilter,
    categories: filters(state.items)
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
    setFilter: filter => {
      dispatch(setVisibility(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
