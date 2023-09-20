const User = require("../models/userModel");
const Tasks = require("../models/taskModel");

const resolvers = {
  Task : {
    assignedByUser : async (Task) => {
      try {
        const user = await User.findById(Task.assignedBy);
        return user;
      } catch (error) {
        throw new Error("Failed to fetch User");
      }
    } 
  },
  Query: {
    getAllUsers: async () => {
      try {
        const users = await User.find({})
        console.log(users)  
        return users;
      } catch (error) {
        throw new Error("Failed to fetch User");
      }
    },

    getTask: async (parent, { id }) => {
      try {
        const task = await Tasks.findById(id);
        return task;
      } catch (error) {
        throw new Error('Failed to fetch task');
      }
    },
    getAllTasks: async () => {
      try {
        const tasks = await Tasks.find();
        return tasks;
      } catch (error) {
        throw new Error('Failed to fetch tasks');
      }
    },

    getActiveTasks: async () => {
      try {
        const tasks = await Tasks.find({ status: 'IN_PROGRESS' });
        return tasks;
      } catch (error) {
        throw new Error('Failed to fetch tasks');
      }
    },

    getPendingTasks: async () => {
      try {
        const tasks = await Tasks.find({ status: 'PENDING' });
        return tasks;
      } catch (error) {
        throw new Error('Failed to fetch tasks');
      }
    }
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      try {
        const newUser = new User({ name, email, password });
        const user = await newUser.save();
        return user;
      } catch (error) {
        throw new Error("Failed to add user");
      }
    },

    createTask: async (parent, { input }) => {
      try {
        const task = await Tasks.create(input);
        return task;
      } catch (error) {
        console.log('err->', error.message)
        throw new Error('Failed to create task', error.message);
      }
    },
    updateTask: async (parent, { id, input }) => {
      try {
        const task = await Tasks.findByIdAndUpdate(id, input, { new: true });
        return task;
      } catch (error) {
        throw new Error('Failed to update task');
      }
    },
    deleteTask: async (parent, { id }) => {
      try {
        const task = await Tasks.findByIdAndDelete(id);
        return task;
      } catch (error) {
        throw new Error('Failed to delete task');
      }
    },


  },
};

module.exports = resolvers;
