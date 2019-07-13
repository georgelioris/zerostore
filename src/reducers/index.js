import { combineReducers } from "redux";
import items from "./items";
import cartItems from "./cart";
import visibilityFilter from "./visibilityFilter.js";

export const combinedReducer = combineReducers({
  items: items,
  cartItems: cartItems,
  visibilityFilter: visibilityFilter
});

export const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  /// Filter cartItems to remove any item that is no longer in store
  const filteredCart = intermediateState.cartItems.filter(
    cartItem =>
      intermediateState.items.hasOwnProperty(cartItem.id) &&
      intermediateState.items[cartItem.id]["available"] === true
  );
  return { ...intermediateState, cartItems: filteredCart };
};
