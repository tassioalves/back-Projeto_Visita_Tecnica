const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  visit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'visit',
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = Comment = mongoose.model('comment', schema);