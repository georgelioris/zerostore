import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_QUANT,
  DEC_QUANT,
  ITEM_CHANGE,
  REMOVE_FROM_INV,
  ADD_TO_INV
} from "../constants";

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

export const incQuant = item => {
  const action = {
    type: INC_QUANT,
    item
  };
  return action;
};

export const decQuant = item => {
  const action = {
    type: DEC_QUANT,
    item
  };
  return action;
};

export const itemChange = payload => {
  const action = {
    type: ITEM_CHANGE,
    payload
  };
  return action;
};

export const removeFromInventory = item => {
  const action = {
    type: REMOVE_FROM_INV,
    item
  };
  return action;
};

export const addToInv = item => {
  const action = {
    type: ADD_TO_INV,
    item
  };
  return action;
};
