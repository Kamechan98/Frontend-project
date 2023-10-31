const router = require('express').Router();
// const { verifyToken } = require('../auth/auth');
const { addPackage } = require('../models/packageModels');


// POST Users
router.post('/add', addPackage);

module.exports = router;