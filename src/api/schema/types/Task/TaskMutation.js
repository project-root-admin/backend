const taskMutationTypeDefs = `
  extend type Mutation {
  createTask(input: CreateTaskInput ): Task
  updateTask(id: ID!, input: UpdateTaskInput  ): Task!
  deleteTask(id: ID!): Task
  }
`;


module.exports = taskMutationTypeDefs


