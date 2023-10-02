const userQueryTypeDefs = `
  extend type Query {
    users: [User] @hasRole(roles: ["SUPERDUPERADMIN"])
    user(id: ID!): User
  }
`;

// Resolver Pending:  getUser
module.exports = userQueryTypeDefs


