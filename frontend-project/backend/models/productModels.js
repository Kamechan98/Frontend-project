const Product = require('../schemas/productSchemas');

//Add product 
exports.addProduct = async (req, res) => {
    const { name, description, package, location, size, guests, bedrooms, price, rating, amenities, facilities, imgURLs } = req.body;

    if (!name || !description || !package || !location || !size || !guests || !bedrooms || !price || !rating || !amenities || !facilities || !imgURLs ) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        const data = await Product.create({
            name,
            description,
            package,
            location,
            size,
            guests,
            bedrooms,
            price,
            rating,
            amenities,
            facilities,
            imgURLs
        });
        return res.status(201).json(data);
    } catch (err) {
        console.log(err)
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

// EDIT a product

exports.updateProduct = async (req, res) => {
    const productId = req.params.id; // Assuming the ID is in the URL parameters
    const updates = req.body; // New data to update

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
        
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json(updatedProduct);
    } catch (err) {
        return res.status(500).json({ message: 'Error updating product' });
    }
};

//Delete Product

exports.deleteProduct = async (req, res) => {
    const productId = req.params.id; // Assuming the ID is in the URL parameters

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Error deleting product' });
    }
};

