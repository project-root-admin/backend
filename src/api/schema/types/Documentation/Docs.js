//Both Documentation and Mutationand Query types are defined here
const docsTypeDefs =`
type Docs {
  id: ID
  title: String
  description: String
  args: [ArgsType]
  response: String
  itemId: String
  examples: [String]
}

type ArgsType {
  name: String
  type: String
  description: String
}

type MutationQueryItem {
  title: String
  id: String
}
`

  module.exports = docsTypeDefs;