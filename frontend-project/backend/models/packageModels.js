const Package = require('../schemas/packageSchemas'); // Import the Package model

// Function to add a new package
exports.addPackage = async (req, res) => {
    const { packageType  } = req.body;

    try {
        const newPackage = await Package.create({ packageType /*, other fields related to the package */ });
        return res.status(201).json(newPackage);
    } catch (err) {
        return res.status(500).json({ message: 'Error adding a new package' });
    }
};

// Function to get all packages
exports.getAllPackages = async (req, res) => {
    try {
        const allPackages = await Package.find();
        return res.status(200).json(allPackages);
    } catch (err) {
        return res.status(500).json({ message: 'Error fetching packages' });
    }
};
