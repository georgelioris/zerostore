import React, { useEffect } from "react";
import M from "materialize-css";

const ItemFilters = ({ visibilityFilter, categories, setFilter }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="category-filters">
      <span
        className="dropdown-trigger btn red lighten-1"
        data-target="categories"
      >
        {visibilityFilter}
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
export default ItemFilters;
