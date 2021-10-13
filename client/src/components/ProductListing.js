import React, { useState } from 'react'
import Product from './Product.js'

const ProductListing = ({ products, setProducts, setCart, cart }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return (
          <Product product={product} 
                   products={products} 
                   setProducts={setProducts} 
                   key={product._id}
                   cart={cart}
                   setCart={setCart}/>
        )
      })}
    </div>
  )
}

export default ProductListing
