const taskTypeDefs =`
type Task {
    id: ID!
    taskID: String!
    title: String!
    description: String
    assignedTo: [ID!]
    status: TaskStatus!
    dueDate: String  
    assignedBy: ID!
    author: User
    followedBy: User
    discussion: [Discussion]  
    acceptanceCriteria: String
    startDate: String
    endDate: String
    duration: String
    priority: [priorityEnum]
    valueArea: [String]
    Logs: [String]
    Links:[String]
    createdAt: String!
  }

  type Discussion {
    tags: [String]
    info: [String]
    taggedUser: [String]
  }
  
  `

  module.exports = taskTypeDefs;