import { combineReducers } from "redux";
import items from "./items";
import cartItems from "./cart";
import cartTotal from "./total";

export default combineReducers({
  items,
  cartItems,
  cartTotal
});
