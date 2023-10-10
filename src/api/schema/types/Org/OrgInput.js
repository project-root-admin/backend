const orgInputTypeDefs = `
input OrgInput {
  orgId: String!
  name: String!
  website: String
  industry: String
  location: LocationInput
  tags: [String]
  createdBy: ID!
  members: [OrgMemberInput]
  projects: [ID!]!
  projectsCompleted: Int
  teams: [TeamInput]
  clientList: [String]
}

input LocationInput {
  street: String
  city: String
  state: String
  postalCode: String
  country: String
}

input OrgMemberInput {
  user: ID!
  role: Role
  status: Status
}

input TeamInput {
  name: String
  members: [ID]
  description: String
}
`

module.exports = orgInputTypeDefs 