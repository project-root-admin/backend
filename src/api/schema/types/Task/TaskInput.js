const taskInputTypeDefs = `
input TaskInput {
    taskID: String
    title: String
    description: String
    assignedTo: [ID!]
    status: TaskStatus
    dueDate: String
    assignedBy: ID
    followedBy: [ID]
    discussion: [DiscussionInput]
    acceptanceCriteria: String
    startDate: String
    endDate: String
    priority: [priorityEnum]
    valueArea: [String]
    logs: [String]
    links: [String]
    createdAt: String!
  }
  input DiscussionInput {
    tags: [String]
    info: [String]
    taggedUser: [String]
  }
  `

  module.exports = taskInputTypeDefs 