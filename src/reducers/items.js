import { ITEM_CHANGE } from "../constants";

const items = (state = [], action) => {
  switch (action.type) {
    case ITEM_CHANGE:
      const { item } = action;
      return [...state, item];
    default:
      return state;
  }
};
export default items;
