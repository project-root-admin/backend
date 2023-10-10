const docsInputTypeDefs = `
input DocsInput {
    title: String
    description: String
    args: [ArgsTypeInput]
    response: String
    itemId: String
    examples: [String]
  }
  
  input ArgsTypeInput {
    name: String
    type: String
    description: String
  }
  `
  module.exports = docsInputTypeDefs 

