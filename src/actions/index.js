import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_QUANT,
  DEC_QUANT,
  ITEM_CHANGE,
  REMOVE_FROM_SHOP,
  ADD_TO_SHOP,
  VISIBILITY_FILTER,
  SORT_BY,
  TARGET_ITEM
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

export const removeFromShop = item => {
  const action = {
    type: REMOVE_FROM_SHOP,
    item
  };
  return action;
};

export const addToShop = item => {
  const action = {
    type: ADD_TO_SHOP,
    item
  };
  return action;
};

export const setCategoryFilter = filter => {
  const action = {
    type: VISIBILITY_FILTER,
    filter
  };
  return action;
};

export const setPriceFilter = filter => {
  const action = {
    type: SORT_BY,
    filter
  };

  return action;
};

export const setTargetItem = filter => ({
  type: TARGET_ITEM,
  filter
});
