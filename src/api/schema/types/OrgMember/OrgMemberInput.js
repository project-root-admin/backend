const orgMemberInputTypeDefs = `
 input OrgMemberInput {
    org: ID!
    projects: [ID]
    user: ID!
    role: String!
    status: String
  }`

  module.exports = orgMemberInputTypeDefs