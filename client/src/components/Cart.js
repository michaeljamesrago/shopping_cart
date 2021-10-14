import React, { useState, useEffect } from 'react';
import CartItem from './CartItem'
import apiClient from "../lib/apiClient"

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0)

  const cartIsEmpty = () => {
    return cart.length === 0
  }

  const checkout = () => {
    apiClient.checkoutCart(() => {
      setCart([])
    })
  }

  useEffect(() => {
    const totalPrice = () => {
      const tot = cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0);
      setTotal(tot)
    } 
    totalPrice()
  }, [cart]);
  
  return (
    <div class="cart">
      <h2>Your Cart</h2>
    
      { cartIsEmpty() ? (
        <>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
        </>

      ) : (
        <table class="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          { cart.map((item) => {
            console.log(item)
            return <CartItem key={item._id} item={item} />
          })}
          <tr>
            <td colspan="3" class="total">${total}</td>
          </tr>
        </table>
    ) }
      <a class={cartIsEmpty() ? 
                "button checkout disabled" : 
                "button checkout"}
          onClick={checkout}>Checkout
      </a>
    </div>
  )
}

export default Cart
