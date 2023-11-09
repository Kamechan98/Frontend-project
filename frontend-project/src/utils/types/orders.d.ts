interface Order extends User, Product {
  _id: string;
  userId: Types.ObjectId | string; // Refers to the User schema
  product: Product; // Refers to the Product schema
  guests: number;
  status: 'Pending' | 'Confirmed' | 'Denied';
  cancellationProtectionFee: boolean;
  totalCost: number;
  bookingReference: string;
  paymentMethod: 'Mastercard' | 'Klarna' | 'Paypal' | 'American Express';
}