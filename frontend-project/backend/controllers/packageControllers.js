const router = require('express').Router();
// const { verifyToken } = require('../auth/auth');
const { addPackage, getAllPackages } = require('../models/packageModels');

//Add a product
router.post('/add', addPackage);

//Get all products 
router.get('/getpackages', getAllPackages);

module.exports = router;