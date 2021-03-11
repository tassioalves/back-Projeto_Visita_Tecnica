const mongoose = require('mongoose');
const status = require('../enum/status');

const schema = new mongoose.Schema({
  visit: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
  },
  status: {
    type: String,
    required: true,
    default: status.EM_ANALISE,
    enum: Object.values(status)
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = Subscription = mongoose.model('subscription', schema);