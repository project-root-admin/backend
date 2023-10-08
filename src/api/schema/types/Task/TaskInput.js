const taskInputTypeDefs = `
input CreateTaskInput {
  taskID: String!
  title: String!
  description: String
  assignedTo: [ID!]!
  status: TaskStatus!
  dueDate: String
  createdBy: ID
  followedBy: [ID!]
  discussion: [DiscussionInput]
  taskType: TaskType
  dependencies: [ID!]
  acceptanceCriteria: String
  startDate: String
  completedDate: String
  estimatedTime: Int
  trackedMinutes: Int
  priority: Priority
  valueArea: [String]
  logs: [String]
  links: [String]
  org: ID!
  project: ID!
}

input UpdateTaskInput {
  title: String
  description: String
  assignedTo: [ID]
  status: TaskStatus
  dueDate: String
  createdBy: ID
  followedBy: [ID]
  discussion: [DiscussionInput]
  taskType: TaskType
  dependencies: [ID]
  acceptanceCriteria: String
  startDate: String
  completedDate: String
  estimatedTime: Int
  trackedMinutes: Int
  priority: Priority
  valueArea: [String]
  logs: [String]
  links: [String]
}

input DiscussionInput {
  tags: [String]
  info: String
  taggedUser: [String]
}
  `

  module.exports = taskInputTypeDefs 