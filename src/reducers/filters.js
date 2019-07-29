import { VISIBILITY_FILTER, SORT_BY, TARGET_ITEM } from "../constants";

const filters = (state = { categoryFilter: "All" }, action) => {
  const { filter } = action;
  switch (action.type) {
    case VISIBILITY_FILTER:
      return { ...state, categoryFilter: filter };
    case SORT_BY:
      return { ...state, priceFilter: filter };
    case TARGET_ITEM:
      return { ...state, targetItem: filter };
    default:
      return state;
  }
};

export default filters;
