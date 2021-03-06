const mongoose = require('mongoose');
const status = require('../enum/status');

const schema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  vacancies: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: status.ABERTA,
    enum: Object.values(status)
  },
  course:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  timeToLeave: {
    type: Date,
    required: true,
  },
  timeToArrive: {
    type: Date,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = Visit = mongoose.model('visit', schema);
