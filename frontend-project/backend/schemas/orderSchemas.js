const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const orderSchema = mongoose.Schema({
userId: {
type: mongoose.Types.ObjectId, ref: 'User', },
productId: {
  type: mongoose.Types.ObjectId, ref: 'Product' 
},
  // bookingDateArrival: {
  // type: Date, required: true  }, 
  // bookingDateDeparture: {
  // type: Date, required: true }, 
guests: {
  type: Number, required: true
},
status: {
  type: String,
  enum: ['Pending', 'Confirmed', 'Denied'],
  default: 'Pending',
  required: true
},
cancellationProtectionFee: {
  type: Boolean,
  default: false
},
totalCost: {
  type: Number,
  required: true
},
bookingReference: {
  type: String, 
  default: uuidv4,
  required: true
},
paymentMethod: {
  type: String,
  enum: ['Mastercard', 'Klarna', 'Paypal', 'American Express'],
  required: true
}
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)
