const taskTypeDefs =`
type Task {
  id: ID
  taskID: String!
  title: String!
  description: String
  assignedTo: [User!]!
  status: TaskStatus!
  dueDate: DateTime
  createdBy: User
  followedBy: [User!]!
  discussion: [DiscussionItem]
  taskType: TaskType
  dependencies: [Task!]!
  acceptanceCriteria: String
  startDate: String
  completedDate: String
  estimatedTime: Int
  timestampInfo: TimestampInfo
  trackedMinutes: Int
  priority: Priority
  valueArea: [String]
  logs: [String]
  links: [String]
  org: Org!
  project: Project!
  createdAt: String!
}

type DiscussionItem {
  tags: [String]
  info: String
  taggedUser: [String]
}

type TimestampInfo {
  startedAt: DateTime
  pausedTimes: [DateTime]
  completedAt: DateTime
}

  scalar DateTime
  
  `

  module.exports = taskTypeDefs;