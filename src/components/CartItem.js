import React from "react";
import Icon from "@material-ui/core/Icon";

const CartItem = ({ items, cartItem, IncQuant, DecQuant, RemoveItem }) => (
  <div className="card grey darken-1" key={cartItem.id}>
    <div className="card-content white-text">
      <span className="card-title">
        {items.find(item => cartItem.id === item.id).title}
        <div className="remove">
          <span onClick={RemoveItem}>
            <Icon>clear</Icon>
          </span>
        </div>
      </span>

      <div className="action">
        <span onClick={DecQuant}>
          <Icon>remove_circle</Icon>
        </span>
        <span className="quantity">{cartItem.quantity}</span>
        <span onClick={IncQuant}>
          <Icon>add_circle</Icon>
        </span>
        <br />
        <span>Subtotal: {cartItem.price * cartItem.quantity}$</span>
      </div>
    </div>
  </div>
);

export default CartItem;
