const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Create a new user instance
    const user = new User({
      name,
      email,
      password,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

module.exports = { createUser };