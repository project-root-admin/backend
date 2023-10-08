const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
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
  socialProfiles: [
    {
      platform: String,
      profileUrl: String,
    },
  ],
  permissions: [String],
  type: {
    type: String,
    enum: ['Admin', 'Employee'],
    default: 'Employee',
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE'],
    default: 'ACTIVE',
  },
  organizations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
