import React from "react";
import { PROJECT_CATEGORIES } from "../utils/categories";

function CategoryFilter({ filter, setFilter }) {
  return (
    <div className="categoryFilter">
      <div className="btnWrapper">
        <button
          className={`btn-filter ${filter === "All" ? "active" : ""}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        {PROJECT_CATEGORIES.map((category) => (
          <button
            key={category}
            className={`btn-filter ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
