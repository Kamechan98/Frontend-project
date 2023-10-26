const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: false },
    lastName: {type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date },
  })
  
  module.exports = mongoose.model('User', userSchema)