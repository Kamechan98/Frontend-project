const router = require('express').Router();
// const { verifyToken } = require('../auth/auth');
const { addProduct } = require('../models/productModels');


// POST Users
router.post('/add', addProduct);

module.exports = router;