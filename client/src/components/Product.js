import React from 'react'
import ProductActions from './ProductActions'

const Product = ({ product, products, setProducts }) => {
  const deleteProduct = () => {
    setProducts(products.filter(item => {
      return item.id !== product.id
    }))
  }
  return (
    <div class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p class="price">{product.price}</p>
        <p class="quantity">{product.quantity}</p>
        <ProductActions />
        <a class="delete-button" onClick={deleteProduct}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product
