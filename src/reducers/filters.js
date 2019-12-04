import { VISIBILITY_FILTER, SORT_BY, SEARCH_ITEMS } from "../constants";

const filters = (state = { categoryFilter: "All" }, action) => {
  const { filter } = action;
  switch (action.type) {
    case VISIBILITY_FILTER:
      return { ...state, categoryFilter: filter };
    case SORT_BY:
      return { ...state, priceFilter: filter };
    case SEARCH_ITEMS: {
      const lowerCaseFilter = filter.toLowerCase();
      const searchFilters = lowerCaseFilter.match("category")
        ? {
            ...state,
            searchItem: null,
            searchCategory: lowerCaseFilter.split("category ")[1]
          }
        : { ...state, searchCategory: null, searchItem: lowerCaseFilter };
      return filter
        ? searchFilters
        : { ...state, searchCategory: null, searchItem: null };
    }
    default:
      return state;
  }
};

export default filters;
