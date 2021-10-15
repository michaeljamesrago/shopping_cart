const CartItem = require("../models/cartItem");

const getCart = (req, res, next) => {
  CartItem.find({}).then((cart) => {
    res.json(cart)
  })
}

const addItemToCart = (req, res, next) => {
  const { productId, title, price } = req.body
  CartItem.findOne({ productId })
  .then((item) => {
    if(!item) {
      return CartItem.create({
        title,
        price,
        quantity: 1,
        productId
      })
    } else {
      return CartItem.findOneAndUpdate(
        { productId },
        {
          quantity: item.quantity + 1
        },
        { new: true }
      )
    }
  })
  .then((item) => {
    res.json(item)
  });
}

const checkout = (req, res, next) => {
  CartItem.deleteMany({})
  .then(() => {
    res.json()
  })
}

exports.getCart = getCart;
exports.addItemToCart = addItemToCart;
exports.checkout = checkout;

// const Product = require("../models/product");

// const getProducts = (req, res, next) => {
//   Product.find({}).then((products) => {
//     res.json({products});
//   });
// };
