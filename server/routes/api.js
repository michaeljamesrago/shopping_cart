const express = require ('express');
const router = express.Router();
const productsController = require("../controllers/productsController");
const cartController = require("../controllers/cartController");

router.get('/products', productsController.getProducts, productsController.sendProducts );
router.post('/products', productsController.addProduct, productsController.sendProduct);
router.delete('/products/:id', productsController.deleteProduct, productsController.sendProduct)
router.put('/products/:id', productsController.editProduct, productsController.sendProduct );
router.get('/cart', cartController.getCart, cartController.sendCart);
router.post('/cart', cartController.addItemToCart );
router.post('/cart/checkout', cartController.checkout );


module.exports = router;
