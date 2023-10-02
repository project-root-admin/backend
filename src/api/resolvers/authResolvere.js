const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const generateToken = (user) => {
  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
};

const authenticateUser = async (email, password) => {
  // Find user by email
  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthenticationEroor("User not found.");
  }

  // Compare password
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new Error("Invalid password.");
  }

  // Generate JWT token
  const token = generateToken(user);

  return { user, token };
};

module.exports = {
  authenticateUser,
};