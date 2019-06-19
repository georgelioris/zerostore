import {
  ADD_TO_CART,
  INC_QUANT,
  DEC_QUANT,
  REMOVE_FROM_CART
} from "../constants";

const cartItem = (state, action) => {
  const { item } = action;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        id: item.id,
        quantity: 1
      };
    case INC_QUANT:
      if (state.id === item.id) {
        return {
          ...state,
          quantity: state.quantity + 1
        };
      }
      return state;
    case DEC_QUANT:
      if (state.id === item.id) {
        return {
          ...state,
          quantity: state.quantity - 1
        };
      }
      return state;

    default:
      return state;
  }
};

const removeFromCart = (state = [], action) => {
  const { item } = action;
  return state.filter(i => i.id !== item.id);
};

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, cartItem(undefined, action)];
    case INC_QUANT:
      return state.map(i => cartItem(i, action));
    case DEC_QUANT:
      return state.map(i => cartItem(i, action));
    case REMOVE_FROM_CART:
      return removeFromCart(state, action);
    default:
      return state;
  }
};

export default cartItems;
