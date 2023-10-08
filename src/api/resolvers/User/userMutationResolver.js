const User = require('../../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userMutationResolver = {
Mutation: {
    addUser: async (parent, { input }, context) => {
        try {
          const { email, password,...rest } = input;
          // Check if user exists
          const existingUser = await User.findOne({ email }); 
          if (existingUser) {
            throw new Error("User already exists.");
          }
  
          // Hash password
          const hashedPassword = await bcrypt.hash(password, 10);
          console.log('rest', rest)
          // Create new user
          const user = new User({
            email,
            password: hashedPassword,
            ...rest
          });
          await user.save();
          console.log('newUser', user)
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1h",
          });
          console.log("user added");
          return {user, token};
        } catch (error) {
          console.log('err->', error.message);
          throw new Error("Failed to add user");
        }
      },
      updateUser: async (parent, { id, input }, context) => {
        try {
          const user = await User.findByIdAndUpdate(id, input, { new: true });
          return user;
        } catch (error) {
          throw new Error("Failed to update user");
        }
      },

      deleteUser: async (parent, { id }, context) => {
        try {
          const user = await User.findByIdAndDelete(id);
          return user;
        } catch (error) {
          throw new Error("Failed to delete user");
        }
      },
  },
}

module.exports = userMutationResolver