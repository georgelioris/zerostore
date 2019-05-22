import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

export const addToCart = item => {
  const action = {
    type: ADD_TO_CART,
    item
  };
  return action;
};

export const removeFromCart = item => {
  const action = {
    type: REMOVE_FROM_CART,
    item
  };
  return action;
};
