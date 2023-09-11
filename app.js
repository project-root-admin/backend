// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

// Connect to the database
mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Middleware to parse request bodies
app.use(express.json());

// Mount the task routes
app.use('/api', taskRoutes);

module.exports = app;