const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

// Create token
exports.generateToken = (user) => {
  return jwt.sign({ _id: user._id }, secretKey, { expiresIn: '30m' })
}

// Verify token
exports.verifyToken = (req, res, next) => {
  try {
    
    const token = req.headers.authorization.split(' ')[1]
    req.userId = jwt.verify(token, secretKey)._id
    next();

  } catch {
    res.status(401).json({ message: 'Access restricted. You need to login.' })
  }
}