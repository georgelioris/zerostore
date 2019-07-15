import React from "react";

const ItemFilters = ({ active, categories, onClick }) => (
  <div className="category-filters">
    <span
      className="dropdown-trigger btn red lighten-1"
      data-target="categories"
    >
      {active}
    </span>
    <ul id="categories" className="dropdown-content">
      <li value="ALL" onClick={() => onClick("All")}>
        <span> All </span>
      </li>
      {categories.map(category => (
        <li
          value={category}
          onClick={() => onClick(category)}
          key={categories.indexOf(category)}
        >
          <span>{category}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ItemFilters;
