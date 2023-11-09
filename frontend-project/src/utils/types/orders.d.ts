interface Order {
    _id: string;
    userId: string; // Assuming it stores the ID of the user
    products: Array<{
      productId: string; // Assuming it stores the ID of the product
    }>;
    totalPrice: number;
    status: 'Pending' | 'Confirmed' | 'Declined' ; // Example status
    // Other order properties
  }



  // userId: {
  //   type: mongoose.Types.ObjectId, ref: 'User', },
  //   product: {
  //     type: mongoose.Types.ObjectId, ref: 'Product' 
  //   },
  //   guests: {
  //     type: Number, required: true
  //   },
  //   status: {
  //     type: String,
  //     enum: ['Pending', 'Confirmed', 'Denied'],
  //     default: 'Pending',
  //   },
  //   cancellationProtectionFee: {
  //     type: Boolean,
  //     default: false
  //   },
  //   totalCost: {
  //     type: Number,
  //     required: true
  //   },
  //   bookingReference: {
  //     type: String, 
  //     default: uuidv4,
  //   },
  //   paymentMethod: {
  //     type: String,
  //     enum: ['Mastercard', 'Klarna', 'Paypal', 'American Express'],
  //     required: true
  //   }
  //   }, { timestamps: true })
    