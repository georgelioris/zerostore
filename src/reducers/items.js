import { ITEM_CHANGE, REMOVE_FROM_INV, ADD_TO_INV } from "../constants";

const item = (state = {}, action) => {
  switch (action.type) {
    case ITEM_CHANGE:
      const { payload } = action;
      const key = payload.key;
      const updatedProperties = payload.properties;
      const updatedItem = {
        [key]: {
          ...state,
          ...updatedProperties
        }
      };
      return updatedItem;
    case REMOVE_FROM_INV:
      const itemkey = action.item.id;
      return Object.keys(state).reduce(
        (acc, key) =>
          Number(key) !== itemkey
            ? {
                ...acc,
                [key]: state[key]
              }
            : acc,
        {}
      );
    case ADD_TO_INV:
      const { item } = action;
      const addedKey = item.id;
      const addedItem = {
        [addedKey]: {
          ...item
        }
      };
      return addedItem;

    default:
      return state;
  }
};

// const updateItem = (state, action) => {
//   const { payload } = action;
//   const key = payload.key;
//   const newProperties = payload.properties;
//   return {
//     [key]: {
//       ...state,
//       ...newProperties
//     }
//   };
// };

// const removeItem = (state, itemkey) =>
//   Object.keys(state).reduce(
//     (acc, key) =>
//       Number(key) !== itemkey
//         ? {
//             ...acc,
//             [key]: state[key]
//           }
//         : acc,
//     {}
//   );

const items = (state = {}, action) => {
  switch (action.type) {
    case ITEM_CHANGE:
      const itemState = state[action.payload.key];
      return { ...state, ...item(itemState, action) };
    case ADD_TO_INV:
      return { ...state, ...item(undefined, action) };
    case REMOVE_FROM_INV:
      return item(state, action);
    default:
      return state;
  }
};
export default items;
