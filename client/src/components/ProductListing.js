import React from 'react'
import Product from './Product.js'
import * as data from '../lib/data.js'

const ProductListing = () => {
  const products = data.default
  console.log("products: ", products)
  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return (          
          <Product product={product} key={product.id}/>
        )
      })}
    </div>
  )
}

export default ProductListing
