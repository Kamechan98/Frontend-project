const Order = require('../schemas/orderSchemas');

//Add Order 
exports.addOrder = async (req, res) => {
    const { userId, package, guest, status, bookingReference } = req.body;

    if (!userId || !package || !guest || !status || !bookingReference) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        const data = await Order.create({ userId, package, bookingDateArrival, bookingDateDepareture, guest, status: bookingReference });
        return res.status(201).json(data);
    } catch (err) {
        return res.status(500).json({ message: 'Error creating order' });
    }
};