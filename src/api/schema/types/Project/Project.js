const projectTypeDefs =`
type Project {
  id: ID
  name: String!
  description: String
  startDate: String
  endDate: String
  status: String
  priority: String
  tags: [String]
  teamMembers: [TeamMember]
  milestones: [Milestone]
  attachments: [Attachment]
  budget: Float
  progress: Float
  notes: String
  createdBy: User!
  createdAt: String
  orgId: ID!
}

type TeamMember {
  name: String
  members: [ID]
  description: String
}

type Milestone {
  name: String
  description: String
  dueDate: String
}

type Attachment {
  name: String
  fileUrl: String
  uploadedBy: User
}
`

  module.exports = projectTypeDefs;