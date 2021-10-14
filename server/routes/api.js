const express = require ('express');
const router = express.Router();
const productsController = require("../controllers/productsController");
const cartController = require("../controllers/cartController");

router.get('/products', productsController.getProducts );
router.post('/products', productsController.addProduct );
//router.put('/products/:id', productsController.editProduct );
router.get('/cart', cartController.getCart );
router.post('/cart', cartController.addItemToCart );


module.exports = router;