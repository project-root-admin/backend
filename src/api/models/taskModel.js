const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskID: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  assignedTo: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'users',
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'HOLD', 'CANCELLED'],
    required: true,
  },
  dueDate: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  followedBy: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'users',
  },
  discussion: {
    type: [
      {
        tags: [String],
        info: String,
        taggedUser: [String],
      },
    ],
  },
  taskType: {
    type: String,
    enum: ['FEATURE', 'BUG', 'QA', 'UI DESIGN', 'PR', 'OTHER'], // Define your task types here
  },
  dependencies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tasks',
    },
  ],
  acceptanceCriteria: {
    type: String,
  },
  startDate: Date,
  completedDate: Date,
  estimatedTime: Number,
  timestampInfo: {
    startedAt: Date,
    pausedTimes: [{
      pausedAt: Date,
      resumedAt: Date
    }],
    completedAt:  Date,
  },

  trackedMinutes: {
    type: Number,
    default: 0,
  },
  priority: {
    type: String,
    enum: ['HIGHEST', 'URGENT', 'CRITICAL', 'NORMAL', 'LOWEST', 'MISSING'],
  },
  valueArea: {
    type: [String],
  },
  logs: {
    type: [String],
  },
  links: {
    type: [],
  },
  org: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'orgs',
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'projects',
    required: true,
  },
    createdAt: { type: Date, default: Date.now },

},
{
    collection: "tasks"
  }
);

module.exports = mongoose.model('task', taskSchema);
