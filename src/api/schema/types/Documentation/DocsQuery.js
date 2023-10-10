const docsQueryTypeDefs = `
extend type Query {
getDocumentation(itemId: String!): Docs
getAllMutationQueryItems: [MutationQueryItem]
}

`;


module.exports = docsQueryTypeDefs


