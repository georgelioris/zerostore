import React from "react";
import PropTypes from "prop-types";
import { getProperty, total } from "../helpers";
import { Link } from "react-router-dom";

const SideCartItem = ({ ...cartItem }) => (
  <span>
    <i className="material-icons tiny" onClick={cartItem.onClickRemove}>
      clear
    </i>
    {cartItem.getProperty("title")} (x{cartItem.quantity})
  </span>
);

const SideCart = ({ cartItems, items, removeFromCart }) => {
  const cartItemList = cartItems.length ? (
    cartItems.map(cartItem => {
      return (
        <SideCartItem
          key={cartItem.id}
          {...cartItem}
          getProperty={getProperty(items)(cartItem)}
          onClickRemove={() => removeFromCart(cartItem)}
        />
      );
    })
  ) : (
    <div className="container center no-content">
      <i className="material-icons">local_grocery_store</i>
    </div>
  );
  return (
    <ul id="slide-out" className="sidenav">
      <li>
        <Link to="/cart" className="sidenav-close">
          View Cart <i className="material-icons small">local_grocery_store</i>
        </Link>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>{cartItemList}</li>
      <li>
        <Link to="/" className="subheader">
          {total(cartItems, items)}
        </Link>
      </li>
    </ul>
  );
};

SideCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      quantity: PropTypes.number
    })
  ),
  items: PropTypes.objectOf(PropTypes.object),
  removeFromCart: PropTypes.func
};

export default SideCart;
