interface Order {
    _id: string;
    userId: string; // Assuming it stores the ID of the user
    products: Array<{
      productId: string; // Assuming it stores the ID of the product
      quantity: number;
    }>;
    totalPrice: number;
    status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered'; // Example status
    // Other order properties
  }