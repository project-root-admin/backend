const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    orgId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'org',
      required: true,
    },
    members: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      }],
      required: true,
      validate: {
        validator: async function (members) {
          const org = await mongoose.model('org').findById(this.orgId);
          const orgMembers = org.members.map(member => member.toString());
          return members.every(member => orgMembers.includes(member.toString()));
        },
        message: 'Invalid members for the project',
      },
    },
  },
  {
    collection: 'projects',
  }
);

module.exports = mongoose.model('project', projectSchema);