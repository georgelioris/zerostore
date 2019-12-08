import {
  ADD_TO_CART,
  INC_QUANT,
  DEC_QUANT,
  REMOVE_FROM_CART
} from "../constants";
import { filterObject } from "../helpers";

const cartItem = (state, action) => {
  const {
    item: { id }
  } = action;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        [id]: {
          id: id,
          quantity: 1
        }
      };
    case INC_QUANT:
      return {
        [id]: {
          ...state,
          quantity: state.quantity + 1
        }
      };
    case DEC_QUANT:
      return {
        [id]: {
          ...state,
          quantity: state.quantity - 1
        }
      };
    default:
      return state;
  }
};

const cartItems = (state = {}, action) => {
  const { item } = action;
  const itemState = item && state[item.id];
  switch (action.type) {
    case ADD_TO_CART:
      return item.available === true
        ? { ...state, ...cartItem(undefined, action) }
        : state;
    case INC_QUANT:
      return { ...state, ...cartItem(itemState, action) };
    case DEC_QUANT:
      return itemState.quantity > 1
        ? { ...state, ...cartItem(itemState, action) }
        : state;
    case REMOVE_FROM_CART:
      return filterObject(state, key => key !== item.id);
    default:
      return state;
  }
};

export default cartItems;
