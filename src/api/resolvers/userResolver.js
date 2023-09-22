const User = require("../models/userModel");
const Tasks = require("../models/taskModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authenticate } = require("../middleware/checkLoginStatus");




const resolvers = {
  Task: {
    assignedByUser: async (Task) => {
      try {
        const user = await User.findById(Task.assignedBy);
        return user;
      } catch (error) {
        throw new Error("Failed to fetch User");
      }
    },
  },

  Query: {
    
 
    getAllUsers: async () => {
      try {
        const users = await User.find({});
        console.log(users);
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
  Mutation: {
    addUser: async (parent, { input }, context) => {
      try {
        const { email, password, roles, firstname, lastname } = input;
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error("User already exists.");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
          email,
          password: hashedPassword,
          roles,
          firstname,
          lastname
        });
        await newUser.save();
        console.log("user na");
        return newUser;
      } catch (error) {
        throw new Error("Failed to add user");
      }
    },

    login: async (parent, { email, password }, context) => {
      console.log('parent', parent)
      console.log('context', context)
      // Find user by email
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Invalid Credentials!");
      }

      // Compare password
      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        throw new Error("Credentials invalid!");
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

      return {
        user,
        token,
      };
    },

    createTask: async (parent, { input }) => {
      try {
        const task = await Tasks.create(input);
        return task;
      } catch (error) {
        console.log("err->", error.message);
        throw new Error("Failed to create task", error.message);
      }
    },
    updateTask: async (parent, { id, input }) => {
      try {
        const task = await Tasks.findByIdAndUpdate(id, input, { new: true });
        return task;
      } catch (error) {
        throw new Error("Failed to update task");
      }
    },
    deleteTask: async (parent, { id }) => {
      try {
        const task = await Tasks.findByIdAndDelete(id);
        return task;
      } catch (error) {
        throw new Error("Failed to delete task");
      }
    },
  },
};

module.exports = resolvers

