import React, { useEffect } from "react";
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
        {categories.map(category => (
          <li
            value={category}
            onClick={() => setCategoryFilter(category)}
            key={categories.indexOf(category)}
          >
            <span>{category}</span>
          </li>
        ))}
      </ul>
      <span
        className="dropdown-trigger btn red accent-2 right"
        data-target="price-sort"
      >
        <span className="valign-wrapper">
          <i className="material-icons">sort</i>
          {filters.hasOwnProperty("priceFilter")
            ? filters.priceFilter
            : "Sort By"}
        </span>
      </span>
      <ul id="price-sort" className="dropdown-content">
        <li value="low" onClick={() => setPriceFilter("low")}>
          <span>Lowest</span>
        </li>
        <li value="high" onClick={() => setPriceFilter("high")}>
          <span>Highest</span>
        </li>
      </ul>
    </div>
  );
};
export default FilterList;
