const router = require('express').Router();
const { addUser, } = require('../models/userModels');


// Create
router.post('/add', addUser);

module.exports = router;