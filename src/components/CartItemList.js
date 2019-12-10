import React from "react";
import Icon from "@material-ui/core/Icon";
import { Image } from "./Image";
import { getProperty, total, subTotal } from "../helpers";

const CartItem = ({ ...cartItem }) => (
  <div className="card white" key={cartItem.id}>
    <div className="card-content black-text row">
      <div className="col s2">
        <Image
          classNames="circle"
          url={cartItem.getProperty("img")}
          width={"120px"}
          height={"120px"}
        />
      </div>
      <div className="col s10">
        <span className="card-title">
          {cartItem.getProperty("title")}
          <div className="remove">
            <span onClick={cartItem.onClickRemove}>
              <Icon>clear</Icon>
            </span>
          </div>
        </span>

        <div className="action">
          <span
            className={`btn-floating white${
              cartItem.quantity === 1 ? " disabled" : ""
            }`}
            onClick={cartItem.onClickDec}
          >
            <i className="material-icons black-text">remove</i>
          </span>
          <span className="quantity">{cartItem.quantity}</span>
          <span className="btn-floating white" onClick={cartItem.onClickInc}>
            <i className="small material-icons black-text">add</i>
          </span>
          <br />
          <div className="subTotal">{`Subtotal: ${cartItem.subTotal}$`}</div>
        </div>
      </div>
    </div>
  </div>
);

const CartItemList = ({
  cartItems,
  items,
  incQuant,
  decQuant,
  removeFromCart
}) => {
  const cartList = cartItems.length ? (
    cartItems.map(cartItem => {
      return (
        <CartItem
          key={cartItem.id}
          {...cartItem}
          getProperty={getProperty(items)(cartItem)}
          subTotal={subTotal(items)(cartItem)}
          onClickInc={() => incQuant(cartItem)}
          onClickDec={() => decQuant(cartItem)}
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
    <div className="cartList">
      <h4>My Cart</h4>
      {cartList}
      <div className="total">
        <span>{total(cartItems, items)}</span>
      </div>
    </div>
  );
};

export default CartItemList;
