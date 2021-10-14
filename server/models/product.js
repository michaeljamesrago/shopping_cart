const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Product title is required']
  },
  price: {
    type: Number,
    required: [true]
  },
  quantity: {
    type: Number,
    required: [true]
  }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;

