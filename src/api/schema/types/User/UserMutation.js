const userMutationTypeDefs = `
  extend type Mutation {
    addUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): User
    loginUser(email: String!, password: String!): String
  }
`;

//Pending Resolver: updateUser, deleteUser, loginUser
module.exports = userMutationTypeDefs


