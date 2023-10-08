const orgMutationTypeDefs = `
extend type Mutation {
createOrg(input: OrgInput): Org
updateOrg(id: ID!, input: OrgInput): Org
deleteOrg(id: ID!): Org
}
`;


module.exports = orgMutationTypeDefs


