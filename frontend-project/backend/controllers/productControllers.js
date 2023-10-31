const router = require('express').Router();
// const { verifyToken } = require('../auth/auth');
const { addProduct, getAllProducts, getProductById } = require('../models/productModels');

//Add a product
router.post('/add', addProduct);

//Get all products 
router.get('/getproducts', getAllProducts);

//Get product by ID
router.get('/products/:id', getProductById);

module.exports = router;