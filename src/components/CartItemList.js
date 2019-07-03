import React from "react";
import Icon from "@material-ui/core/Icon";

const subTotal = items => cartItem => {
  return itemProp(items)(cartItem, "price") * cartItem.quantity;
};

const itemProp = items => (cartItem, prop) => {
  const key = cartItem.id;
  return items.hasOwnProperty(key) ? items[key][prop] : "Item Removed";
};

const CartItem = ({
  items,
  cartItem,
  onClickInc,
  onClickDec,
  onClickRemove
}) => (
  <div className="card white darken-1" key={cartItem.id}>
    <div className="card-content black-text">
      <span className="card-title">
        {itemProp(items)(cartItem, "title")}
        <div className="remove">
          <span onClick={onClickRemove}>
            <Icon>clear</Icon>
          </span>
        </div>
      </span>

      <div className="action">
        <span
          className={
            cartItem.quantity === 1
              ? "btn-floating white disabled"
              : "btn-floating white"
          }
          onClick={onClickDec}
        >
          <i className="material-icons black-text">remove</i>
        </span>
        <span className="quantity">{cartItem.quantity}</span>
        <span className="btn-floating white" onClick={onClickInc}>
          <i className="small material-icons black-text">add</i>
        </span>
        <br />
        <div className="subTotal">
          Subtotal: {subTotal(items)(cartItem)}
          {` `}$
        </div>
      </div>
    </div>
  </div>
);

const CartItemList = ({ cartItems, items, IncQuant, DecQuant, RemoveItem }) => (
  <div className="cartList">
    {cartItems.map(cartItem => {
      return (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          items={items}
          onClickInc={() => IncQuant(cartItem)}
          onClickDec={() => DecQuant(cartItem)}
          onClickRemove={() => RemoveItem(cartItem)}
        />
      );
    })}
    <div className="total">
      Total:
      <span>
        {cartItems.reduce((acc, cartItem) => {
          return acc + subTotal(items)(cartItem);
        }, 0)}
        {` `}$
      </span>
    </div>
  </div>
);

export default CartItemList;
