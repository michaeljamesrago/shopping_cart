import React from 'react'
import ProductActions from './ProductActions'
import apiClient from '../lib/apiClient'

const Product = ({ product, products, setProducts, cart, setCart }) => {
  const deleteProduct = () => {
    apiClient.deleteProduct(product._id, () => {
      setProducts(products.filter(p => {
        return p._id !== product._id
      }))
    })
  }
  return (
    <div class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p class="price">{product.price}</p>
        <p class="quantity">{product.quantity}</p>
        <ProductActions product={product} 
        setProducts={setProducts} 
        products={products}
        cart={cart}
        setCart={setCart}/>
        <a class="delete-button" onClick={deleteProduct}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product
