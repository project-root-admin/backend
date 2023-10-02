const mongoose = require("mongoose");

const orgSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    orgId: {
        type: String,
        required: true
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
    members: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'user',
        required: true,
        default: function() {
            return [this.createdBy];
          },
    },
    projects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'project',
        required: true
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "orgs",
  }
);

module.exports = mongoose.model("org", orgSchema);
