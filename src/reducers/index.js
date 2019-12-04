import { combineReducers } from "redux";
import items from "./items";
import cartItems from "./cart";
import filters from "./filters";

export const combinedReducer = combineReducers({
  items: items,
  cartItems: cartItems,
  filters: filters
});

export const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  /// Filter cartItems that are not longer in store or unavailable
  const filteredCart = intermediateState.cartItems.filter(
    cartItem =>
      Object.prototype.hasOwnProperty.call(
        intermediateState.items,
        cartItem.id
      ) && intermediateState.items[cartItem.id].available
  );
  return { ...intermediateState, cartItems: filteredCart };
};
