const OrgTypeDefs =`
type OrgMember {
  id: ID!
  org: Org!
  projects: [Project]
  user: User!
  role: String!
  status: String
  createdAt: String!
}
`

  module.exports = OrgTypeDefs;