const mongoose = require('mongoose');

const sprintSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  teamCapacity: Number,
  velocity: Number,
});

const Sprint = mongoose.model('Sprint', sprintSchema);

module.exports = Sprint;
