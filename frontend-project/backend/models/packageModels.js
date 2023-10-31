const Package = require('../schemas/packageSchemas');

//Add product 
exports.addPackage = async (req, res) => {
    const { name, description, price, imgURL } = req.body;

    if (!name || !description || !destination || !price || !imgURL) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        const data = await Package.create({ name, description, price: imgURL });
        return res.status(201).json(data);
    } catch (err) {
        return res.status(500).json({ message: 'Error creating new product' });
    }
};
