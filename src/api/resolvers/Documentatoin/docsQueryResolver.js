const {Documentation, MutationQueryItem} = require('../../models/documentationModel');
const docsQueryResolver = {
Query: {
  getDocumentation: async (parent, {itemId}, context) => {
    try {
      const docs = await Documentation.findById({itemId});
      return docs;
    } catch (error) {
      throw new Error("Failed to fetch documentation");
    }

  },

  getAllMutationQueryItems: async (parent, args, context) => {
    try {
      const Items = await MutationQueryItem.find();
      return Items;
    } catch (error) {
      throw new Error("Failed to fetch Items");
    }
  }
}
}

module.exports = docsQueryResolver