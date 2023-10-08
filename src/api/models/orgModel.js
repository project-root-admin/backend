const mongoose = require("mongoose");

const orgSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    orgId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
      type: String,
      required: true,
    },
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
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true, 
    },
    members: [

      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'users',
          default: function() {
            return [this.createdBy];
          },
        },
        role: {
          type: String,
          enum: ['ADMIN', 'GUEST', 'TEAM_LEAD', 'PROJECT_MANAGER', 'TEAM_MEMBER'],
        },
        status: {
          type: String,
          enum: ['ACTIVE', 'INACTIVE', 'PENDING'],
        }
      },        
    ],
    projects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'project',
        required: true
    },
    projectsCompleted: Number,

    createdAt: { type: Date, default: Date.now },
    teams: [
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
    clientList: [String],
  },
  {
    collection: "orgs",
  }
);

module.exports = mongoose.model("org", orgSchema);
