import React from "react";
import Icon from "@material-ui/core/Icon";

const subTotal = items => cartItem => {
  return (
    items.find(items => cartItem.id === items.id).price * cartItem.quantity
  );
};

const CartItem = ({
  items,
  cartItem,
  onClickInc,
  onClickDec,
  onClickRemove
}) => {
  const itemTitle = ci => {
    return items.find(i => ci.id === i.id).title;
  };
  return (
    <div className="card grey darken-1" key={cartItem.id}>
      <div className="card-content white-text">
        <span className="card-title">
          {itemTitle(cartItem)}
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
          <span>Subtotal: {subTotal(items)(cartItem)}$</span>
        </div>
      </div>
    </div>
  );
};
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
        {cartItems.reduce((acc, cartItem) => {
          return acc + subTotal(items)(cartItem);
        }, 0)}
        $
      </span>
    </div>
  </div>
);

export default CartItemList;
