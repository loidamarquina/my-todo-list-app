import React from "react";

function Filters({ activeFilter, onChangeFilter }) {
  const filters = [
    { id: "all", label: "All To-Dos" },
    { id: "completed", label: "Completed" },
    { id: "incomplete", label: "Incomplete" }
  ];

  return (
    <div className="filters">
      <span className="filters-label">Filter:</span>
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={
            activeFilter === filter.id ? "filter-button active" : "filter-button"
          }
          onClick={() => onChangeFilter(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default Filters;
