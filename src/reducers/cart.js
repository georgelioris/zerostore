import { ADD_TO_CART, INC_QUANT } from "../constants";

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
  }
};

export default cartItems;
