const User = require('../../models/userModel')
const signupMutationResolver = {
Mutation: {
    addUser: async (parent, { input }, context) => {
        try {
          const { email, password, roles, firstname, lastname } = input;
          // Check if user exists
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            throw new Error("User already exists.");
          }
  
          // Hash password
          const hashedPassword = await bcrypt.hash(password, 10);
  
          // Create new user
          const newUser = new User({
            email,
            password: hashedPassword,
            roles,
            firstname,
            lastname
          });
          await newUser.save();
          console.log("user na");
          return newUser;
        } catch (error) {
          throw new Error("Failed to add user");
        }
      },
  },
}

module.exports = signupMutationResolver