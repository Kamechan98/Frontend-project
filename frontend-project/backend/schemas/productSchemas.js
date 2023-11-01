const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true },
    package: {
      type: String,
      enum: ['Budget', 'Standard', 'Deluxe'],
      default: 'Budget',
      required: true
  },
    location: {type: String, required: true },
    size: {type: String, required: true },
    guests: {type: Number, required: true },
    bedrooms: {type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    amenities: [{ type: String, required: true }],
    facilities: [{ type: String, required: true }],
    imgURLs: [{ type: String, required: true }],

  })
  
  module.exports = mongoose.model('Product', productSchema)