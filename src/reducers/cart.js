import {
  ADD_TO_CART,
  INC_QUANT,
  DEC_QUANT,
  REMOVE_FROM_CART
} from "../constants";

const removeById = (state = [], id) => {
  const cartItems = state.filter(cartItem => cartItem.id !== id);
  return cartItems;
};

const cartItems = (state = [], action) => {
  const { item } = action;
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = { id: item.id, price: item.price, quantity: 1 };
      return [...state, addedItem];
    case INC_QUANT:
      item.quantity++;
      return [...state];
    default:
      return state;
    case DEC_QUANT:
      if (item.quantity > 1) {
        item.quantity--;
        return [...state];
      } else {
        const cartItems = removeById(state, item.id);
        return cartItems;
      }
    case REMOVE_FROM_CART:
      const cartItems = removeById(state, item.id);
      return cartItems;
  }
};

export default cartItems;
