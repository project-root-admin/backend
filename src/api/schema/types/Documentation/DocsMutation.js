const docsMutationTypeDefs = `
extend type Mutation {
    createDocumentation(input: DocsInput) : Docs
    createMutationQueryItems(title: String!): MutationQueryItem
    updateDocumentation(id: ID!, input: DocsInput) : Docs
}
`;


module.exports = docsMutationTypeDefs


