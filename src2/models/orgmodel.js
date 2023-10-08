const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  foundedDate: Date,
  website: String,
  industry: String,
  location: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  tags: [String],
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      role: {
        type: String,
        enum: ['ADMIN', 'GUEST', 'TEAM_LEAD', 'PROJECT_MANAGER', 'TEAM_MEMBER'],
      },
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
  projectsCompleted: Number,
  teams: [
    {
      name: String,
      members: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
      description: String,
    },
  ],
  clientList: [String],
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
