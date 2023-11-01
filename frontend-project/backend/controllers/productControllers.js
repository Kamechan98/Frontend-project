const router = require('express').Router();
// const { verifyToken } = require('../auth/auth');
const { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../models/productModels');

//Add a product
router.post('/add', addProduct);

//Get all products 
router.get('/getproducts', getAllProducts);

//Get product by ID
router.get('/:id', getProductById);

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router;