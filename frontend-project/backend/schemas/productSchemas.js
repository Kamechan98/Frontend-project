const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true },
    destination: {type: String, required: true },
    price: { type: Number, required: true },
    imgURLs: [{ type: String, required: true }],
    saved: {type: String, required: true },
    // category: {type: String, required: true },
    // rating: { type: String, required: true },
  })
  
  module.exports = mongoose.model('Product', productSchema)