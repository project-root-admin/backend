const typeDefs = `
type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  tasks: [Task!]!
}

type Org {
  id: ID!
  name: String!
  email: String!
  members: [User!]!
}

type Task {
  id: ID!
  title: String!
  description: String
  status: TaskStatus!
  dueDate: String
  assignedTo: User
  createdBy: User!
  createdAt: String!
}

enum TaskStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
}

type Query {
  getAllUsers: [User!]!
  getUser(id: ID!): User
  getOrgs: [Org!]!
  getOrg(id:ID!) : Org
  tasks: [Task!]!
}

type Mutation {
  addUser(name: String!, email: String!, password: String!): User!
  createOrg(name: String!, email: String!): Org!
  createTask(
    title: String!
    description: String
    status: TaskStatus!
    dueDate: String
    assignedTo: ID
    createdBy: ID!
  ): Task!
  updateTask(
    id: ID!
    title: String
    description: String
    status: TaskStatus
    dueDate: String
    assignedTo: ID
  ): Task!
  deleteTask(id: ID!): Task!
}
`;

module.exports = typeDefs;
