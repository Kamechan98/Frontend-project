const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', },
  product: [{ product: { type: mongoose.Types.ObjectId, ref: 'Product' }}],
  bookingDateArrival: { type: Date }, 
  bookingDateDeparture: { type: Date }, 
  guest: {type: Number, required: true},
  status: {type: String, required: true},
  bookingReference: {type: String, required: true},
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)
