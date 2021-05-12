const mongoose = require('mongoose');
const status = require('../enum/status');

const schema = new mongoose.Schema({
  visit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'visit',
    required: true
  },
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
  },
  status: {
    type: String,
    required: true,
    default: status.EM_ANALISE,
    enum: Object.values(status)
  },
  presence:{
    type: Boolean,
    default: false,
  },
  assessment: {
    type: Number,
    required: true,
    default: 0
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = Subscription = mongoose.model('subscription', schema);
