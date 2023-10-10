const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true }, 
    firstname: String,
    lastname: String,
    profilePicture: String,
    phoneNumber: String,
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    dateOfBirth: Date,
    bio: String,
    permissions: [String],
    type: {
      type: String,
      enum: ['ADMIN', 'EMPLOYEE', 'GUEST'],
      required: true,
    },
    organizations: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "orgs",
    },
    project:{
     type: [mongoose.Schema.Types.ObjectId],
     ref: "projects",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          // regex to validate the email format
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
    tasks: { type: [mongoose.Schema.Types.ObjectId], ref: "tasks", default: [] },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("user", userSchema);