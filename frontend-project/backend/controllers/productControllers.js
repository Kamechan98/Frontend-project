const router = require('express').Router();
// const { verifyToken } = require('../auth/auth');
const { addProduct, getAllProducts, getProductById } = require('../models/productModels');


router.post('/add', addProduct);

router.get('/getproducts', getAllProducts);

router.get('/products/:id', getProductById);

module.exports = router;