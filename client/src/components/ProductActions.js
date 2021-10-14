import React, { useState } from 'react'
import EditForm from './EditForm'
import apiClient from '../lib/apiClient'

const ProductActions = ({product, setProducts, products, cart, setCart}) => {
  const [editFormVisible, setEditFormVisible] = useState(false)
  const toggleEditFormVisibility = () => {
    setEditFormVisible(!editFormVisible)
  }
  const addToCart = () => {
    const item = { productId: product._id, 
                   title: product.title, 
                   price: product.price }
    apiClient.addItemToCart(item, (data) => {
        apiClient.fetchCart((data) => {
          setCart(data)
        })
    })
  }

  return (
    <div class="actions product-actions">
    {!editFormVisible ?
        <>
          <a class="button add-to-cart" onClick={addToCart}>Add to Cart</a>
          <a class="button edit" onClick={toggleEditFormVisibility}>Edit</a>
        </>
        : <EditForm toggleEdit={toggleEditFormVisibility} 
                    product={product} 
                    setProducts={setProducts} 
                    products={products}/>
      }
    </div>
  )
}

export default ProductActions
