import React from 'react'
import ProductListing from './ProductListing.js'
import AddProductForm from './AddProductForm'

const Main = ({ products, setProducts, cart, setCart }) => {
  return (
        <main>
          <ProductListing products={products} 
                          setProducts={setProducts} 
                          cart={cart}
                          setCart={setCart}/>
          <AddProductForm products={products} setProducts={setProducts}/>
        </main>
  )
}

export default Main
