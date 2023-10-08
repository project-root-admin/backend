const User = require('../../models/userModel')
const userQueryResolver = {
Query: {
    
 
   getUser: async (root, {id}) => {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      throw new Error("Failed to fetch User");
    }
   }


  },
}

module.exports = userQueryResolver