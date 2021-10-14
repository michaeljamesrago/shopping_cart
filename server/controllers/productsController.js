const Product = require("../models/product");

const getProducts = (req, res, next) => {
  Product.find({}).then((products) => {
    res.json({products});
  });
};

const addProduct = (req, res, next) => {
  Product.create(req.body.product)
    .then((product) => {
      Product.find({_id: product._id}).then((product) => {
        res.json({product});
      });
    });
};

const editProduct = (req, res, next) => {
  const productId = req.params.id
  Product.findById(productId)
}

exports.getProducts = getProducts;
exports.addProduct = addProduct;

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
