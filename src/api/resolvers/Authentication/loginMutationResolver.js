   
   const User = require("../../models/userModel");
   const jwt = require("jsonwebtoken");
   const bcrypt = require("bcrypt");
   // Login a user

   const loginMutation = {
Mutation : {
    login: async (parent, { email, password }, context) => {
      console.log('parent', parent)
      console.log('context', context)
      // Find user by email
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Invalid Credentials!");
      }

      // Compare password
      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        throw new Error("Credentials invalid!");
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

      return {status: 200, message: "User logged in successfully",user, token}
    },

    }
  }

    module.exports = loginMutation