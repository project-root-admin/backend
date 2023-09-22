const typeDefs = `
type User {
  id: ID!
  firstname: String!
  lastname: String!
  profileIconUrl: String
  email: String!
  password: String!
  tasks: [Task]
  roles: [String]
  createdAt: String!
}

type Org {
  id: ID!
  name: String!
  email: String!
  members: [User!]!
}



enum TaskStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
  HOLD
  CANCELLED
}

enum priorityEnum {
  HIGHEST
  URGENT
  CRITICAL
  NORMAL
  LOWEST
  MISSING
}

type Query {
  getAllUsers: [User]
  getActiveTasks: [Task]
  getPendingTasks: [Task]
  getUser(id: ID!): User
  getOrgs: [Org]
  getOrg(id:ID!) : Org
  getAllTasks: [Task]
  getTask(id: ID!): Task
}

type Mutation {
  addUser( input: UserInput): User
  createOrg(name: String!, email: String!): Org
  createTask(input: TaskInput ): Task
  updateTask(id: ID!, input: TaskInput  ): Task!
  deleteTask(id: ID!): Task
  login(email: String!, password: String!): AuthPayload!
}

type AuthPayload {
  user: User!
  token: String!
}

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

input UserInput {
  firstname: String!
  lastname: String! 
  email: String! 
  password: String!
  roles: [String]

}

input DiscussionInput {
  tags: [String]
  info: [String]
  taggedUser: [String]
}

type Discussion {
  tags: [String]
  info: [String]
  taggedUser: [String]
}
type Task {
  id: ID!
  taskID: String!
  title: String!
  description: String
  assignedTo: [ID!]
  status: TaskStatus!
  dueDate: String  
  assignedBy: ID!
  assignedByUser: User
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

`;

module.exports = typeDefs;
