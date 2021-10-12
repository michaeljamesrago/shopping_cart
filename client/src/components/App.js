import React, { useState, useEffect } from "react";
import Header from "./Header.js"
import Main from "./Main.js"
import data from '../lib/data'
import apiClient from '../lib/apiClient.js'

const App = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    apiClient.fetchProducts((data) => {
      setProducts(data)
    })
  },[])
  return (
    <div id="app">
      <Header />
      <Main products={products} setProducts={setProducts}/>
    </div>
  );
};

export default App;
