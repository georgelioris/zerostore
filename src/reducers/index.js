import { combineReducers } from "redux";
import items from "./items";
import cartItems from "./cart";

export const combinedReducer = combineReducers({
  items: items,
  cartItems: cartItems
});

export const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  /// Filter cartItems to remove any item that is no longer in store
  const filteredCart = intermediateState.cartItems.filter(cartItem =>
    intermediateState.items.hasOwnProperty(cartItem.id)
  );
  const finalState = { ...intermediateState, cartItems: filteredCart };
  return finalState;
};
