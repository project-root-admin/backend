const taskQueryTypeDefs = `
  extend type Query {
    getTaskById(id: ID!): Task
    getAllTasks: [Task]
    getTasksByStatus(status: String!): [Task]
    getTasksByAssignedUser(userID: ID!): [Task]
  }
`;


module.exports = taskQueryTypeDefs


