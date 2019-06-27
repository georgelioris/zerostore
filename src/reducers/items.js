import { ITEM_CHANGE } from "../constants";

const item = (state, action) => {
  switch (action.type) {
    case ITEM_CHANGE:
      const { payload } = action;
      const newProperties = payload.properties;
      const item = {
        ...state,
        ...newProperties
      };
      return item;
    default:
      return state;
  }
};

const items = (state = {}, action) => {
  switch (action.type) {
    case ITEM_CHANGE:
      const { payload } = action;
      const key = payload.key;
      const targetItem = state[key];
      return { ...state, [key]: item(targetItem, action) };
    default:
      return state;
  }
};
export default items;
