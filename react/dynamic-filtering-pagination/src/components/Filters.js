// src/components/FilterBar.js
import React from 'react';

const FilterBar = ({ userId, tag, onFilterChange, onReset }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <select
        value={userId}
        onChange={(e) => onFilterChange(e.target.value, tag)}
        style={{ marginRight: '10px' }}
      >
        <option value="">All Users</option>
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            User {i + 1}
          </option>
        ))}
      </select>

      <select
        value={tag}
        onChange={(e) => onFilterChange(userId, e.target.value)}
        style={{ marginRight: '10px' }}
      >
        <option value="">All Tags</option>
        <option value="urgent">Urgent</option>
        <option value="normal">Normal</option>
      </select>

      <button onClick={onReset}>Reset Filters</button>
    </div>
  );
};

export default FilterBar;
