const userQueryTypeDefs = `
  extend type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }
`;

// Resolver Pending:  getUser
module.exports = userQueryTypeDefs


