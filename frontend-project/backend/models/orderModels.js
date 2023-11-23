const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const User = require('../schemas/userSchemas');
const Order = require('../schemas/orderSchemas');
const Product = require('../schemas/productSchemas'); // Import the Product schema/model

exports.addOrder = async (req, res) => {
    const { userId, body } = req 
    const { product, guests, status, cancellationProtectionFee, totalCost, paymentMethod } = body;

    if ( !product || !guests || !totalCost || !paymentMethod) {
      console.log("BODY", body)
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        // Fetch the product details using the productId
        const _product = await Product.findById(product);

        if (!_product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        // Create the order, including the fetched product details
        const newOrder = await Order.create({ userId, product, guests, status, cancellationProtectionFee, totalCost, paymentMethod });
        await newOrder.populate('product');
        return res.status(201).json(newOrder);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error creating order' });
    }
};

//Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const _orders = await Order.find().populate('product');
        return res.status(200).json(_orders);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error fetching orders' });
    }
};


exports.getOrdersByUserId = async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.params.id })  
      .populate({ path: 'product', select: 'name price imgURLs' })
        .populate({ path: 'status', select: 'status' })
  
      if (!orders || orders.length === 0) {
        return res.status(404).json({ message: 'No orders found for this user' })
      }
  
      res.status(200).json(orders)
    } catch (error) {
      console.error('Error fetching orders by user ID:', error)
      res.status(500).json({ message: 'Error fetching orders' })
    }
  }
