import { ITEM_CHANGE, REMOVE_FROM_INV } from "../constants";

const item = (state = {}, action) => {
  switch (action.type) {
    case ITEM_CHANGE:
      const { payload } = action;
      const key = payload.key;
      const newProperties = payload.properties;
      return {
        [key]: {
          ...state,
          ...newProperties
        }
      };
    case REMOVE_FROM_INV:
      const { item } = action;
      const itemkey = item.id;
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
    case REMOVE_FROM_INV:
      return item(state, action);
    default:
      return state;
  }
};
export default items;
