import React from "react";
import Icon from "@material-ui/core/Icon";

const CartItem = ({
  items,
  cartItem,
  onClickInc,
  onClickDec,
  onClickRemove
}) => (
  <div className="card grey darken-1" key={cartItem.id}>
    <div className="card-content white-text">
      <span className="card-title">
        {items.find(item => cartItem.id === item.id).title}
        <div className="remove">
          <span onClick={onClickRemove}>
            <Icon>clear</Icon>
          </span>
        </div>
      </span>

      <div className="action">
        <span onClick={onClickDec}>
          <Icon>remove_circle</Icon>
        </span>
        <span className="quantity">{cartItem.quantity}</span>
        <span onClick={onClickInc}>
          <Icon>add_circle</Icon>
        </span>
        <br />
        <span>Subtotal: {cartItem.price * cartItem.quantity}$</span>
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
    <hr />
    <div className="total">
      Total:
      <span>
        {cartItems.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)}
        $
      </span>
    </div>
  </div>
);

export default CartItemList;
