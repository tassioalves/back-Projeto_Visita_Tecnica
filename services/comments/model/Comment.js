const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  visit: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = Comments = mongoose.model('comments', schema);