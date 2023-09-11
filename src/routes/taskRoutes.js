const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Route to get all tasks
router.get('/tasks', taskController.getAllTasks);

// Route to create a new task
router.post('/tasks', taskController.createTask);

module.exports = router;