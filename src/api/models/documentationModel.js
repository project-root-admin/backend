const mongoose = require('mongoose');

const documentationSchema = new mongoose.Schema({
  title: String,
  description: String,
  args: [
    {
      name: String,
      type: String,
      description: String,
    },
  ],
  response: String,
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    required : true,
  },
  examples: [String],
});

const mutationQueryItemSchema = new mongoose.Schema({
  title: String,
});

module.exports = {
  Documentation: mongoose.model('Documentation', documentationSchema),
  MutationQueryItem: mongoose.model('MutationQueryItem', mutationQueryItemSchema),
};
