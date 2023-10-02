const User = require("../../models/userModel");
const taskResolver = {
    Task: {
    author: async (Task) => {
      try {
        const user = await User.findById(Task.assignedBy);
        return user;
      } catch (error) {
        throw new Error("Failed to fetch User");
      }
    },
}
}

module.exports = taskResolver