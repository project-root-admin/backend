const User = require('../../models/userModel')
const userQueryResolver = {
Query: {
    
 
    users: async () => {
      try {
        const users = await User.find({});
        console.log(users);
        return users;
      } catch (error) {
        throw new Error("Failed to fetch User");
      }
    },


  },
}

module.exports = userQueryResolver