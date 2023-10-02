const taskQueryTypeDefs = `
  extend type Query {
    getActiveTasks: [Task]
    getPendingTasks: [Task]
    getAllTasks: [Task]
    getTask(id: ID!): Task
  }
`;


module.exports = taskQueryTypeDefs


