const {Documentation, MutationQueryItem} = require('../../models/documentationModel')
const docsMutationResolver = {
Mutation: {
  createDocumentation: async (parent, {input}, context) => {
    try {

      console.log(input)
      const docs = new Documentation(input);

      await docs.save()
      console.log(docs)
      return docs;
    } catch (error) {
      console.log("err->", error.message);
      throw new Error("Failed to create documentation");
    }
  },

  updateDocumentation: async (parent, {id, input}, context) => {
    try {
      const docs = await Documentation.findByIdAndUpdate(id, input, { new: true });
      return docs;
    } catch (error) {
      throw new Error("Failed to update documentation");
    }
  },
  createMutationQueryItems: async (parent, {title}, context) => {
    try {
      const Item = new MutationQueryItem({
        title}
        );
        await Item.save()
      return Item;
    } catch (error) {
      console.log("err->", error.message);
      throw new Error("Failed to create mutation query item");
    }
  }

  },
}

module.exports = docsMutationResolver