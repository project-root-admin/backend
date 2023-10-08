const Tasks = require('../../models/taskModel')
const taskQueryResolver = {
Query: {

  getTaskById: async (parent, { id }) => {
      try {
        const task = await Tasks.findById(id);
        return task;
      } catch (error) {
        throw new Error("Failed to fetch task");
      }
    },
    getAllTasks: async () => {
      try {
        const tasks = await Tasks.find();
        return tasks;
      } catch (error) {
        throw new Error("Failed to fetch tasks");
      }
    },

    getTasksByStatus: async (parent, { status }) => {
      try {
        const tasks = await Tasks.find({ status });
        return tasks;
      } catch (error) {
        throw new Error("Failed to fetch tasks");
      } 
    },

    getTasksByAssignedUser: async (parent, { userID }) => {
      try {
        const tasks = await Tasks.find({ assignedTo: userID });
        return tasks;
      } catch (error) {
        throw new Error("Failed to fetch tasks");
      }
    },

  },
}

module.exports = taskQueryResolver