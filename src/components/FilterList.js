import React, { useEffect } from "react";
import PropTypes from "prop-types";
import M from "materialize-css";

const FilterList = ({
  filters,
  categories,
  setCategoryFilter,
  setPriceFilter
}) => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  const categoryList = categories.map(category => (
    <li
      value={category}
      onClick={() => setCategoryFilter(category)}
      key={categories.indexOf(category)}
    >
      <span>{category}</span>
    </li>
  ));
  return (
    <div className="category-filters">
      <span
        className="dropdown-trigger btn red accent-2"
        data-target="categories"
      >
        <span className="valign-wrapper">
          {filters.categoryFilter}
          <i className="material-icons small">arrow_drop_down</i>
        </span>
      </span>
      <ul id="categories" className="dropdown-content">
        <li value="All" onClick={() => setCategoryFilter("All")}>
          <span> All </span>
        </li>
        {categoryList}
      </ul>
      <span
        className="dropdown-trigger btn red accent-2 right"
        data-target="price-sort"
      >
        <span className="valign-wrapper">
          <i className="material-icons">sort</i>
          {Object.prototype.hasOwnProperty.call(filters, "priceFilter")
            ? filters.priceFilter
            : "Sort By"}
        </span>
      </span>
      <ul id="price-sort" className="dropdown-content">
        <li value="ascending" onClick={() => setPriceFilter("Lowest")}>
          <span>Lowest</span>
        </li>
        <li value="descending" onClick={() => setPriceFilter("Highest")}>
          <span>Highest</span>
        </li>
      </ul>
    </div>
  );
};

FilterList.propTypes = {
  filters: PropTypes.shape({
    categoryFilter: PropTypes.string,
    priceFilter: PropTypes.string
  }),
  categories: PropTypes.arrayOf(PropTypes.string),
  setCategoryFilter: PropTypes.func,
  setPriceFilter: PropTypes.func
};
export default FilterList;
