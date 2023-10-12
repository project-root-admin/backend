const userMutationTypeDefs = `
  extend type Mutation {
    addUser(input: CreateUserInput!): AuthResponse
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): User
    login(email: String!, password: String!): AuthResponse
  }
`;

//Pending Resolver: updateUser, deleteUser, loginUser
module.exports = userMutationTypeDefs


