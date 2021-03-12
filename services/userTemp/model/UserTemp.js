const mongoose = require('mongoose');
const role = require('../enum/role');

const schema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    default: role.ESTUDANTE,
    enum: Object.values(role)
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
});

module.exports = UserTemp = mongoose.model('userTemp', schema);