const User = require('../schemas/userSchemas');
const { generateToken } = require('../auth/auth');


exports.addUser = async (req, res) => {
    const { firstName, lastName, email, password, created_at } = req.body;
  
    if(!firstName) res.status(400).json({ message: 'You need to enter a name' });
    if(!lastName) res.status(400).json({ message: 'You need to enter a name' });
    if(!email) res.status(400).json({ message: 'You need to enter an email address' });
    if(!password) res.status(400).json({ message: 'You need to enter a password' });
  
    // // Hashing password
    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(password, salt)
  
    // // Creating new user with hashed password on database
    // const _user = new User({ firstName, lastName, email, passwordHash: hash })
    // const user = await _user.save()
  
    if(!User) res.status(500).json({ message: 'Something went wrong when creating new user' });
  
    // Generating token
    res.status(201).json(generateToken(User))


    const data = await User.create({ firstName, lastName, email, password, created_at})
    
    
    return   res.status(201).json(data)
}

exports.login = async (req, res) => {
  
    const { email, password } = req.body;
  
    if(!email || !password) res.status(400).json({ message: 'You need to enter an email address and a password' })
  
    // Checking if input email exists as saved user email
    const user = await User.findOne({ email, password });
    if(!user) return res.status(401).json({ message: 'Incorrect credentials' })
  
    // Comparing entered password with decrypted saved password
    // const result = await bcrypt.compare(password, User.password);
    // if(!result) return res.status(401).json({ message: 'Incorrect credentials' })
  
    // Generating token
    res.status(200).json(generateToken(User))
    
    
    res.status(200).json(User)
}
  
    // Returning user object
    // res.status(200).json(User)

  