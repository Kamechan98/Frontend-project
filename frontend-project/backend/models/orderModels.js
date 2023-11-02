const Order = require('../schemas/orderSchemas');
const Product = require('../schemas/productSchemas'); // Import the Product schema/model

exports.addOrder = async (req, res) => {
    const { userId, productId, guests, status, cancellationProtectionFee, totalCost, bookingReference, paymentMethod } = req.body;

    if (!userId || !productId || !guests || !status || !cancellationProtectionFee || !totalCost || !bookingReference || !paymentMethod) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        // Fetch the product details using the productId
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Create the order, including the fetched product details
        const data = await Order.create({ userId, productId, guests, status, cancellationProtectionFee, totalCost, bookingReference, paymentMethod });
        return res.status(201).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error creating order' });
    }
};
