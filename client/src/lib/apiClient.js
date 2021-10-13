import axios from "axios"

const apiClient = {
  fetchProducts(callback) {
    axios.get("api/products")
    .then(response => {
      callback(response.data)
    })
  },

  addProduct(product, callback) {
    axios.post("api/products", product)
    .then(response => {
      callback(response.data)
    })
  },
  deleteProduct(id, callback) {
    axios.delete(`api/products/${id}`)
    .then(() => callback())
    .catch((e) => console.log(e))
  },
  editProduct(id, product, callback) {
    axios.put(`api/products/${id}`, product)
    .then(response => {
      callback(response.data)
    })
  },
  fetchCart(callback) {
    axios.get("api/cart")
    .then(response => {
      callback(response.data)
    })
  },
  addItemToCart(item, callback) {
    axios.post("api/cart", item)
    .then(response => {
      callback(response.data)
    })
  }

}

export default apiClient