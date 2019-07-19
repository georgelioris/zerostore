import React, { useEffect } from "react";
import M from "materialize-css";

const FilterList = ({ visibilityFilter, categories, setFilter }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="category-filters">
      <span
        className="dropdown-trigger btn red accent-2 "
        data-target="categories"
      >
        <span className="valign-wrapper">
          {visibilityFilter}
          <i className="material-icons small">arrow_drop_down</i>
        </span>
      </span>
      <ul id="categories" className="dropdown-content">
        <li value="All" onClick={() => setFilter("All")}>
          <span> All </span>
        </li>
        {categories.map(category => (
          <li
            value={category}
            onClick={() => setFilter(category)}
            key={categories.indexOf(category)}
          >
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FilterList;
