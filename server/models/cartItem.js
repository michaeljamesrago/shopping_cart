const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const CartItemSchema = new Schema({
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
  },
  productId: {
    type: ObjectId,
    ref: "Product",
  },
})

const CartItem = mongoose.model('CartItem', CartItemSchema)

module.exports = CartItem;
