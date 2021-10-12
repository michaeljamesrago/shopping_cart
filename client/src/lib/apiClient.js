import axios from "axios"

const apiClient = {
  fetchProducts(callback) {
    axios.get("api/products")
    .then(response => {
      callback(response.data)
    })
  }
}

export default apiClient
