import { combineReducers } from "redux";
import items from "./items";
import cartItems from "./cart";
import filters from "./filters";
import { filterObject } from "../helpers";

export const combinedReducer = combineReducers({
  items: items,
  cartItems: cartItems,
  filters: filters
});

export const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  /// Filter cartItems that are not longer in store or unavailable
  const filteredCart = filterObject(
    intermediateState.cartItems,
    key =>
      Object.prototype.hasOwnProperty.call(intermediateState.items, key) &&
      intermediateState.items[key].available
  );
  return { ...intermediateState, cartItems: filteredCart };
};
