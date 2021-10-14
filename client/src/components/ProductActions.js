import React, { useState } from 'react'
import EditForm from './EditForm'
import apiClient from '../lib/apiClient'

const ProductActions = ({product, setProducts, products, cart, setCart}) => {
  const [editFormVisible, setEditFormVisible] = useState(false)
  const toggleEditFormVisibility = () => {
    setEditFormVisible(!editFormVisible)
  }
  const addToCart = () => {
    const body = {
      productId: product._id,
      title: product.title,
      price: product.price,
      quantity: product.quantity - 1,
    };
    if (product.quantity <= 0) return;
    apiClient.addItemToCart(body, (data) => {
      const itemInCart = cart.find((item) => {
        console.log("item._id: ", item._id)
        console.log("data.productId: ", data.productId)
        return item._id === data.productId
      })
      console.log("itemInCart: ", itemInCart)
      if (itemInCart) {
        setCart(cart.map(i => {
          return i.product_id === product.id ?
            {...i, quantity: i.quantity + 1} :
            i
        }));
      } else {
        setCart(cart.concat(data))
      }
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
