import React from "react";
import Icon from "@material-ui/core/Icon";

const subTotal = items => cartItem => {
  return getProperty(items)(cartItem, "price") * cartItem.quantity;
};

const getProperty = items => (cartItem, prop) => {
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
        {getProperty(items)(cartItem, "title")}
        <div className="remove">
          <span onClick={onClickRemove}>
            <Icon>clear</Icon>
          </span>
        </div>
      </span>

      <div className="action">
        <span
          className={
            "btn-floating white " + (cartItem.quantity === 1 ? "disabled" : "")
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
    <h4>My Cart</h4>
    <div className="total">
      Total:
      <span>
        {cartItems.reduce((acc, cartItem) => {
          return acc + subTotal(items)(cartItem);
        }, 0)}
        {` `}$
      </span>
    </div>
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
  </div>
);

export default CartItemList;
