const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true },
    price: { type: Number, required: true },
    imgURL: { type: String, required: true },
    budget: {},
    standard: {},
    deluxe: {}
  })
  
  module.exports = mongoose.model('Package', packageSchema)