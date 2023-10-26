const User = require('../schemas/userSchemas');


exports.addUser = async (req, res) => {
    const { email, password } = req.body;
  
    // if(!firstName) res.status(400).json({ message: 'You need to enter a name' });
    // if(!lastName) res.status(400).json({ message: 'You need to enter a name' });
    if(!email) res.status(400).json({ message: 'You need to enter an email address' });
    if(!password) res.status(400).json({ message: 'You need to enter a password' });
  
    // Hashing password
    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(password, salt)
  
    // Creating new user with hashed password on database
    // const _user = new User({ email, passwordHash: hash })
    // const user = await _user.save()
  
    // if(!user) res.status(500).json({ message: 'Something went wrong when creating new user' });
  
    // // Generating token
    // res.status(201).json(generateToken(user))


    const data = await User.create({ email, password})
    
    
    return   res.status(201).json(data)
}
