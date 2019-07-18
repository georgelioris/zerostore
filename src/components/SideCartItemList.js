import React from "react";
import { getProperty, total } from "../helpers";
import { Link } from "react-router-dom";

const SideCartItem = ({ items, cartItem, onClickRemove }) => (
  <li>
    <a href="#!">
      <i className="material-icons tiny" onClick={onClickRemove}>
        clear
      </i>
      {getProperty(items)(cartItem, "title")} (x{cartItem.quantity})
    </a>
  </li>
);

const SideCartItemList = ({ cartItems, items, removeFromCart }) => (
  <ul id="slide-out" className="sidenav">
    <li>
      <Link to="/cart" className="sidenav-close">
        View Cart <i className="material-icons small">local_grocery_store</i>
      </Link>
    </li>
    <li>
      <div className="divider"></div>
    </li>
    {cartItems.length ? (
      cartItems.map(cartItem => {
        return (
          <SideCartItem
            key={cartItem.id}
            cartItem={cartItem}
            items={items}
            onClickRemove={() => removeFromCart(cartItem)}
          />
        );
      })
    ) : (
      <div className="container center no-content">
        <i className="material-icons">local_grocery_store</i>
      </div>
    )}

    <li>
      <a href="#!" className="subheader">
        {total(cartItems, items)}
      </a>
    </li>
  </ul>
);

export default SideCartItemList;
