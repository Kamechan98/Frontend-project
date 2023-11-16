const router = require('express').Router();
const { verifyToken } = require('../auth/auth');
const { addOrder, getAllOrders, getOrdersByUserId, getOrderById } = require('../models/orderModels');


// POST Users
router.post('/add', verifyToken, addOrder);

router.get('/getOrders', getAllOrders)

// router.get('/:id', getOrderById)

router.get('/:id', getOrdersByUserId)

module.exports = router;