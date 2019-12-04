import { ITEM_CHANGE, REMOVE_FROM_SHOP, ADD_TO_SHOP } from "../constants";
import { getNextKey, filterObject, formatProperties } from "../helpers";

const item = (state = {}, action) => {
  switch (action.type) {
    case ITEM_CHANGE: {
      const {
        payload: { key, properties }
      } = action;
      const updatedItem = {
        [key]: {
          ...state,
          ...formatProperties(properties)
        }
      };
      return updatedItem;
    }

    case ADD_TO_SHOP: {
      const { item } = action;
      const key = state;
      const newItem = {
        [key]: {
          id: key,
          ...formatProperties(item)
        }
      };
      return newItem;
    }
    default:
      return state;
  }
};

const items = (state = {}, action) => {
  switch (action.type) {
    case ITEM_CHANGE: {
      const itemState = state[action.payload.key];
      return { ...state, ...item(itemState, action) };
    }
    case ADD_TO_SHOP: {
      const key = getNextKey(state);
      return { ...state, ...item(key, action) };
    }
    case REMOVE_FROM_SHOP: {
      const itemKey = action.item.id;
      return filterObject(state, key => key !== itemKey);
    }
    default:
      return state;
  }
};
export default items;
