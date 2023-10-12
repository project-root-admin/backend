const projectInputTypeDefs = `
input ProjectInput {
  name: String!
  description: String
  startDate: String
  endDate: String
  status: String
  priority: String
  tags: [String]
  teamMembers: [TeamMemberInput]
  milestones: [MilestoneInput]
  attachments: [AttachmentInput]
  budget: Float
  progress: Float
  notes: String
  createdBy: ID!
  org: ID!
}

input TeamMemberInput {
  name: String
  members: [ID]
  description: String
}

input MilestoneInput {
  name: String
  description: String
  dueDate: String
}

input AttachmentInput {
  name: String
  fileUrl: String
  uploadedBy: ID
}
  `

  module.exports = projectInputTypeDefs 