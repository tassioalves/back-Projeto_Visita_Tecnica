const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = Branch = mongoose.model('branch', schema);