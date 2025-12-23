import React from 'react'

const Header = ({searchTerm, setSearchTerm}) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Appscrip Store</h1>
      </div>

      <div className="header-center">
        <div className="search-container">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="header-right">
        <button className="cart-btn" aria-label="Shopping cart">
          🛒
          <span className="cart-count">0</span>
        </button>
      </div>
    </header>
  )
}

export default Header
