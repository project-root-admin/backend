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
    ref: 'User',
    required: true,
  },
  followedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
  createdAt: {
    type: String,
    required: true,
  },
},
{
    collection: "tasks"
  }
);

module.exports = mongoose.model('Tasks', taskSchema);
