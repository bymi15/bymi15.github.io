import React from "react";
import { PROJECT_CATEGORIES } from "../utils/categories";

function CategoryFilter({ filter, setFilter }) {
  return (
    <div className="categoryFilter">
      <button
        className={`btn-filter ${filter === "All" ? "active" : ""}`}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      {PROJECT_CATEGORIES.map((category) => (
        <button
          className={`btn-filter ${filter === category ? "active" : ""}`}
          onClick={() => setFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
