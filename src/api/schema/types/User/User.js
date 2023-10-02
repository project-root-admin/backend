// User.js
const userTypeDefs = `
type User {
  id: ID!
  firstname: String!
  lastname: String!
  org: [Org]
  project: [Project]
  email: String!
  password: String!
  tasks: [Task]
  roles: [String!]!
  permissions: [String!]
  createdAt: String!
}
`;

module.exports = userTypeDefs;