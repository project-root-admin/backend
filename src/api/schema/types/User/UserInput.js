// UserInput.js
const userInputTypeDefs = `
input UserInput {
  firstname: String!
  lastname: String! 
  email: String! 
  password: String!
  roles: [String]
}
`;

module.exports = userInputTypeDefs;