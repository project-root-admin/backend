const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    org: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "org",
    },
    project:{
     type: [mongoose.Schema.Types.ObjectId],
     ref: "project",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          // Use a regular expression to validate the email format
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Validate the password length (minimum 6 characters)
          return value.length >= 6;
        },
        message: "Password must be at least 6 characters long",
      },
    },
    tasks: { type: Array, default: [] },
    roles: [{ type: String, 
      enum: ['ADMIN', 'GUEST', 'USER'],
      default: ["user"] }],
    permissions: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("user", userSchema);