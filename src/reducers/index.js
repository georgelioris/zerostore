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
  /// Filter cartItems that are not longer in store or unavailable
  const filteredCart = intermediateState.cartItems.filter(
    cartItem =>
      intermediateState.items.hasOwnProperty(cartItem.id) &&
      intermediateState.items[cartItem.id].available === true
  );
  return { ...intermediateState, cartItems: filteredCart };
};
