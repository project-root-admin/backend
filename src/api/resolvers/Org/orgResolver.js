const User  = require('../../models/userModel'); 

const orgResolver = {
    Org: {
        createdBy: async (parent, args, context, info) => {
          try {
            const user = await User.findById(parent.createdBy);
            return user;
          } catch (error) {
            throw new Error(`Error fetching createdBy user: ${error}`);
          }
        },
      },
}

module.exports = orgResolver