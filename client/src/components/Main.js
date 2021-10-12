import React from 'react'
import ProductListing from './ProductListing.js'
import AddProductForm from './AddProductForm'

const Main = ({ products, setProducts }) => {
  return (
        <main>
          <ProductListing products={products} setProducts={setProducts} />
          <AddProductForm products={products} setProducts={setProducts}/>
        </main>
  )
}

export default Main
