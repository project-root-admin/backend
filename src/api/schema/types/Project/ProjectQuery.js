const orgQueryTypeDefs = `
extend type Query {
getProject(id: ID!): Project
getAllProjects: [Project]
}
`;


module.exports = orgQueryTypeDefs


