import { ADD_TO_CART, INC_QUANT } from "../constants";

const cartItems = (state = [], action) => {
  const { item } = action;
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = { id: item.id, price: item.price, quantity: 1 };
      return [...state, newItem];
    case INC_QUANT:
      item.quantity++;
      return [...state];

    default:
      return state;
  }
};

export default cartItems;

// const addedItems = (state = [], action) => {
//   //   //INSIDE HOME COMPONENT
//   //   if (action.type === ADD_TO_CART) {
//   //     let addedItem = state.items.find(item => item.id === action.id);
//   //     //check if the action id exists in the addedItems
//   //     let existed_item = state.addedItems.find(item => action.id === item.id);
//   //     if (existed_item) {
//   //       addedItem.quantity += 1;
//   //       return {
//   //         ...state,
//   //         total: state.total + addedItem.price
//   //       };
//   //     } else {
//   //       addedItem.quantity = 1;
//   //       //calculating the total
//   //       let newTotal = state.total + addedItem.price;

//   //       return {
//   //         ...state,
//   //         addedItems: [...state.addedItems, addedItem],
//   //         total: newTotal
//   //       };
//   //     }
//   //   }
//   // };
