const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

// Connect to the database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Middleware to parse request bodies
app.use(express.json());


// Mount the task routes
app.use('/taskApi', taskRoutes);

// Mount the user routes
app.use('/createUserApi', userRoutes);

module.exports = app;