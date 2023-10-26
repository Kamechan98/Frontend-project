const router = require('express').Router();
const { addUser,login } = require('../models/userModels');


// Create
router.post('/add', addUser);
router.post('/login', login);

module.exports = router;