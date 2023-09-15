const User = require("../models/userModel");
const resolvers = {
  Query: {
    getAllUsers: async () => {
      try {
        const users = await User.find({})
        console.log(users)
        return users;
      } catch (error) {
        throw new Error("Failed to fetch User");
      }
    },
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      try {
        const newUser = new User({ name, email, password });
        const user = await newUser.save();
        return user;
      } catch (error) {
        throw new Error("Failed to add user");
      }
    },
  },
};

module.exports = resolvers;
