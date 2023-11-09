const router = require('express').Router();
const Product = require('../models/productModels');
// const { verifyToken } = require('../auth/auth');
const { addProduct, getAllProducts, getProductsByPackage, getProductById, updateProduct, deleteProduct } = require('../models/productModels');

//Add a product
router.post('/add', addProduct);

//Get all products 
router.get('/getproducts', getAllProducts);

router.get('/package/:packageType', getProductsByPackage)

//Get product by ID
router.get('/:id', getProductById);

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router;