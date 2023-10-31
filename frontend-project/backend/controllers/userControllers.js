const router = require('express').Router();
// const { verifyToken } = require('../auth/auth');
const { addUser,login } = require('../models/userModels');


// POST Users
router.post('/add', addUser);
router.post('/login', login);

module.exports = router;