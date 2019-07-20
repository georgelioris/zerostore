import { VISIBILITY_FILTER, SORT_BY } from "../constants";

const filters = (state = { categoryFilter: "All" }, action) => {
  switch (action.type) {
    case VISIBILITY_FILTER:
      return { ...state, categoryFilter: action.filter };
    case SORT_BY:
      return { ...state, priceFilter: action.filter };
    default:
      return state;
  }
};

export default filters;
