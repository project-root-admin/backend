const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
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
    ref: 'user',
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
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  followedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  discussion: {
    type: [
      {
        tags: [String],
        info: [String],
        taggedUser: [String],
      },
    ],
  },
  acceptanceCriteria: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  priority: {
    type: [String],
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
    ref: 'org',
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'project',
    required: true,
  },
    createdAt: { type: Date, default: Date.now },
},
{
    collection: "tasks"
  }
);

module.exports = mongoose.model('task', taskSchema);
