const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: { type: Array, default: [] },
    roles: [{ type: String, default:['user'] }],
    permissions: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", userSchema);
