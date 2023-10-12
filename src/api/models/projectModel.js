const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
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
        name: String,
        members:
          {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'users',
          },
        
        description: String,
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
          ref: 'users',
        },
      },
    ],
    budget: Number,
    progress: Number,
    notes: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    org: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'org',
      required: true,
    },
    tasks: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'tasks',
    }

  },
  {
    collection: 'projects',
  }
);

module.exports = mongoose.model('project', projectSchema);