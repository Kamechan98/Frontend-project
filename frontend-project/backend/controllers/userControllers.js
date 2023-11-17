const router = require('express').Router();
const { verifyToken } = require('../auth/auth');
const { addUser,login, getMyUser } = require('../models/userModels');


// POST Users
router.post('/add', addUser);
router.post('/login', login);

router.get('/me',verifyToken, getMyUser);

module.exports = router;