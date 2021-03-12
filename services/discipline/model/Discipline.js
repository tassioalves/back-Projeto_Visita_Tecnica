const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'course',
      required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = Discipline = mongoose.model('discipline', schema);