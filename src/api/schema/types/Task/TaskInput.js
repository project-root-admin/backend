const taskInputTypeDefs = `
input CreateTaskInput {
  taskID: String!
  title: String!
  description: String
  assignedTo: [ID]
  status: TaskStatus!
  dueDate: DateTime
  createdBy: ID
  followedBy: [ID]
  discussion: [DiscussionInput] 
  taskType: TaskType
  dependencies: [ID]
  acceptanceCriteria: String
  startDate: DateTime
  completedDate: DateTime
  estimatedTime: Int
  timestampInfo: TimestampInfoInput
  trackedMinutes: Int
  priority: TaskPriority
  valueArea: [String]
  logs: [String]
  links: [String]
  org: ID!
  project: ID!
}

input UpdateTaskInput {
  taskID: String!
  title: String!
  description: String
  assignedTo: [ID]
  status: TaskStatus!
  dueDate: DateTime 
  followedBy: [ID]
  discussion: [DiscussionInput]
  taskType: TaskType
  dependencies: [ID]
  acceptanceCriteria: String
  startDate: DateTime
  completedDate: DateTime
  estimatedTime: Int
  timestampInfo: TimestampInfoInput
  trackedMinutes: Int
  priority: TaskPriority
  valueArea: [String]
  logs: [String]
  links: [String]
  org: ID!
  project: ID!
}

input DiscussionInput {
  tags: [String]
  info: String
  taggedUser: [String]
}

input TimestampInfoInput {
  startedAt: DateTime
  pausedTimes: [PausedTimeInput]
  completedAt: DateTime
}

input PausedTimeInput {
  pausedAt: DateTime
  resumedAt: DateTime
}  `

  module.exports = taskInputTypeDefs 