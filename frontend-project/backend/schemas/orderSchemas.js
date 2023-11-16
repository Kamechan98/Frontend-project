const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const orderSchema = mongoose.Schema({
userId: {
type: mongoose.Types.ObjectId, ref: 'User', },
product: {
  type: mongoose.Types.ObjectId, ref: 'Product' 
},
guests: {
  type: Number, required: true
},
status: {
  type: String,
  enum: ['Pending', 'Confirmed', 'Denied'],
  default: 'Pending',
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
},
paymentMethod: {
  type: String,
  enum: ['Mastercard', 'Klarna', 'Paypal', 'Amex'],
  required: true
}
}, { timestamps: true })



orderSchema.pre('save', function(next) {
  this.totalCost = this.totalCost + (this.cancellationProtectionFee ? 500 : 0);
  console.log("PRE save", this.totalCost)
  next();
});
module.exports = mongoose.model('Order', orderSchema)
