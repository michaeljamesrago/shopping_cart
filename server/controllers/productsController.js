const Product = require("../models/product");

const getProducts = (req, res, next) => {
  Product.find({})
  .then((products) => {
    req.products = products;
    next()
  });
};

const sendProducts = (req, res) => {
  const products = req.products;
  res.json(products);
}

const addProduct = (req, res, next) => {
  Product.create(req.body)
  .then((product) => {
    req.product = product
    next()
  })
};

const sendProduct = (req, res) => {
  const product = req.product
  res.json(product)
}

const editProduct = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then((product) => {
    req.product = product
    next()
  })
};

const deleteProduct = (req, res, next) => {
  const id = req.params.id
  Product.findByIdAndDelete(id)
  .then(() => next())
}

exports.getProducts = getProducts;
exports.addProduct = addProduct;
exports.sendProducts = sendProducts;
exports.sendProduct = sendProduct;
exports.deleteProduct = deleteProduct;
exports.editProduct = editProduct;


// const Board = require("../models/board");
// const Card = require("../models/card");
// const List = require("../models/list");
// const HttpError = require("../models/httpError");
// const { validationResult } = require("express-validator");

// const createBoard = (req, res, next) => {
//   const errors = validationResult(req);
//   console.log(errors)
//   if (errors.isEmpty()) {
//     Board.create(req.body.board)
//       .then((board) => {
//         Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
//           (board) => res.json({ board })
//         );
//       })
//       .catch((err) =>
//         next(new HttpError("Creating board failed, please try again", 500))
//       );
//   } else {
//     return next(new HttpError("The input field is empty.", 404));
//   }
// };

// const getBoard = (req, res, next) => {
//   const boardId = req.params.id
//   Board.findById(boardId, "title _id lists")
//   .populate('lists')
//   .then((board) => {
//     if (board) {
//       res.json({board});
//     } else {
//       res.status(404).end()
//     }
//   })
// }

// exports.getBoards = getBoards;
// exports.getBoard = getBoard;
// exports.createBoard = createBoard;
