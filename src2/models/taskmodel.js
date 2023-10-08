const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  boardStatus: String,
  sprintId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sprint',
  },
  storyPoints: Number,
  sprintPlanning: {
    sprintStartDate: Date,
    sprintEndDate: Date,
    capacity: Number,
  },
  dependencies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  startDate: Date,
  completedDate: Date,
  priority: String,
  estimatedHours: Number,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
