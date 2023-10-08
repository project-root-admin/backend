const projectMutationTypeDefs = `
extend type Mutation {
createProject(input: ProjectInput): Project
updateProject(id: ID!, input: ProjectInput): Project
deleteProject(id: ID!): Project
}
`;


module.exports = projectMutationTypeDefs


