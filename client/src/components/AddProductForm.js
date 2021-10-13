import React, { useState } from 'react'
import apiClient from '../lib/apiClient'

const AddProductForm = ({products, setProducts}) => {
  const [ addFormVisible, setAddFormVisible ] = useState(false)
  const [ title, setTitle ] = useState('')
  const [ price, setPrice ] = useState(0)
  const [ quantity, setQuantity ] = useState(0)
  const toggleAddFormVisibility = () => {
    setAddFormVisible(!addFormVisible)
  }

  const resetForm = () => {
    setTitle('')
    setPrice(0)
    setQuantity(0)
  }

  const addProduct = () => {
    const newProduct = { title, price, quantity }
    apiClient.addProduct(newProduct, (data) => {
      setProducts(products.concat(data))
      resetForm()
    })
  }

  return (
    <div class={addFormVisible ? "add-form visible" : "add-form"}>
      <p><a class="button add-product-button" onClick={toggleAddFormVisibility}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={e => setPrice(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
        </div>

        <div class="actions form-actions">
          <a class="button" onClick={addProduct}>Add</a>
          <a class="button" onClick={toggleAddFormVisibility}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm
