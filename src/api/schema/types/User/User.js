// User.js
const userTypeDefs = `
type User {
  id: ID!
  username: String
  firstname: String!
  lastname: String!
  profilePicture: String
  address: UserAddress
  dateOfBirth: String
  bio: String
  permissions: [String]
  type: UserType
  organizations: [Org]
  project: [Project]
  email: String!
  tasks: [ID]
  roles: [String!]!
  createdAt: DateTime!
}

type UserAddress {
  street: String
  city: String
  state: String
  postalCode: String
  country: String
}


type AuthResponse {
  user: User
  token: String
}

scalar DateTime
`;

module.exports = userTypeDefs;