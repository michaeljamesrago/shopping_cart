import React, { useState, useEffect } from "react";
import Header from "./Header.js"
import Main from "./Main.js"
import apiClient from '../lib/apiClient.js'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    apiClient.fetchProducts((data) => {
      console.log("data in app: ", data)
      setProducts(data)
    })
  },[])

  useEffect(() => {
    apiClient.fetchCart((data) => {
      setCart(data)
    })
  }, [])

  return (
    <div id="app">
      <Header cart={cart} setCart={setCart}/>
      <Main products={products} setProducts={setProducts} cart={cart} setCart={setCart}/>
    </div>
  );
};

export default App;
