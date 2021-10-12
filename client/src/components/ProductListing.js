import React, { useState } from 'react'
import Product from './Product.js'

const ProductListing = ({ products, setProducts }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return (
          <Product product={product} products={products} setProducts={setProducts} key={product.id}/>
        )
      })}
    </div>
  )
}

export default ProductListing
