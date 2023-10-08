const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  startDate: Date,
  endDate: Date,
  status: String,
  priority: String,
  tags: [String],
  teamMembers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  milestones: [
    {
      name: String,
      description: String,
      dueDate: Date,
    },
  ],
  attachments: [
    {
      name: String,
      fileUrl: String,
      uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  budget: Number,
  progress: Number,
  notes: String,
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  sprintPlanning: {
    sprintStartDate: Date,
    sprintEndDate: Date,
    capacity: Number,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
