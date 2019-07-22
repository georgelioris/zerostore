import { ITEM_CHANGE, REMOVE_FROM_SHOP, ADD_TO_SHOP } from "../constants";
import { lastIndex } from "../helpers";

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

    case ADD_TO_SHOP:
      const { item } = action;
      const addedKey = state;
      const addedItem = {
        [addedKey]: {
          id: addedKey,
          ...item
        }
      };
      return addedItem;

    case REMOVE_FROM_SHOP:
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

    default:
      return state;
  }
};

const items = (state = {}, action) => {
  switch (action.type) {
    case ITEM_CHANGE:
      const itemState = state[action.payload.key];
      return { ...state, ...item(itemState, action) };
    case ADD_TO_SHOP:
      const itemsArr = Object.keys(state);
      const lastKey = lastIndex(itemsArr);
      const newKey = itemsArr.length !== 0 ? state[lastKey].id + 1 : 1;
      return { ...state, ...item(newKey, action) };
    case REMOVE_FROM_SHOP:
      return item(state, action);
    default:
      return state;
  }
};
export default items;
