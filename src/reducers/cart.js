import { ADD_TO_CART } from "../constants";

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { item } = action;
      if (isNaN(item.quantity)) {
        item.quantity = 1;
        return [...state, item];
      } else {
        item.quantity++;
        return state;
      }
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
