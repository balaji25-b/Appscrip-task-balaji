import React from 'react'
import './App.css'
import ProductCard from './ProductCard'

const ProductGrid = ({products}) => {
  return (
    <div className="products-grid" role="list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
