const Project = require('../../models/projectModel');
const Task = require('../../models/taskModel')
const User = require('../../models/userModel')
const Org = require('../../models/orgModel')
const taskMutationResolver = {
Mutation: {
    createTask: async (parent, { input }) => {
        try {
          const org = await Org.findById(input.org);
          const project = await Project.findById(input.project);
          const user = await User.findById(input.createdBy);
          const taskLength = project.tasks.length
          const taskID = org && project ? 
          `${org.name.substring(0, 3).toUpperCase()}-${project.name.substring(0, 3).toUpperCase()}-${taskLength+1}` :
           `NoID`
          const task = new Task({
            taskID,
            status: "PENDING",
            ...input
          });

          await task.save()
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