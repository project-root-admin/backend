const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: { type: Array, default: [] },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", userSchema);
