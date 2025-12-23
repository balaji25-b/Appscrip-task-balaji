import React, {useEffect, useState} from 'react'
import './App.css'

const API_URL = 'https://fakestoreapi.com/products'

function App() {
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('featured')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const PER_PAGE = 9

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFiltered(data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let result = products
    if (search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      )
    }
    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }
    if (sort === 'price-low') result.sort((a, b) => a.price - b.price)
    if (sort === 'price-high') result.sort((a, b) => b.price - a.price)
    if (sort === 'name') result.sort((a, b) => a.title.localeCompare(b.title))
    setFiltered(result)
    setPage(1)
  }, [search, category, sort, products])

  const currentProducts = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const categories = ['all', ...new Set(products.map(p => p.category))]

  if (loading) return <div className="loading">Loading products...</div>

  return (
    <div className="app">
      <header className="header">
        <h1>🛒 Appscrip Store</h1>
        <input
          className="search"
          placeholder="🔍 Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </header>

      <div className="container">
        <aside className="sidebar">
          <h2>Filters</h2>

          <div className="filter-group">
            <h3>Category</h3>
            {categories.map(cat => (
              <label key={cat} className="filter-label">
                <input
                  type="radio"
                  name="category"
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                />
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Sort By</h3>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </aside>

        <main className="main">
          <div className="results-header">
            <h1>{filtered.length} Products Found</h1>
          </div>

          <div className="products-grid">
            {currentProducts.map(product => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-category">{product.category}</p>
                  <div className="price-section">
                    <span className="price">
                      ₹{(product.price * 83).toFixed(0)}
                    </span>
                    <span className="old-price">
                      ₹{(product.price * 100).toFixed(0)}
                    </span>
                  </div>
                  <button className="add-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="page-btn"
              >
                ← Prev
              </button>
              {Array.from({length: Math.min(5, totalPages)}, (_, i) => {
                const pageNum = Math.max(1, Math.min(totalPages, page - 2 + i))
                return (
                  <button
                    key={pageNum}
                    className={`page-btn ${page === pageNum ? 'active' : ''}`}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                )
              })}
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="page-btn"
              >
                Next →
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
