const User = require('../schemas/userSchemas');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../auth/auth');

exports.addUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'Please provide all user details' });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const data = await User.create({ firstName, lastName, email, password: hash });
        return res.status(201).json(data);
    } catch (err) {
        console.error('Error creating a new user:', err);
        return res.status(500).json({ message: 'Error creating a new user' });
    }
};



exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please enter email and password' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generating and sending token
        const token = generateToken(user);
        return res.status(200).json({ token, user });
    } catch (err) {
        return res.status(500).json({ message: 'Error in user login' });
    }
};

exports.getMyUser = async (req, res) => {
    try {
        // Assuming you are passing the user ID through the request parameters
        const { userId } = req

        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send the user data in the response
        return res.status(200).json({ user });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error in getting user' });
    }
};

  