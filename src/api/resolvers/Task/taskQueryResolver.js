const Tasks = require('../../models/taskModel')
const taskQueryResolver = {
Query: {

  getTask: async (parent, { id }) => {
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

    getActiveTasks: async () => {
      try {
        const tasks = await Tasks.find({ status: "IN_PROGRESS" });
        return tasks;
      } catch (error) {
        throw new Error("Failed to fetch tasks");
      }
    },

    getPendingTasks: async () => {
      try {
        const tasks = await Tasks.find({ status: "PENDING" });
        return tasks;
      } catch (error) {
        throw new Error("Failed to fetch tasks");
      }
    },
  },
}

module.exports = taskQueryResolver