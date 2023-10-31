const Product = require('../schemas/productSchemas');

//Add product 
exports.addProduct = async (req, res) => {
    const { name, description, destination, price, imgURLs, saved } = req.body;

    if (!name || !description || !destination || !price || !imgURLs || !saved) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        const data = await Product.create({ name, description, destination, price, imgURLs, saved });
        return res.status(201).json(data);
    } catch (err) {
        return res.status(500).json({ message: 'Error creating new product' });
    }
};



//Get products

exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        return res.status(200).json(allProducts);
    } catch (err) {
        return res.status(500).json({ message: 'Error fetching products' });
    }
};


//Get product by ID

exports.getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(product);
    } catch (err) {
        return res.status(500).json({ message: 'Error fetching product by ID' });
    }
};

