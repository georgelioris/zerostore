import { ITEM_CHANGE } from "../constants";

const item = (state, action) => {
  switch (action.type) {
    case ITEM_CHANGE:
      const { payload } = action;
      const prop = Object.getOwnPropertyNames(payload)[1];
      const value = Object.values(payload)[1];
      return {
        ...state,
        [prop]: value
      };
    default:
      return state;
  }
};

const items = (state = {}, action) => {
  switch (action.type) {
    case ITEM_CHANGE:
      const { payload } = action;
      const key = Object.values(payload)[0];
      const targetItem = state[key];
      return { ...state, [key]: item(targetItem, action) };
    default:
      return state;
  }
};
export default items;
