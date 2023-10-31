const Product = require('../schemas/productSchemas');

//Add product 
exports.addProduct = async (req, res) => {
    const { name, description, destination, price, imgURLs, saved } = req.body;

    if (!name || !description || !destination || !price || !imgURLs || !saved) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        const data = await Product.create({ name, description, destination, price: imgURLs, saved });
        return res.status(201).json(data);
    } catch (err) {
        return res.status(500).json({ message: 'Error creating new product' });
    }
};


//Get products


//Get product by ID
