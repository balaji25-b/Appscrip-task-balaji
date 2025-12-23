import React from 'react'

const Filters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="filters-panel">
      <h2 className="filters-title">Filters</h2>

      {/* Category Filter */}
      <div className="filter-group">
        <h3 className="filter-section-title">Category</h3>
        <ul className="filter-options">
          {categories.map(category => (
            <li key={category} className="filter-option">
              <label className="filter-label">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                />
                <span>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Sort Filter */}
      <div className="filter-group">
        <h3 className="filter-section-title">Sort By</h3>
        <select
          className="sort-select"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      <button className="clear-filters-btn">Clear All Filters</button>
    </div>
  )
}

export default Filters
