const Task = require('../../models/taskModel')
const taskMutationResolver = {
Mutation: {
    createTask: async (parent, { input }) => {
        try {
          const task = await Task.create(input);
          return task;
        } catch (error) {
          console.log("err->", error.message);
          throw new Error("Failed to create task", error.message);
        }
      },
      updateTask: async (parent, { id, input }) => {
        try {
          const task = await Task.findByIdAndUpdate(id, input, { new: true });
          return task;
        } catch (error) {
          throw new Error("Failed to update task");
        }
      },
      deleteTask: async (parent, { id }) => {
        try {
          const task = await Task.findByIdAndDelete(id);
          return task;
        } catch (error) {
          throw new Error("Failed to delete task");
        }
      },
  },
}

module.exports = taskMutationResolver