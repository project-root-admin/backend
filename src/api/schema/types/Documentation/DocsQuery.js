const docsQueryTypeDefs = `
extend type Query {
getDocumentation(itemId: ID!): Docs
getAllMutationQueryItems: [MutationQueryItem]
}

`;


module.exports = docsQueryTypeDefs


