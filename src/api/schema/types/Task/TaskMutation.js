const userMutationTypeDefs = `
  extend type Mutation {
  createTask(input: TaskInput ): Task
  updateTask(id: ID!, input: TaskInput  ): Task!
  deleteTask(id: ID!): Task
  }
`;


module.exports = userMutationTypeDefs


