const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  number: {
    type: Number,
    required: true
  },
  sector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sector',
    required: true
  },
  discipline: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'discipline',
    required: true}],
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = Company = mongoose.model('company', schema);
