import React from 'react'

const ProductCard = ({product}) => {
  return (
    <article className="product-card" role="article">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={`${product.title} - ${product.category}`}
          className="product-image"
          loading="lazy"
        />
        <div className="product-badge">New</div>
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-price-section">
          <span className="product-price">
            ₹{(product.price * 83).toFixed(0)}
          </span>
          <span className="product-original-price">
            ₹{(product.price * 100).toFixed(0)}
          </span>
        </div>

        <div className="product-rating">★★★★☆ (120)</div>

        <button
          className="add-to-cart-btn"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
