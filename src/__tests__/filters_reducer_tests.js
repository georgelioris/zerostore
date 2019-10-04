import filters from "../reducers/filters";
import * as types from "../constants";

describe("filters reducers", () => {
  it("should return initial state", () => {
    expect(filters(undefined, {})).toEqual({ categoryFilter: "All" });
  });

  it("should handle category filters", () => {
    expect(
      filters(undefined, {
        type: types.VISIBILITY_FILTER,
        filter: "category"
      })
    ).toEqual({ categoryFilter: "category" });
  });

  it("should handle price filters", () => {
    expect(
      filters(undefined, { type: types.SORT_BY, filter: "sorting method" })
    ).toEqual({ categoryFilter: "All", priceFilter: "sorting method" });
  });

  it("should handle item search by category", () => {
    expect(
      filters(undefined, { type: types.SEARCH_ITEMS, filter: "category FOO" })
    ).toEqual({
      categoryFilter: "All",
      searchItem: null,
      searchCategory: "foo"
    });
  });

  it("should handle item search by title", () => {
    expect(
      filters(undefined, { type: types.SEARCH_ITEMS, filter: "Foo" })
    ).toEqual({
      categoryFilter: "All",
      searchCategory: null,
      searchItem: "foo"
    });
  });

  it("should reset search filters when none is provided", () => {
    expect(
      filters(undefined, { type: types.SEARCH_ITEMS, filter: "" })
    ).toEqual({
      categoryFilter: "All",
      searchCategory: null,
      searchItem: null
    });
  });
});
