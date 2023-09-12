const User = require("../models/userModel");
const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
  },
  Mutation: {
    createUser: async (parent, { name, email }) => {
      try {
        const user = new User({ name, email });
        await user.save();
        return user;
      } catch (error) {
        throw new Error("Failed to create user");
      }
    },
  },
};

module.exports = resolvers;
