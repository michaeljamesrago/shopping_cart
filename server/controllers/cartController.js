const Cart = require("../models/cartItem");

const getCart = (req, res, next) => {
  Cart.find({}).then((cart) => {
    res.json(cart)
  })
}

const addItemToCart = (req, res, next) => {
    
}

exports.getCart = getCart;
exports.addItemToCart = addItemToCart;

// const Product = require("../models/product");

// const getProducts = (req, res, next) => {
//   Product.find({}).then((products) => {
//     res.json({products});
//   });
// };
