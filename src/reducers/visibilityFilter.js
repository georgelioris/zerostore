import { VISIBILITY_FILTER } from "../constants";

const visibilityFilter = (state = "All", action) => {
  switch (action.type) {
    case VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
};

export default visibilityFilter;
