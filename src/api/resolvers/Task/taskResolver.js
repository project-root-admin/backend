const User = require("../../models/userModel");
const taskResolver = {
    Task: {
    createdBy: async (Task) => {
      try {
        const user = await User.findById(Task.createdBy);
        return user;
      } catch (error) {
        throw new Error("Failed to fetch User");
      }
    },
}
}

module.exports = taskResolver