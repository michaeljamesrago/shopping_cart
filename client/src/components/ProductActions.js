import React, { useState } from 'react'
import EditForm from './EditForm'
import apiClient from '../lib/apiClient'

const ProductActions = ({product, setProducts, products, cart, setCart}) => {
  const [editFormVisible, setEditFormVisible] = useState(false)
  const toggleEditFormVisibility = () => {
    setEditFormVisible(!editFormVisible)
  }

  const itemAvailable = () => {
    return product.quantity > 0
  }

  const addToCart = () => {
    const body = {
      productId: product._id,
      title: product.title,
      price: product.price,
      quantity: product.quantity - 1,
    };
    if (!itemAvailable()) return;
    apiClient.addItemToCart(body, (data) => {
      const itemInCart = cart.find((item) => {
        return item._id === data._id
      })
      if (itemInCart) {
        setCart(cart.map(i => {
          return i._id === itemInCart._id ?
            {...i, quantity: i.quantity + 1} :
            i
        }));
      } else {
        setCart(cart.concat(data))
      }
    })
    apiClient.editProduct(product._id, body, (data) => {
      setProducts(products.map((p) => {
        return p._id === data._id ? 
               {...p, quantity: p.quantity -1} :
               p
        }))
      })
  }

  return (
    <div class="actions product-actions">
    {!editFormVisible ?
        <>
          <a class={itemAvailable() ? "button add-to-cart" : "button add-to-cart disabled"}
            onClick={addToCart}>
            Add to Cart
          </a>
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
