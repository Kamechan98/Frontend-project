const router = require('express').Router();
// const { verifyToken } = require('../auth/auth');
const { addOrder } = require('../models/orderModels');


// POST Users
router.post('/add', addOrder);

module.exports = router;