// UserInput.js
const userInputTypeDefs = `
input CreateUserInput {
  username: String
  firstname: String!
  lastname: String!
  profilePicture: String
  phoneNumber: String
  address: UserAddressInput
  dateOfBirth: String
  bio: String
  permissions: [String]
  type: UserType
  organizations: [String]
  project: [String]
  email: String!
  password: String!
}

input UpdateUserInput {
  username: String
  firstname: String
  lastname: String
  profilePicture: String
  phoneNumber: String
  address: UserAddressInput
  dateOfBirth: String
  bio: String
  organizations: [String]
  project: [String]
  email: String
}

input UserAddressInput {
  street: String
  city: String
  state: String
  postalCode: String
  country: String
}

`;

module.exports = userInputTypeDefs;