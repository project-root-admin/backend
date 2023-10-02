const mongoose = require("mongoose");

const orgMemberSchema = new mongoose.Schema(
  { id : {
    type: mongoose.Schema.Types.ObjectId,
  },
    org: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'org',
      required: true,
    },
    projects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'project',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    role: {
      type: String,
      enum: ['ADMIN', 'GUEST', 'TEAM_LEAD', 'PROJECT_MANAGER', 'TEAM_MEMBER'],
      default: 'TEAM_MEMBER',
      required: true,
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE', 'PENDING'],      
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "orgMembers",
  }
);

module.exports = mongoose.model("orgMember", orgMemberSchema);