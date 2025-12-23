import React from 'react'

const Pagination = ({currentPage, totalPages, paginate}) => {
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    let end = Math.min(totalPages, start + maxVisible - 1)

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  if (totalPages <= 1) return null

  return (
    <nav
      className="pagination"
      role="navigation"
      aria-label="Product pagination"
    >
      <button
        className="page-btn"
        disabled={currentPage === 1}
        onClick={() => paginate(currentPage - 1)}
      >
        Previous
      </button>

      {getPageNumbers().map(number => (
        <button
          key={number}
          className={`page-btn ${currentPage === number ? 'active' : ''}`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}

      <button
        className="page-btn"
        disabled={currentPage === totalPages}
        onClick={() => paginate(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
