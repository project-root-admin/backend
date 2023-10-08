const orgTypeDefs =`
type Org {
  id: ID
  orgId: String!
  name: String!
  website: String
  industry: String
  location: Location
  tags: [String]
  createdBy: User!
  members: [OrgMember]
  projects: [Project!]!
  projectsCompleted: Int
  createdAt: String
  teams: [Team]
  clientList: [String]
}

type Location {
  street: String
  city: String
  state: String
  postalCode: String
  country: String
}

type OrgMember {
  user: User!
  role: Role
  status: Status
}

type Team {
  name: String
  members: [User]
  description: String
}
`

  module.exports = orgTypeDefs;