const taskTypeDefs =`
type Task {
  _id: ID!
  taskID: String!
  title: String!
  description: String
  assignedTo: [User]
  status: TaskStatus!
  dueDate: String
  createdBy: User
  followedBy: [User]
  discussion: [Discussion]
  taskType: TaskType
  dependencies: [Task]
  acceptanceCriteria: String
  startDate: String
  completedDate: String
  estimatedTime: Int
  timestampInfo: TimestampInfo
  trackedMinutes: Int
  priority: TaskPriority
  valueArea: [String]
  logs: [String]
  links: [String]
  org: Org!
  project: Project!
  createdAt: String
}

type Discussion {
  tags: [String]
  info: String
  taggedUser: [String]
}

type TimestampInfo {
  startedAt: String
  pausedTimes: [PausedTime]
  completedAt: String
}

type PausedTime {
  pausedAt: String
  resumedAt: String
}

  scalar DateTime
  
  `

module.exports = taskTypeDefs;
